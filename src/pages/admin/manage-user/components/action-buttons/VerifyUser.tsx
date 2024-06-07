import { Button } from '@/components/ui/button'
import { adminService } from '@/services/admin-service/admin-service'
import { useMutation } from '@tanstack/react-query'
import { CheckCheckIcon } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

type VerifyUserProps = {
  userEmail: string
  refetch: () => void
}

const VerifyUser: FC<VerifyUserProps> = ({ userEmail, refetch }) => {
  const verifyMutation = useMutation({
    mutationKey: ['verify-user-admin'],
    mutationFn: adminService.verifyUser,
    onError: (error) => {
      toast.error('Error', {
        description: error.message
      })
    },
    onSuccess: () => {
      toast.success('Success', {
        description: 'User verified',
        duration: 2000
      })

      refetch()
    }
  })

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => verifyMutation.mutate(userEmail)}
    >
      <CheckCheckIcon className="h-4 w-4" />
      Verify user
    </Button>
  )
}

export default VerifyUser
