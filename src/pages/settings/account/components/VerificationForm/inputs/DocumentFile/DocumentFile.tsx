import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { VerificationFormType } from '@/pages/settings/account/components/VerificationForm/useVerificationForm'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type DocumentFileProps = {}

const DocumentFile: FC<DocumentFileProps> = () => {
  const form = useFormContext<VerificationFormType>()
  return (
    <FormField
      name="document"
      control={form.control}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ field: { value, onChange, ...rest } }) => {
        return (
          <FormItem>
            <FormLabel>Document</FormLabel>
            <FormControl>
              <Input
                type="file"
                placeholder="Choose a document"
                accept=".pdf, .jpg, .png"
                {...rest}
                onChange={(event) =>
                  onChange(event.target?.files?.[0] ?? undefined)
                }
              />
            </FormControl>

            <FormMessage />

            <FormDescription>
              Upload a document to verify your identity. Accepted file types:
              JPG, PNG, PDF.
            </FormDescription>
          </FormItem>
        )
      }}
    />
  )
}

export default DocumentFile
