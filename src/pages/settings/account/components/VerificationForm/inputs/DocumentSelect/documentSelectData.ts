import { IdentityDocumentType } from '@/pages/settings/account/components/VerificationForm/useVerificationForm'

type DocumentSelectItem = {
  value: IdentityDocumentType
  label: string
}

export const documentSelectData: DocumentSelectItem[] = [
  {
    value: 'PASSPORT',
    label: 'Passport'
  },
  {
    value: 'ID_CARD',
    label: 'ID Card'
  },
  {
    value: 'DRIVER_LICENSE',
    label: 'Driver License'
  },
  {
    value: 'RESIDENCE_PERMIT',
    label: 'Residence Permit'
  },
  {
    value: 'OTHER',
    label: 'Other'
  }
]
