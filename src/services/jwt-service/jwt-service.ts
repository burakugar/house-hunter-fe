import {
  UserRole,
  UserVerificationType
} from '@/providers/AuthProvider/AuthProvider'
import { jwtDecode } from 'jwt-decode'

export type JWTUserPayload = {
  role: UserRole
  email: string
  status: UserVerificationType
  exp: number
}

export const jwtService = {
  parse: (accessToken: string): JWTUserPayload | null => {
    try {
      const parsedPayload = jwtDecode<JWTUserPayload>(accessToken)

      return parsedPayload
    } catch (error) {
      throw new Error('Invalid token')
    }
  }
}
