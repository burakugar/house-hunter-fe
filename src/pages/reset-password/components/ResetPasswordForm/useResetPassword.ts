import { passwordSchema } from '@/components/common/Layout/Header/AuthDrawer/signup/SignupForm/useSignupForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const resetPasswordFormSchema = z
  .object({
    new_password: passwordSchema,
    confirm_password: z.string()
  })
  .refine((values) => values.new_password === values.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password']
  })

export type ResetPasswordSchemaType = z.infer<typeof resetPasswordFormSchema>

export function useResetPasswordForm() {
  return useForm<ResetPasswordSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      new_password: '',
      confirm_password: ''
    }
  })
}
