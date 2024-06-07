import { LoginFormType } from '@/components/common/Layout/Header/AuthDrawer/login/LoginForm/useLoginForm'
import { SignupPostValues } from '@/components/common/Layout/Header/AuthDrawer/signup/SignupForm/useSignupForm'
import { api, authApi } from '@/providers/AuthProvider/AuthProvider'
import { LoginResponse, RefreshResponse } from '@/services/auth-service/types'
import { jwtService, JWTUserPayload } from '@/services/jwt-service/jwt-service'
import axios from 'axios'

export const authService = {
  refresh: async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken') || ''

      const { data } = await api.post<RefreshResponse>('/auth/refreshToken', {
        token: refreshToken
      })

      const accessToken = data.token.split(' ')[1]
      const userData = jwtService.parse(accessToken)

      return {
        userData,
        accessToken
      } as { userData?: JWTUserPayload; accessToken?: string }
    } catch (error) {
      throw new Error('Not authorized')
    }
  },
  signup: async (signupData: SignupPostValues) => {
    try {
      await api.post('/user/register', signupData)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  login: async (loginData: LoginFormType) => {
    try {
      const { data } = await api.post<LoginResponse>('/auth/login', loginData)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error(error?.message)
      }
    }
  },
  logout: async () => {
    try {
      await authApi.post('/auth/logout')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error(error?.message)
      }
    }
  },
  updatePassword: async ({
    currentPassword,
    newPassword,
    email
  }: {
    currentPassword: string
    newPassword: string
    email: string
  }) => {
    try {
      await authApi.put('/user/password', {
        email,
        oldPassword: currentPassword,
        newPassword
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error(error?.message)
      }
    }
  }
}

export function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}
