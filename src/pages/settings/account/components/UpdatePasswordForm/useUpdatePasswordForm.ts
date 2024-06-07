import { passwordSchema } from '@/components/common/Layout/Header/AuthDrawer/signup/SignupForm/useSignupForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const updatePasswordFormSchema = z
  .object({
    current_password: passwordSchema,
    new_password: passwordSchema,
    confirm_password: z.string()
  })
  .refine((values) => values.new_password === values.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password']
  })
  .refine((values) => values.current_password !== values.new_password, {
    message: 'New password cannot be the same as the current password',
    path: ['new_password']
  })

export type UpdatePasswordSchemaType = z.infer<typeof updatePasswordFormSchema>

export function useUpdatePasswordForm() {
  return useForm<UpdatePasswordSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(updatePasswordFormSchema)
  })
}
