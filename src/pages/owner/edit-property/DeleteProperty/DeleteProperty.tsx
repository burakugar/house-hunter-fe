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
import { propertyService } from '@/services/property-service/property-service'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { AlertCircleIcon, Trash } from 'lucide-react'
import { FC, useState } from 'react'
import { toast } from 'sonner'

type DeletePropertyProps = {
  property_id: string
}

const DeleteProperty: FC<DeletePropertyProps> = ({ property_id }) => {
  const navigate = useNavigate({
    from: '/manage-properties/edit/$id'
  })

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const deletePropertyMutation = useMutation({
    mutationKey: ['delete-property'],
    mutationFn: propertyService.deleteOne,
    onError: (error) => {
      toast.error('Error deleting property', {
        description: error.message
      })
    },
    onSuccess: () => {
      toast.success('Property deleted successfully')

      navigate({
        to: '/manage-properties'
      })
    }
  })

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <div className="flex justify-end">
            <Button size="sm" variant="destructive" className="mt-8">
              <Trash className="h-4 w-4" />
              Delete property
            </Button>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertCircleIcon className="h-5 w-5 text-red-500" />
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              property and remove data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletePropertyMutation.mutate(property_id)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default DeleteProperty
