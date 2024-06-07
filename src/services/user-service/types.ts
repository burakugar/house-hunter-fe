import { UserRole } from '@/providers/AuthProvider/AuthProvider'
import { PaginationT } from '@/services/property-service/types'

export type GetAllUsersResponse = {
  content: UserRole[]
  pageable: PaginationT
  totalPages: number
  first: boolean
  last: boolean
}

export type AccountStatusType = 'ACTIVE' | 'NOT_ACTIVATED' | 'BLOCKED'

export type AccountVerificationStatus =
  | 'NOT_VERIFIED'
  | 'VERIFIED'
  | 'PENDING_VERIFICATION'

export type UserType = {
  accountStatus: AccountStatusType
  email: string
  id: string
  name: string
  phoneNumber: string
  role: UserRole
  surname: string
  verificationStatus: AccountVerificationStatus
}
