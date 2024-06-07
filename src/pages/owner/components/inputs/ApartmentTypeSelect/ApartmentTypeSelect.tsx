import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { NewPropertyFormType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { apartmentTypeOptions } from '@/pages/owner/components/inputs/ApartmentTypeSelect/ApartmentTypeData'
import { EditPropertyFormType } from '@/pages/owner/edit-property/EditPropertyForm/useEditPropertyForm'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'

type ApartmentTypeSelectProps = {
  form: UseFormReturn<NewPropertyFormType> | UseFormReturn<EditPropertyFormType>
}

const ApartmentTypeSelect: FC<ApartmentTypeSelectProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="apartmentType"
      render={({ field }) => (
        <FormItem className="min-w-[200px]">
          <FormLabel>Apartment type</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
            </FormControl>

            <SelectContent className="max-h-[300px]">
              {apartmentTypeOptions.map((option) => (
                <SelectItem value={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ApartmentTypeSelect
