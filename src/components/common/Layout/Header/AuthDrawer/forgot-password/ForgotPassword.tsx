import {
  ForgotPasswordFormType,
  useForgotPasswordForm
} from '@/components/common/Layout/Header/AuthDrawer/forgot-password/useForgotPasswordForm'
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
import { Typography } from '@/components/ui/typography'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { ChevronLeft } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

type ForgotPasswordProps = {}

const ForgotPassword: FC<ForgotPasswordProps> = () => {
  const form = useForgotPasswordForm()
  const { handleTabChange } = useAuthDrawerContext()

  const forgotPasswordMutation = useMutation({
    mutationKey: ['forgot-password'],
    mutationFn: userService.forgotPassword,
    onSuccess: () => {
      toast.info('Verification code sent to your email!', {
        duration: 5_000
      })

      form.reset({
        email: ''
      })
    },
    onError: (error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  function onSubmit(values: ForgotPasswordFormType) {
    forgotPasswordMutation.mutate(values.email)
  }

  return (
    <div className="sm:w-[400px]">
      <div className="flex items-center gap-2">
        <Button
          size="noSize"
          variant="ghost"
          className="p-[6px]"
          onClick={() => handleTabChange('login')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Typography variant="h4">Forgot password</Typography>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
          <FormField
            control={form.control}
            name="email"
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

          <Button
            size="sm"
            className="mt-2"
            loading={forgotPasswordMutation.isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ForgotPassword
