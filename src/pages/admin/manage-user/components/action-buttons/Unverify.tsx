import { Button } from '@/components/ui/button'
import { adminService } from '@/services/admin-service/admin-service'
import { useMutation } from '@tanstack/react-query'
import { CheckCheckIcon } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

type UnverifyUserUserProps = {
  userEmail: string
  refetch: () => void
}

const UnverifyUser: FC<UnverifyUserUserProps> = ({ userEmail, refetch }) => {
  const verifyMutation = useMutation({
    mutationKey: ['unverify-user-admin'],
    mutationFn: adminService.unverifyUser,
    onError: (error) => {
      toast.error('Error', {
        description: error.message
      })
    },
    onSuccess: () => {
      toast.success('Success', {
        description: 'User unverified',
        duration: 2000
      })

      refetch()
    }
  })

  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={() => verifyMutation.mutate(userEmail)}
    >
      <CheckCheckIcon className="h-4 w-4" />
      Unverify user
    </Button>
  )
}

export default UnverifyUser
