import PasswordInput from '@/components/common/Layout/Header/AuthDrawer/components/PasswordInput'
import PasswordInputStrength from '@/components/common/Layout/Header/AuthDrawer/components/PasswordInputStrength'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { generateRandomString } from '@/lib/generateRandomValue'
import {
  ResetPasswordSchemaType,
  useResetPasswordForm
} from '@/pages/reset-password/components/ResetPasswordForm/useResetPassword'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { ClipboardEvent, FC } from 'react'
import { toast } from 'sonner'

type ResetPasswordFormProps = {}

const ResetPasswordForm: FC<ResetPasswordFormProps> = () => {
  const form = useResetPasswordForm()
  const { handleOpenDrawer, handleTabChange } = useAuthDrawerContext()

  const { token } = useSearch({
    from: '/reset-password'
  })

  const navigate = useNavigate({
    from: '/reset-password'
  })

  const resetPasswordMutation = useMutation({
    mutationKey: ['auth/resetPasswordMutation-password'],
    mutationFn: userService.resetPassword,
    onSuccess: () => {
      toast.success('Password reset successfully!')

      form.reset({
        new_password: '',
        confirm_password: ''
      })

      navigate({
        to: '/'
      })

      handleOpenDrawer()
      handleTabChange('login')
    },
    onError: (error) => {
      toast.error('Something went wrong.', {
        description: error.message
      })
    }
  })

  function onSubmit(values: ResetPasswordSchemaType) {
    resetPasswordMutation.mutate({
      token,
      new_password: values.new_password
    })
  }

  function onConfirmPasswordPaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault()

    form.setValue('confirm_password', generateRandomString(20), {
      shouldValidate: true
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex max-w-[600px] flex-col gap-4"
      >
        <FormField
          name="new_password"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="flex-1">
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <PasswordInputStrength
                    placeholder="Enter your new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          name="confirm_password"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="flex-1">
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <PasswordInput
                    onPaste={onConfirmPasswordPaste}
                    placeholder="Enter your new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <Button
          loading={resetPasswordMutation.isPending}
          size="sm"
          className="mt-2 self-start"
        >
          Reset password
        </Button>
      </form>
    </Form>
  )
}

export default ResetPasswordForm
