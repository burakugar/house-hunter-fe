import { CookiesDialog } from '@/components/common/CookiesDialog/CookiesDialog'
import FloatingGoUp from '@/components/common/FloatingGoUp/FloatingGoUp'
import { Toaster } from '@/components/ui/sonner'
import '@/index.css'
import LoadingPage from '@/pages/loading/Loading'
import { AuthContextType } from '@/providers/AuthProvider/AuthProvider'
import { QueryClient } from '@tanstack/react-query'
import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext
} from '@tanstack/react-router'

type RouteContext = {
  auth: AuthContextType
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouteContext>()({
  pendingComponent: LoadingPage,
  component: Index
})

function Index() {
  return (
    <>
      <CookiesDialog />
      <ScrollRestoration />
      <Outlet />
      <Toaster />
      <FloatingGoUp />
    </>
  )
}
