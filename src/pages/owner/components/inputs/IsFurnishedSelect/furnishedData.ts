import { FurnishedType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'

type OptionType = {
  label: string
  value: FurnishedType
}

export const furnishedOptions: OptionType[] = [
  {
    label: 'Furnished',
    value: 'FURNISHED'
  },
  {
    label: 'Not furnished',
    value: 'UNFURNISHED'
  },
  {
    label: 'Partially',
    value: 'SEMI_FURNISHED'
  }
]
