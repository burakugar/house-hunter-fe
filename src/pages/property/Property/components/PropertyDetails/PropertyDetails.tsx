import DetailItem from '@/pages/property/Property/components/PropertyDetails/DetailItem'
import { PropertyType } from '@/services/property-service/types'
import { CZK_DATE_FORMAT, furnishedMessage } from '@/utils/consts'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { format } from 'date-fns'
import { FC } from 'react'

type PropertyDetailsProps = {
  property: PropertyType
}

const PropertyDetails: FC<PropertyDetailsProps> = ({ property }) => {
  const {
    description,
    squareMeters,
    address,
    price,
    adType,
    numberOfRooms,
    floorNumber,
    apartmentType,
    availableFrom,
    isFurnished,
    district
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
    <section className="w-full">
      <h2 className="text-2xl font-bold">Property Details</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 rounded-lg border-2 border-dashed p-4 sm:grid-cols-2">
        <DetailItem title="Address" description={address} />

        <DetailItem title="Description" description={description} />

        <DetailItem title="Rooms" description={`${numberOfRooms} ${rooms}`} />

        <DetailItem
          title="Available from"
          description={formattedAvailableFrom}
        />

        <DetailItem title="Apartment type" description={formattedApType} />
        <DetailItem title="Price" description={formattedPrice} />
        <DetailItem title="Floor number" description={floorNumber} />
        <DetailItem title="Square meters" description={squareMeters} />
        <DetailItem
          title="District"
          description={
            district.at(0).toUpperCase() + district.slice(1).toLowerCase()
          }
        />

        <DetailItem
          title="Is furnished"
          description={furnishedMessage[isFurnished]}
        />
      </div>
    </section>
  )
}

export default PropertyDetails
