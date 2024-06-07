import { ApartmentType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'

type ApartmentTypeOption = {
  label: string
  value: ApartmentType
}

export const apartmentTypeOptions: ApartmentTypeOption[] = [
  { value: 'ONE_KK', label: '1 Room + Kitchenette' },
  { value: 'ONE_ONE', label: '1 Room + 1 Living Room' },
  { value: 'TWO_KK', label: '2 Rooms + Kitchenette' },
  { value: 'TWO_ONE', label: '2 Rooms + 1 Living Room' },
  { value: 'THREE_KK', label: '3 Rooms + Kitchenette' },
  { value: 'THREE_ONE', label: '3 Rooms + 1 Living Room' },
  { value: 'FOUR_KK', label: '4 Rooms + Kitchenette' },
  { value: 'FOUR_ONE', label: '4 Rooms + 1 Living Room' },
  { value: 'FIVE_KK', label: '5 Rooms + Kitchenette' },
  { value: 'FIVE_ONE', label: '5 Rooms + 1 Living Room' },
  { value: 'SIX_KK', label: '6 Rooms + Kitchenette' },
  { value: 'SIX_ONE', label: '6 Rooms + 1 Living Room' },
  { value: 'SEVEN_KK', label: '7 Rooms + Kitchenette' },
  { value: 'SEVEN_ONE', label: '7 Rooms + 1 Living Room' }
]
