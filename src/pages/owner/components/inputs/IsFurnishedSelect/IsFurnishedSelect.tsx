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
import { furnishedOptions } from '@/pages/owner/components/inputs/IsFurnishedSelect/furnishedData'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

const IsFurnishedSelect: FC = () => {
  const form = useFormContext<NewPropertyFormType>()

  return (
    <FormField
      control={form.control}
      name="isFurnished"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Furnished?</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {furnishedOptions.map((option) => (
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

export default IsFurnishedSelect
