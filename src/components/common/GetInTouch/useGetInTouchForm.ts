import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const getInTouchFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(80, 'Name must be 80 characters or less'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be 255 characters or less'),
  subject: z.enum(['COMPLAINT', 'QUESTION', 'VIEWING']),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(1000, 'Message must be 5000 characters or less')
})

export type GetInTouchFormType = z.infer<typeof getInTouchFormSchema>

export function useGetInTouchForm(defaultValues: GetInTouchFormType) {
  return useForm<GetInTouchFormType>({
    resolver: zodResolver(getInTouchFormSchema),
    mode: 'onChange',
    defaultValues: defaultValues
      ? defaultValues
      : {
          name: '',
          email: '',
          subject: undefined
        }
  })
}
