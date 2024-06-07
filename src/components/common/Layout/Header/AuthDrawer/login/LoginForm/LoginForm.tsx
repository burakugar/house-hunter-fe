import PasswordInput from '@/components/common/Layout/Header/AuthDrawer/components/PasswordInput'
import {
  LoginFormType,
  useLoginForm
} from '@/components/common/Layout/Header/AuthDrawer/login/LoginForm/useLoginForm'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { authService } from '@/services/auth-service/auth-service'
import { jwtService } from '@/services/jwt-service/jwt-service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

function LoginForm() {
  const { handleTabChange } = useAuthDrawerContext()
  const auth = useAuthContext()
  const form = useLoginForm()

  const loginMutation = useMutation({
    mutationFn: authService.login,
    mutationKey: ['auth/login'],
    onSuccess: (response) => {
      const userData = jwtService.parse(response.token)

      form.reset()

      auth.login(
        {
          email: userData.email,
          type: userData.role,
          status: userData.status
        },
        response.refreshToken,
        response.token
      )
    },
    onError: (error) => {
      toast.error('Something went wrong.', {
        description: error.message
      })
    }
  })

  async function onSubmit(values: LoginFormType) {
    loginMutation.mutate(values)
  }

  return (
    <div className="mt-6 w-full sm:w-[400px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 flex flex-col"
        >
          <div className="flex flex-col gap-3">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        inputMode="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mt-2" />
                  </FormItem>
                )
              }}
            />
          </div>

          <Button
            type="button"
            variant="link"
            size="noSize"
            onClick={() => handleTabChange('forgot-password')}
            className="mt-3 self-start underline"
          >
            Forgot password
          </Button>

          <Button
            type="submit"
            className="mt-6 gap-2"
            loading={loginMutation.isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
