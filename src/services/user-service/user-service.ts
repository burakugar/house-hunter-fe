import { GetInTouchFormType } from '@/components/common/GetInTouch/useGetInTouchForm'
import { VerificationFormType } from '@/pages/settings/account/components/VerificationForm/useVerificationForm'
import { api, authApi } from '@/providers/AuthProvider/AuthProvider'
import { GetAllUsersResponse, UserType } from '@/services/user-service/types'
import axios from 'axios'

export const userService = {
  verifyAccount: async (data: VerificationFormType) => {
    try {
      const formData = new FormData()

      formData.append('documentType', data.type)
      formData.append('file', data.document)

      return await authApi.post('/user/documents/upload', formData)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getDocuments: async (email: string) => {
    try {
      const { data } = await authApi.get<string[]>(`/user/documents/${email}`)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  deleteDocument: async (document: string) => {
    try {
      await authApi.delete(`/user/documents/${document}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getById: async (userId: string) => {
    try {
      const { data } = await authApi.get<UserType | undefined>(
        `/user/${userId}`
      )

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getAll: async (page: number, pageSize: number) => {
    try {
      const { data } = await authApi.get<GetAllUsersResponse>(`user/all`, {
        params: {
          size: pageSize,
          page
        }
      })

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  deleteUser: async (userEmail: string) => {
    try {
      await authApi.delete(`/user/${userEmail}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  downloadDocument: async (documentName: string) => {
    try {
      const response = await authApi.get(
        `/user/documents/download/${documentName}`,
        {
          responseType: 'blob',
          headers: {
            Accept: 'application/pdf'
          }
        }
      )

      const imageData = response.data
      const contentDisposition = response.headers['content-disposition']
      let filename: string
      let extension: string
      let formattedFileName: string

      if (contentDisposition) {
        filename = contentDisposition.split('filename=')[1]

        formattedFileName = filename.split('_')[1]

        const extensionSplit = filename ? filename.split('.') : ''
        extension = extensionSplit[1].slice(0, -1).toLowerCase()
      }

      return {
        imageData,
        extension,
        formattedFileName: formattedFileName.split('.')[0]
      }
    } catch (error) {
      throw new Error('Something went wrong')
    }
  },
  forgotPassword: async (email: string) => {
    try {
      await api.post('/user/forgot-password', null, {
        params: {
          email
        }
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  resetPassword: async ({
    token,
    new_password
  }: {
    token: string
    new_password: string
  }) => {
    try {
      await api.post(
        '/user/reset-password',
        { newPassword: new_password },
        {
          params: {
            token
          }
        }
      )
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  },
  getInTouch: async (
    values: GetInTouchFormType & {
      propertyId?: string
    }
  ) => {
    try {
      const { data } = await api.post(`user/request`, values)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message)
      } else {
        throw new Error('Something went wrong')
      }
    }
  }
}
