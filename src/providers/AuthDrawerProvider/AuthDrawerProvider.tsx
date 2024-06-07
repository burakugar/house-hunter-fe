import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

type AuthDrawerProviderType = {
  showMenu: boolean
  setShowMenu: Dispatch<SetStateAction<boolean>>
  handleOpenDrawer: () => void
  handleCloseDrawer: () => void
  activeTab: AuthDrawerTab
  handleTabChange: Dispatch<SetStateAction<AuthDrawerTab>>
}

type AuthDrawerProviderProps = {
  children: ReactNode
}

const AuthDrawerContext = createContext<AuthDrawerProviderType>(
  {} as AuthDrawerProviderType
)

export type AuthDrawerTab = 'login' | 'signup' | 'forgot-password'

const AuthDrawerProvider: FC<AuthDrawerProviderProps> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  const [activeTab, setActiveTab] = useState<AuthDrawerTab>('login')

  function handleTabChange(tab: AuthDrawerTab) {
    setActiveTab(tab)
  }

  function handleOpenDrawer() {
    setShowMenu(true)
  }

  function handleCloseDrawer() {
    setShowMenu(false)
  }

  const value = {
    showMenu,
    setShowMenu,
    handleOpenDrawer,
    handleCloseDrawer,
    activeTab,
    handleTabChange
  }

  return (
    <AuthDrawerContext.Provider value={value}>
      {children}
    </AuthDrawerContext.Provider>
  )
}

export function useAuthDrawerContext() {
  const context = useContext(AuthDrawerContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export default AuthDrawerProvider
