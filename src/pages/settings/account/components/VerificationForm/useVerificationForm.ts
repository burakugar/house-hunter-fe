import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const identityDocumentTypeSchema = z.enum([
  'PASSPORT',
  'ID_CARD',
  'DRIVER_LICENSE',
  'RESIDENCE_PERMIT',
  'OTHER'
])

export type IdentityDocumentType = z.infer<typeof identityDocumentTypeSchema>

export const verificationFormSchema = z.object({
  type: identityDocumentTypeSchema,
  document: z.any().refine((file) => {
    return !!file
  }, 'Document is required.')
})
export type VerificationFormType = z.infer<typeof verificationFormSchema>

export const defaultVerificationFormValues = {
  type: 'PASSPORT' as const,
  document: null
}

export function useVerificationForm() {
  return useForm({
    resolver: zodResolver(verificationFormSchema),
    mode: 'onSubmit',
    defaultValues: defaultVerificationFormValues
  })
}
