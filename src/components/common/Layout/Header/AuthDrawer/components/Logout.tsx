import { Button } from '@/components/ui/button'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { authService } from '@/services/auth-service/auth-service'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { LogOut as LogoutIcon } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

type LogoutProps = {}

const Logout: FC<LogoutProps> = () => {
  const auth = useAuthContext()
  const navigate = useNavigate({
    from: ''
  })
  const { handleCloseDrawer } = useAuthDrawerContext()

  function handleLogout() {
    logoutMutation.mutate()
  }

  const logoutMutation = useMutation({
    mutationKey: ['logout'],
    mutationFn: authService.logout,
    onSuccess: () => {
      auth.logout()
      navigate({
        to: '/'
      })
      handleCloseDrawer()
    },
    onError: (error) => {
      toast.error('Error', {
        description: error.message
      })
    }
  })

  return (
    <Button
      onClick={handleLogout}
      loading={logoutMutation.isPending}
      className="mt-6 w-full flex-1"
    >
      <>
        {!logoutMutation.isPending && <LogoutIcon className="rotate-180" />}
        Log out
      </>
    </Button>
  )
}

export default Logout
