import { ErrorPage, InnerApp, NotFoundPage } from '@/pages'
import AuthDrawerProvider from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import AuthProvider from '@/providers/AuthProvider/AuthProvider'
import { routeTree } from '@/routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createHashHistory,
  createRouter,
  ParseRoute
} from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

export const queryClient = new QueryClient()

export const router = createRouter({
  routeTree,
  history: createHashHistory(),
  defaultPreload: 'intent',
  defaultErrorComponent: ErrorPage,
  defaultNotFoundComponent: NotFoundPage,
  context: {
    auth: undefined!,
    queryClient
  }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export type ValidRoutes = ParseRoute<typeof routeTree>['fullPath']

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthDrawerProvider>
          <InnerApp />
        </AuthDrawerProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
