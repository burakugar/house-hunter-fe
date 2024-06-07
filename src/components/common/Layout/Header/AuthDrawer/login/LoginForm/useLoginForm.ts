import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z
    .string({
      description: 'First name'
    })
    .email({
      message: 'Invalid email format'
    }),
  password: z
    .string()
    .min(1, {
      message: 'Password is required'
    })
    .max(50, { message: 'Password must be at most 50 characters long' })
})

export type LoginFormType = z.infer<typeof loginFormSchema>

export function useLoginForm() {
  return useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })
}
