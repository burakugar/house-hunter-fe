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
  UpdatePasswordSchemaType,
  useUpdatePasswordForm
} from '@/pages/settings/account/components/UpdatePasswordForm/useUpdatePasswordForm'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { authService } from '@/services/auth-service/auth-service'
import { useMutation } from '@tanstack/react-query'
import { ClipboardEvent, FC } from 'react'
import { toast } from 'sonner'

const UpdatePasswordForm: FC = () => {
  const { user } = useAuthContext()
  const form = useUpdatePasswordForm()

  const updatePasswordMutation = useMutation({
    mutationKey: ['auth/update-password'],
    mutationFn: authService.updatePassword,
    onSuccess: () => {
      toast.success('Password updated successfully!')

      form.reset({
        confirm_password: '',
        current_password: '',
        new_password: ''
      })
    },
    onError: (error) => {
      toast.error('Something went wrong.', {
        description: error.message
      })
    }
  })

  function onSubmit(values: UpdatePasswordSchemaType) {
    updatePasswordMutation.mutate({
      currentPassword: values.current_password,
      newPassword: values.new_password,
      email: user.email
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
          name="current_password"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="flex-1">
                <FormLabel>Current password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter your current password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

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
          loading={updatePasswordMutation.isPending}
          size="sm"
          className="mt-2 self-start"
        >
          Update Password
        </Button>
      </form>
    </Form>
  )
}

export default UpdatePasswordForm
