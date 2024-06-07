import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CZK_DATE_FORMAT, URL_SEARCH_DATE_FORMAT } from '@/utils/consts'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { addDays, format, formatDate } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { FC } from 'react'

type AvailableFromFilterProps = {}

const AvailableFromFilter: FC<AvailableFromFilterProps> = () => {
  const { availableFrom } = useSearch({
    from: '/properties'
  })

  const value = new Date(availableFrom)

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(value: Date) {
    navigate({
      resetScroll: false,
      search: (prev) => ({
        ...prev,
        availableFrom: formatDate(value, URL_SEARCH_DATE_FORMAT)
      })
    })
  }

  return (
    <div>
      <Label>Available from</Label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'flex h-8 w-[140px] justify-start gap-2 py-0 pl-3 text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="h-4 w-4 opacity-50" />
            {value ? format(value, CZK_DATE_FORMAT) : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleChange}
            disabled={{
              before: addDays(new Date(), 0)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default AvailableFromFilter
