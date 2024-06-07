import { CardHeader } from '@/components/ui/card'
import PropertyCard from '@/components/ui/PropertyCard'
import { NewPropertyFormType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { EditPropertyFormType } from '@/pages/owner/edit-property/EditPropertyForm/useEditPropertyForm'
import { PropertyType } from '@/services/property-service/types'
import { CZK_DATE_FORMAT, furnishedMessage } from '@/utils/consts'
import { format } from 'date-fns'
import { FC } from 'react'

type NewPropertyPreviewProps = {
  property: NewPropertyFormType | PropertyType | EditPropertyFormType
  preview: string
}

const czkMoneyFormatter = Intl.NumberFormat('cs-Cz', {
  currency: 'CZK',
  currencyDisplay: 'narrowSymbol',
  currencySign: 'standard',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const PropertyPreview: FC<NewPropertyPreviewProps> = ({
  property,
  preview
}) => {
  const {
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
      ? czkMoneyFormatter.format(price) + ' / monthly'
      : czkMoneyFormatter.format(price)

  const formattedAvailableFrom = format(availableFrom, CZK_DATE_FORMAT)

  const rooms = numberOfRooms > 1 ? 'rooms' : 'room'

  return (
    <PropertyCard
      title={title}
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
        <CardHeader className="p-0 pb-4 sm:p-6">
          {preview ? (
            <img
              alt="Property Image"
              className="h-[300px] w-full overflow-clip rounded-t-md object-cover sm:rounded-md"
              src={preview}
            />
          ) : (
            <div className="h-[300px] w-full rounded-t-md bg-slate-100 object-contain sm:rounded-md" />
          )}
        </CardHeader>
      }
    />
  )
}

export default PropertyPreview
