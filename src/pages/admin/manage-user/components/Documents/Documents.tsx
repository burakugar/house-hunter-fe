import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { userService } from '@/services/user-service/user-service'
import { FileIcon, InboxIcon } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

type DocumentsProps = {
  documents: string[]
}

const Documents: FC<DocumentsProps> = ({ documents }) => {
  const extensionCandidate = documents?.[0]?.split('.')?.pop()

  const extension =
    extensionCandidate === 'pdf' ||
    extensionCandidate === 'png' ||
    extensionCandidate === 'jpg' ||
    extensionCandidate === 'jpeg'
      ? extensionCandidate
      : 'jpeg'

  const formattedDocName = documents?.[0]?.split('_')[1]

  const isEmpty = documents?.length === 0

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
    <div>
      <Label htmlFor="documents">Document</Label>

      {isEmpty ? (
        <div className="mt-2">
          <InboxIcon className="ml-1 h-6 w-6 text-muted-foreground" />
          <p className="ml-1 mt-1 text-xs text-muted-foreground">
            No documents uploaded
          </p>
        </div>
      ) : (
        <div className="mt-2 flex flex-col items-start gap-2">
          {documents?.map((document, i) => (
            <div key={i}>
              <Badge
                variant="outline"
                key={document}
                className="cursor-pointer"
                onClick={() => handleDownload(document)}
              >
                <div className="flex items-center gap-2">
                  <FileIcon className="h-4 w-4" />
                  <span className="underline underline-offset-2">
                    {formattedDocName}
                  </span>
                </div>
              </Badge>
              <p className="text-xs text-muted-foreground">Click to download</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Documents
