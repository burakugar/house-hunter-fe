import { router } from '@/app'
import LoadingPage from '@/pages/loading/Loading'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { RouterProvider } from '@tanstack/react-router'
import { useMemo } from 'react'

const InnerApp = () => {
  const auth = useAuthContext()

  const routerContext = useMemo(() => {
    return auth
  }, [auth])

  if (auth?.isLoading) {
    return <LoadingPage />
  }

  return (
    <RouterProvider
      router={router}
      context={{
        auth: routerContext
      }}
    />
  )
}

export default InnerApp
