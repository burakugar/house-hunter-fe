import { Typography } from '@/components/ui/typography'
import ContactOwner from '@/pages/property/Property/components/ContactOwner/ContactOwner'
import FileComplaint from '@/pages/property/Property/components/FileComplaint/FileComplaint'
import ImagesCarousel from '@/pages/property/Property/components/ImagesCarousel/ImagesCarousel'
import PropertyDetails from '@/pages/property/Property/components/PropertyDetails/PropertyDetails'
import { PropertyType } from '@/services/property-service/types'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { FC } from 'react'

type PropertyProps = {
  property: PropertyType
  images: string[]
}

const Property: FC<PropertyProps> = ({ property, images }) => {
  const { price, adType, title } = property

  const formattedPrice =
    adType === 'RENTAL'
      ? czkCurrencyFormatter.format(price) + ' / monthly'
      : czkCurrencyFormatter.format(price)

  return (
    <>
      <section className="flex w-full flex-col items-start gap-4 rounded-md bg-gray-100 p-4 pb-12 lg:flex-row lg:items-end">
        <div className="min-w-[300px]">
          <Typography variant="h2">{title}</Typography>
          <div className="flex flex-col items-start gap-4">
            <div className="text-2xl font-bold">{formattedPrice}</div>
          </div>
        </div>

        <ImagesCarousel images={images} />
      </section>

      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <PropertyDetails property={property} />

        <ContactOwner owner={property.owner} />
      </div>

      <div className="mt-6 flex justify-end">
        <FileComplaint propertyId={property.id} />
      </div>
    </>
  )
}

export default Property
