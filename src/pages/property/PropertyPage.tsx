import { Container, Layout } from '@/components/common'
import ErrorResult from '@/components/common/Errors/ErrorResult'
import { Typography } from '@/components/ui/typography'
import SkeletonCard from '@/pages/properties/components/Skeleton/SkeletonCard'
import Property from '@/pages/property/Property/Property'

import { propertyService } from '@/services/property-service/property-service'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { FC } from 'react'

type PropertyPageProps = {}

const PropertyPage: FC<PropertyPageProps> = () => {
  const { id } = useParams({
    from: '/properties/$id'
  })

  const {
    isLoading,
    data: property,
    isError,
    refetch
  } = useQuery({
    queryKey: ['property', id],
    queryFn: () => propertyService.getById(id),
    retry: 1
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

  if (isError) {
    return (
      <Layout>
        <Container>
          <Link to=".." className="mt-4 inline-block">
            <ChevronLeft />
          </Link>

          <ErrorResult onRetry={refetch} className="mt-8" />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <Link to=".." className="mt-4 inline-block">
          <div className="flex items-center gap-2">
            <ChevronLeft />
            <Typography variant="h3">Property details</Typography>
          </div>
        </Link>

        <div className="mt-4">
          {isLoading || isImagesLoading ? (
            <SkeletonCard />
          ) : (
            <Property
              property={property}
              images={isImagesError ? [] : images}
            />
          )}
        </div>
      </Container>
    </Layout>
  )
}

export default PropertyPage
