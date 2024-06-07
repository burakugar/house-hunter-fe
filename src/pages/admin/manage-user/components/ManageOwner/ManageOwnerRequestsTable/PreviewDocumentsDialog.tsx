import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { adminService } from '@/services/admin-service/admin-service'
import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { Paperclip } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

type PreviewDocumentsDialogContentProps = {
  propertyId: string
  documentName: string
  refetch: () => void
}

const PreviewDocumentsDialogContent: FC<PreviewDocumentsDialogContentProps> = ({
  propertyId,
  documentName,
  refetch
}) => {
  const extensionCandidate = documentName?.split('.')?.pop()

  const extension =
    extensionCandidate === 'pdf' ||
    extensionCandidate === 'png' ||
    extensionCandidate === 'jpg' ||
    extensionCandidate === 'jpeg'
      ? extensionCandidate
      : 'jpeg'

  const verifyPropertyMutation = useMutation({
    mutationKey: ['verify-property'],
    mutationFn: adminService.verifyProperty,
    onSuccess: () => {
      toast.success('Property verified', {
        duration: 2_000
      })
      refetch()
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  const rejectPropertyMutation = useMutation({
    mutationKey: ['reject-property'],
    mutationFn: adminService.rejectProperty,
    onSuccess: () => {
      toast.success('Property rejected')
      refetch()
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  async function handleDownload(documentName: string) {
    try {
      const { imageData, formattedFileName } =
        await userService.downloadDocument(documentName)

      const url = window.URL.createObjectURL(imageData)
      const a = document.createElement('a')
      a.href = url
      a.download = `${formattedFileName}.${extension}`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)

      return true
    } catch (error) {
      toast.error('Error downloading document', {
        description: error.response.data.message
      })
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Ownership proof</DialogTitle>
      </DialogHeader>

      <div className="pb-12 pt-2">
        {documentName ? (
          <div className="flex items-center gap-2">
            <Paperclip className="h-4 w-4 shrink-0" />

            <span
              className="cursor-pointer underline-offset-2 hover:underline"
              onClick={() => handleDownload(documentName)}
            >
              {documentName}
            </span>
          </div>
        ) : (
          <p className="text-muted-foreground">No documents uploaded</p>
        )}
      </div>

      <DialogFooter className="gap-1">
        <Button
          size="sm"
          variant="outline"
          loading={verifyPropertyMutation.isPending}
          onClick={() => verifyPropertyMutation.mutate(propertyId)}
        >
          Verify property
        </Button>
        <Button
          size="sm"
          variant="destructive"
          loading={rejectPropertyMutation.isPending}
          onClick={() => rejectPropertyMutation.mutate(propertyId)}
        >
          Reject property
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}

export default PreviewDocumentsDialogContent
