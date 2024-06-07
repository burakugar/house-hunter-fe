import { Button } from '@/components/ui/button'
import { adminService } from '@/services/admin-service/admin-service'
import { useMutation } from '@tanstack/react-query'
import { Ban } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

type BlockUserProps = {
  userEmail: string
  refetch: () => void
  disabled: boolean
}

const BlockUser: FC<BlockUserProps> = ({ userEmail, refetch, disabled }) => {
  const blockMutation = useMutation({
    mutationKey: ['block-user-admin'],
    mutationFn: adminService.blockUser,
    onError: (error) => {
      toast.error('Error blocking user', {
        description: error.message
      })
    },
    onSuccess: () => {
      toast.success('User blocked successfully', {
        description: userEmail,
        duration: 2000
      })

      refetch()
    }
  })

  return (
    <Button
      size="sm"
      variant="destructive"
      disabled={disabled}
      onClick={() => blockMutation.mutate(userEmail)}
    >
      <Ban className="h-4 w-4" />
      Block user
    </Button>
  )
}

export default BlockUser
