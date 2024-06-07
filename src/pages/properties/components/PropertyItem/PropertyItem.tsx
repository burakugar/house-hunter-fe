import { CardHeader } from '@/components/ui/card'
import PropertyCard from '@/components/ui/PropertyCard'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { propertyService } from '@/services/property-service/property-service'
import { PropertyType } from '@/services/property-service/types'
import { CZK_DATE_FORMAT, furnishedMessage } from '@/utils/consts'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { FC } from 'react'

type PropertyItemProps = {
  property: PropertyType
}

const PropertyItem: FC<PropertyItemProps> = ({ property }) => {
  const {
    isLoading,
    data: images,
    isError
  } = useQuery({
    queryKey: ['property-image', property.id],
    queryFn: () => propertyService.getPropertyImages(property.id),
    retry: 1
  })

  const hasError = isError || images?.length == 0 || images == null

  const {
    id,
    title,
    description,
    squareMeters,
    address,
    price,
    adType,
    numberOfRooms,
    floorNumber,
    apartmentType,
    availableFrom,
    isFurnished
  } = property

  const lowercaseApType = apartmentType.toLowerCase().split('_').join(' + ')

  const formattedApType =
    lowercaseApType.at(0).toUpperCase() + lowercaseApType.slice(1)

  const formattedPrice =
    adType === 'RENTAL'
      ? czkCurrencyFormatter.format(price) + ' / monthly'
      : czkCurrencyFormatter.format(price)

  const formattedAvailableFrom = format(availableFrom, CZK_DATE_FORMAT)

  const rooms = numberOfRooms > 1 ? 'rooms' : 'room'

  return (
    <PropertyCard
      title={title}
      id={id}
      description={description}
      apartmentType={formattedApType}
      price={formattedPrice}
      isFurnished={furnishedMessage[isFurnished]}
      availableFrom={formattedAvailableFrom}
      squareMeters={squareMeters}
      floorNumber={floorNumber}
      numberOfRooms={`${numberOfRooms} ${rooms}`}
      address={address}
      adType={adType}
      cardHeader={
        <CardHeader
          className={cn({
            'py-0': hasError
          })}
        >
          {isLoading ? (
            <Skeleton className="h-[300px] w-full overflow-clip rounded-t-md object-cover sm:rounded-md" />
          ) : hasError ? null : (
            <img
              alt="Property Image"
              className="h-[300px] w-full overflow-clip rounded-t-md object-cover sm:rounded-md"
              src={`data:image/;base64,${images[0]}`}
            />
          )}
        </CardHeader>
      }
    />
  )
}

export default PropertyItem
