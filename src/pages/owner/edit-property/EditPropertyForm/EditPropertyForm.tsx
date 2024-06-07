import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  newPropertyFormDefaultValues,
  NewPropertyFormType
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import PropertyPreview from '@/pages/owner/components/PropertyPreview/PropertyPreview'
import EditPropertyFormFields from '@/pages/owner/edit-property/EditPropertyForm/components/EditPropertyFormFields/EditPropertyFormFields'
import { useEditNewPropertyForm } from '@/pages/owner/edit-property/EditPropertyForm/useEditPropertyForm'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { propertyService } from '@/services/property-service/property-service'
import { PropertyType } from '@/services/property-service/types'
import { base64ToFile } from '@/utils/base64ToFile'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { FC } from 'react'
import { toast } from 'sonner'

type EditPropertyFormProps = {
  property: PropertyType
  images: string[]
}

const EditPropertyForm: FC<EditPropertyFormProps> = ({ property, images }) => {
  const navigate = useNavigate({
    from: '/manage-properties/edit/$id'
  })

  const auth = useAuthContext()
  const files = images.length
    ? images.map((base64) => base64ToFile(base64, 'name'))
    : []

  const form = useEditNewPropertyForm({
    title: property.title,
    description: property.description,
    address: property.address,
    numberOfRooms: property.numberOfRooms,
    floorNumber: property.floorNumber,
    adType: property.adType,
    isFurnished: property.isFurnished,
    availableFrom: new Date(property.availableFrom),
    price: property.price,
    apartmentType: property.apartmentType,
    squareMeters: property.squareMeters,
    images: files,
    district: property.district
  })

  const watchedProperty = form.watch()

  const previewImg = form.watch().images[0]
    ? URL.createObjectURL(form.watch().images[0])
    : ''

  const imagesMutation = useMutation({
    mutationKey: ['images'],
    mutationFn: (args: { propertyId: string; images: File[] }) =>
      propertyService.updateImages(
        args.propertyId,
        args.images,
        auth?.accessToken
      ),
    onSuccess: () => {
      toast.success('Property updated successfully')

      form.reset(newPropertyFormDefaultValues)

      if (auth?.user?.type === 'ADMIN') {
        navigate({
          to: '/admin-dashboard'
        })
      } else {
        navigate({
          to: '/manage-properties'
        })
      }
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  const editPropertyMutation = useMutation({
    mutationKey: ['edit-property'],
    retry: false,
    mutationFn: propertyService.updateOne,
    onSuccess: () => {
      const images = form.getValues('images').filter((image) => !!image)

      toast.success('Property data updated successfully', {
        duration: 1_500
      })

      imagesMutation.mutate({
        propertyId: property.id,
        images
      })
    },
    onError: (error: Error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  function onSubmit(values: NewPropertyFormType) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { images, ...rest } = values

    const formattedValues = {
      ...rest,
      availableFrom: new Date(
        values.availableFrom
      ).toISOString() as unknown as Date
    }

    if (!form.getFieldState('availableFrom').isDirty) {
      delete formattedValues.availableFrom
    }

    editPropertyMutation.mutate({
      values: formattedValues,
      propertyId: property.id
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col-reverse items-stretch gap-4 md:flex-row md:items-start"
      >
        <div className="flex-1">
          <EditPropertyFormFields />

          <Button
            type="submit"
            size="sm"
            className="mt-4"
            disabled={
              editPropertyMutation.isPending || imagesMutation.isPending
            }
          >
            Submit
          </Button>
        </div>

        <div className="mt-[21px] flex-1">
          <PropertyPreview property={watchedProperty} preview={previewImg} />
        </div>
      </form>
    </Form>
  )
}

export default EditPropertyForm
