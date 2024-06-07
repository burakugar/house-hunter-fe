import ErrorResult from '@/components/common/Errors/ErrorResult'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Typography } from '@/components/ui/typography'
import VerificationSkeletonList from '@/pages/settings/account/components/VerificationForm/components/VerificationSkeletonList'
import DeleteDocument from '@/pages/settings/account/components/VerificationForm/inputs/DeleteDocument/DeleteDocument'
import DocumentFile from '@/pages/settings/account/components/VerificationForm/inputs/DocumentFile/DocumentFile'
import DocumentSelect from '@/pages/settings/account/components/VerificationForm/inputs/DocumentSelect/DocumentSelect'
import {
  defaultVerificationFormValues,
  useVerificationForm,
  VerificationFormType
} from '@/pages/settings/account/components/VerificationForm/useVerificationForm'
import { userService } from '@/services/user-service/user-service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getRouteApi } from '@tanstack/react-router'
import { Paperclip } from 'lucide-react'

import { FC } from 'react'
import { toast } from 'sonner'

type VerificationFormProps = {}

const routeApi = getRouteApi('/_auth-user/_settings/settings/account')

const VerificationForm: FC<VerificationFormProps> = () => {
  const auth = routeApi.useRouteContext().auth

  const userEmail = auth?.user?.email

  const {
    data: documents,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['account_documents', userEmail],
    queryFn: () => userService.getDocuments(userEmail)
  })

  const form = useVerificationForm()

  const verifyMutation = useMutation({
    mutationKey: ['verify_account'],
    mutationFn: userService.verifyAccount,
    onSuccess: () => {
      toast.success('Document uploaded successfully', {
        description: 'We will verify your document and contact you shortly'
      })

      form.reset(defaultVerificationFormValues)

      refetch()
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })

      form.reset()
    }
  })

  function onSubmit(data: VerificationFormType) {
    verifyMutation.mutate(data)
  }

  if (isError) {
    return <ErrorResult onRetry={refetch} />
  }

  if (isLoading) {
    return <VerificationSkeletonList />
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-4"
      >
        {documents.length > 0 && (
          <div className="mb-4">
            <Typography variant="h4">
              You have submitted the following document:
            </Typography>

            <ul className="ml-3 mt-4 list-disc [&>li]:mt-2">
              {documents.map((document, i) => (
                <li key={i} className="flex items-center gap-4">
                  <Button variant="link" size="noSize">
                    <Paperclip className="h-4 w-4" />
                    {document.split('_', 2)[1]}
                  </Button>

                  <DeleteDocument document={document} refresh={refetch} />
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col gap-2 lg:flex-row">
          <div>
            <DocumentFile />
          </div>
          <div className="min-w-[300px]">
            <DocumentSelect />
          </div>
        </div>

        <Button
          type="submit"
          size="sm"
          className="self-start"
          loading={verifyMutation.isPending}
        >
          Upload
        </Button>
      </form>
    </Form>
  )
}

export default VerificationForm
