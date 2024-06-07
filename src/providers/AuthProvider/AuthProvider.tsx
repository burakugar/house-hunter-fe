import { queryClient } from '@/app'
import { authService } from '@/services/auth-service/auth-service'
import { RefreshResponse } from '@/services/auth-service/types'
import { jwtService } from '@/services/jwt-service/jwt-service'
import axios from 'axios'
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

export const API_URL = import.meta.env.VITE_API_URL

export const api = axios.create({
  baseURL: API_URL,
  paramsSerializer: {
    indexes: null
  }
})

export const authApi = axios.create({
  baseURL: API_URL
})

type AuthProviderProps = {
  children: ReactNode
}

export type UserRole = 'TENANT' | 'LANDLORD' | 'ADMIN'
export type UserVerificationType =
  | 'VERIFIED'
  | 'PENDING_VERIFICATION'
  | 'NOT_VERIFIED'

export type UserDTO = {
  email: string
  type: UserRole
  status: UserVerificationType
}

export type AuthContextType = {
  user: UserDTO | null | undefined
  login: (user: UserDTO, refreshToken: string, accessToken: string) => void
  logout: () => void
  isLoading: boolean
  isError: boolean
  accessToken: string | undefined
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDTO>()
  const [accessToken, setAccessToken] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.refresh()

        if (data.userData) {
          setUser({
            email: data.userData.email,
            type: data.userData.role,
            status: data.userData.status
          })
        } else {
          setUser(null)
        }

        setAccessToken(data.accessToken)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  authApi.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        const refreshToken = localStorage.getItem('refreshToken') || ''

        const { data } = await api.post<RefreshResponse>('/auth/refreshToken', {
          token: refreshToken
        })

        const accessToken = data.token.split(' ')[1]
        const userData = jwtService.parse(accessToken)

        if (accessToken) {
          originalRequest.headers.Authorization = 'Bearer ' + accessToken

          authApi.defaults.headers.common['Authorization'] =
            'Bearer ' + accessToken

          queryClient.setQueryData(['refresh'], {
            accessToken,
            userData: {
              email: userData.email,
              role: userData.role
            }
          })
        }

        return authApi(originalRequest)
      }

      return Promise.reject(error)
    }
  )

  authApi.interceptors.request.use(
    (config) => {
      if (!config?.headers?.Authorization) {
        if (!accessToken) {
          return config
        }

        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  function login(user: UserDTO, refreshToken: string, accessToken: string) {
    setUser(user)
    setAccessToken(accessToken)

    localStorage.setItem('refreshToken', refreshToken)
  }

  function logout() {
    setUser(null)
    setAccessToken('')

    localStorage.removeItem('refreshToken')
  }

  const value = {
    user,
    login,
    logout,
    isLoading,
    isError,
    accessToken: accessToken
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthProvider
