import { Button } from '@/components/ui/button'
import {
  defaultVerificationFormValues,
  VerificationFormType
} from '@/pages/settings/account/components/VerificationForm/useVerificationForm'
import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { Trash } from 'lucide-react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { toast } from 'sonner'

type DeleteDocumentProps = {
  document: string
  refresh: () => void
}

const DeleteDocument: FC<DeleteDocumentProps> = ({ document, refresh }) => {
  const form = useFormContext<VerificationFormType>()

  const deleteDocumentMutation = useMutation({
    mutationKey: ['delete-document'],
    mutationFn: userService.deleteDocument,
    onError: (error) => {
      toast.error('Error deleting document', {
        description: error.message
      })
    },
    onSuccess: () => {
      toast.success('Document deleted successfully')

      refresh()
      form.reset(defaultVerificationFormValues)
    }
  })

  return (
    <Button
      variant="ghost"
      size="noSize"
      type="button"
      onClick={() => deleteDocumentMutation.mutate(document)}
      loading={deleteDocumentMutation.isPending}
    >
      {!deleteDocumentMutation.isPending && (
        <Trash className="h-4 w-4 text-red-500" />
      )}
    </Button>
  )
}

export default DeleteDocument
