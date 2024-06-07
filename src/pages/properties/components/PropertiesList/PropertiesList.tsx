import PropertyItem from '@/pages/properties/components/PropertyItem/PropertyItem'
import { PropertyType } from '@/services/property-service/types'
import { FC } from 'react'

type PropertiesListProps = {
  properties: PropertyType[]
}

const PropertiesList: FC<PropertiesListProps> = ({ properties }) => {
  return properties.map((property) => {
    return <PropertyItem key={property.id} property={property} />
  })
}

export default PropertiesList
