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
import { documentSelectData } from '@/pages/settings/account/components/VerificationForm/inputs/DocumentSelect/documentSelectData'
import { VerificationFormType } from '@/pages/settings/account/components/VerificationForm/useVerificationForm'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type DocumentSelectProps = {}

const DocumentSelect: FC<DocumentSelectProps> = () => {
  const form = useFormContext<VerificationFormType>()

  return (
    <FormField
      name="type"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>Document type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
              </FormControl>

              <SelectContent className="max-h-[300px]">
                {documentSelectData.map((option) => (
                  <SelectItem value={option.value} key={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default DocumentSelect
