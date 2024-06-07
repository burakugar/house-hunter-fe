import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  newPropertyFormDefaultValues,
  NewPropertyFormType,
  useNewPropertyForm
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import NewPropertyFormFields from '@/pages/owner/components/inputs/NewPropertyFormFields'
import PropertyPreview from '@/pages/owner/components/PropertyPreview/PropertyPreview'

import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { propertyService } from '@/services/property-service/property-service'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { FC, useState } from 'react'
import { toast } from 'sonner'

type NewPropertyFormProps = {}

const NewPropertyForm: FC<NewPropertyFormProps> = () => {
  const [propertyId, setPropertyId] = useState('')
  const form = useNewPropertyForm()

  const previewImg = form.watch().images[0]
    ? URL.createObjectURL(form.watch().images[0])
    : ''

  const navigate = useNavigate({
    from: '/manage-properties/add-new'
  })

  const property = form.watch()

  const auth = useAuthContext()
  const deletePropertyMutation = useMutation({
    mutationKey: ['delete-property'],
    mutationFn: (propertyId: string) =>
      propertyService.deleteProperty(propertyId),
    onError: () => {
      toast.error('Something went wrong')
    }
  })

  const uploadDocumentMutation = useMutation({
    mutationKey: ['upload-ownership-document'],
    mutationFn: propertyService.uploadOwnershipDocument,
    onSuccess: () => {
      toast.success('Property request submitted successfully', {
        duration: 2_000
      })

      form.reset(newPropertyFormDefaultValues)

      if (imagesMutation.isSuccess && newPropertyMutation.isSuccess) {
        if (auth?.user?.type === 'ADMIN') {
          navigate({
            to: '/admin-dashboard'
          })
        } else {
          navigate({
            to: '/manage-properties'
          })
        }
      } else {
        toast.error('Something went wrong')
      }
    },
    onError: (error: Error, data) => {
      toast.error('Error uploading document', {
        description: error.message
      })

      deletePropertyMutation.mutate(data.propertyId)
    }
  })

  const imagesMutation = useMutation({
    mutationKey: ['images'],
    mutationFn: (args: { propertyId: string; images: File[] }) =>
      propertyService.uploadImages(
        args.propertyId,
        args.images,
        auth?.accessToken
      ),
    onSuccess: () => {
      uploadDocumentMutation.mutate({
        propertyId: propertyId,
        document: form.getValues('document'),
        accessToken: auth.accessToken
      })
    },
    onError: (error: Error, data) => {
      toast.error('Something went wrong', {
        description: error.message
      })

      deletePropertyMutation.mutate(data.propertyId)
    }
  })

  const newPropertyMutation = useMutation({
    mutationKey: ['newProperty'],
    retry: false,
    mutationFn: propertyService.createOne,
    onSuccess: (propertyId) => {
      const images = form.getValues('images').filter((image) => !!image)

      setPropertyId(propertyId)
      imagesMutation.mutate({
        propertyId: propertyId,
        images
      })
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
      setPropertyId('')
    }
  })

  function onSubmit(values: NewPropertyFormType) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { images, document, ...rest } = values

    const formattedValues = {
      ...rest,
      availableFrom: new Date(
        values.availableFrom
      ).toISOString() as unknown as Date,
      ownerEmail: auth?.user?.email
    }

    newPropertyMutation.mutate(formattedValues)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col-reverse items-stretch gap-4 md:flex-row md:items-start"
      >
        <div className="flex-1">
          <NewPropertyFormFields />

          <Button type="submit" size="sm" className="mt-4">
            Submit
          </Button>
        </div>

        <div className="mt-[21px] flex-1">
          <PropertyPreview property={property} preview={previewImg} />
        </div>
      </form>
    </Form>
  )
}

export default NewPropertyForm
