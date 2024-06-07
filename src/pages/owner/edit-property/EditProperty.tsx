import { Container, Layout } from '@/components/common'
import ErrorResult from '@/components/common/Errors/ErrorResult'
import { Skeleton } from '@/components/ui/skeleton'
import { Typography } from '@/components/ui/typography'
import DeleteProperty from '@/pages/owner/edit-property/DeleteProperty/DeleteProperty'
import EditPropertyForm from '@/pages/owner/edit-property/EditPropertyForm/EditPropertyForm'
import { propertyService } from '@/services/property-service/property-service'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { Link, useParams } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { FC } from 'react'

type EditPropertyProps = {}

const EditProperty: FC<EditPropertyProps> = () => {
  const router = useRouter()
  const onBack = () => router.history.back()

  const { id } = useParams({
    from: '/_auth-owner/manage-properties/edit/$id'
  })

  const {
    data: property,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['get-edit-property', id],
    queryFn: () => propertyService.getById(id)
  })

  const {
    isLoading: isImagesLoading,
    data: images,
    isError: isImagesError
  } = useQuery({
    queryKey: ['property-images', id],
    queryFn: () => propertyService.getPropertyImages(id),
    retry: 1
  })

  if (isLoading || isImagesLoading) {
    return (
      <Container className="mt-24 flex flex-col items-center justify-center gap-4">
        <Skeleton className="h-[20px] w-full" />
      </Container>
    )
  }

  if (isError || isImagesError) {
    return (
      <Layout>
        <Container>
          <ErrorResult className="mt-24" />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container className="mt-4 max-w-[1200px]">
        <div className="flex items-center gap-2">
          <Link onClick={onBack}>
            <ChevronLeft />
          </Link>
          <Typography variant="h4">Edit property</Typography>
        </div>

        <EditPropertyForm property={property} images={images} />

        <DeleteProperty property_id={id} />
      </Container>
    </Layout>
  )
}

export default EditProperty
