import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { NewPropertyFormType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { CZK_DATE_FORMAT } from '@/utils/consts'
import { addDays, format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

const AvailableFromInput: FC = () => {
  const form = useFormContext<NewPropertyFormType>()

  return (
    <FormField
      name="availableFrom"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>Move in date</FormLabel>

            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'flex w-[200px] justify-start gap-2 pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                    {field.value ? (
                      format(field.value, CZK_DATE_FORMAT)
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={{
                    before: addDays(new Date(), 1)
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default AvailableFromInput
