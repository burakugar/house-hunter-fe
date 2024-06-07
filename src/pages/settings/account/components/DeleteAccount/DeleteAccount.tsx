import { router } from '@/app'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { AlertCircleIcon, Trash } from 'lucide-react'
import { FC, useState } from 'react'
import { toast } from 'sonner'

type DeleteAccountProps = {}

const DeleteAccount: FC<DeleteAccountProps> = () => {
  const auth = useAuthContext()
  const [open, setOpen] = useState(false)

  const deleteAccountMutation = useMutation({
    mutationKey: ['delete-account'],
    mutationFn: userService.deleteUser,
    onError: (error) => {
      toast.error('Error deleting user', {
        description: error.message
      })
    },
    onSuccess: () => {
      toast.success('User deleted successfully')

      router.invalidate()
      auth.logout()
    }
  })

  const handleClose = () => setOpen(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="destructive">
          <Trash className="h-4 w-4" />
          Delete account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertCircleIcon className="h-5 w-5 text-red-500" />
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteAccountMutation.mutate(auth.user.email)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteAccount
