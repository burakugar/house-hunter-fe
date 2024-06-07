import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const forgotPasswordFormSchema = z.object({
  email: z.string().email('Please enter a valid email')
})

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordFormSchema>

export function useForgotPasswordForm() {
  return useForm<ForgotPasswordFormType>({
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: ''
    }
  })
}
