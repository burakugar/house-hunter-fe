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
import { propertyTypeOptions } from '@/pages/owner/components/inputs/PropertyTypeSelect/propertyTypeData'
import { EditPropertyFormType } from '@/pages/owner/edit-property/EditPropertyForm/useEditPropertyForm'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'

type PropertyTypeSelectProps = {
  form: UseFormReturn<NewPropertyFormType> | UseFormReturn<EditPropertyFormType>
}

const PropertyTypeSelect: FC<PropertyTypeSelectProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="adType"
      render={({ field }) => (
        <FormItem className="">
          <FormLabel>Type</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {propertyTypeOptions.map((option) => (
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

export default PropertyTypeSelect
