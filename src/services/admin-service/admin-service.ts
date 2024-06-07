import { authApi } from '@/providers/AuthProvider/AuthProvider'
import axios from 'axios'

export const adminService = {
  verifyUser: async (userEmail: string) => {
    try {
      await authApi.put(`/user/admin/verify/${userEmail}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  unverifyUser: async (userEmail: string) => {
    try {
      await authApi.put(`/user/admin/unverify/${userEmail}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  blockUser: async (userEmail: string) => {
    try {
      await authApi.post(`/user/block/${userEmail}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  verifyProperty: async (propertyId: string) => {
    try {
      await authApi.put(`/properties/admin/verify/${propertyId}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  rejectProperty: async (propertyId: string) => {
    try {
      await authApi.put(`/properties/admin/reject/${propertyId}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  }
}
