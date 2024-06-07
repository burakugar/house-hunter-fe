import { api } from '@/providers/AuthProvider/AuthProvider'
import { StatsResponse } from '@/services/stats-service/types'
import axios from 'axios'

export const statsService = {
  getStats: async () => {
    try {
      const { data } = await api.get<StatsResponse>('/stats')
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
