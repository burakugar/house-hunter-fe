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

import {
  districtsForm,
  NewPropertyFormType
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { EditPropertyFormType } from '@/pages/owner/edit-property/EditPropertyForm/useEditPropertyForm'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'

type DistrictsSelectType = {
  form: UseFormReturn<NewPropertyFormType> | UseFormReturn<EditPropertyFormType>
}

const DistrictsSelect: FC<DistrictsSelectType> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="district"
      render={({ field }) => (
        <FormItem>
          <FormLabel>District</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select your district" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {districtsForm.map((option) => (
                <SelectItem value={option} key={option}>
                  {option.at(0).toUpperCase() + option.slice(1).toLowerCase()}
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

export default DistrictsSelect
