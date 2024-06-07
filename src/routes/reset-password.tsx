import { ResetPassword } from '@/pages'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { z } from 'zod'

const resetPasswordSearchSchema = z.object({
  token: z.coerce.string().min(1)
})

export const Route = createFileRoute('/reset-password')({
  validateSearch: (value) => resetPasswordSearchSchema.parse(value),
  component: ResetPassword,
  onError: () => {
    throw redirect({
      to: '/'
    })
  }
})
