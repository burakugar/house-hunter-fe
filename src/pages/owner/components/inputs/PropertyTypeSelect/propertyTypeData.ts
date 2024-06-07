import { AdType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'

type PropertyTypeOption = {
  label: string
  value: AdType
}

export const propertyTypeOptions: PropertyTypeOption[] = [
  {
    label: 'Rental',
    value: 'RENTAL'
  },
  {
    label: 'Sale',
    value: 'SALE'
  }
]
