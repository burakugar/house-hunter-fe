import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { CreatedAtSearchType } from '@/routes/properties'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'

type CreatedAtFilterProps = {}

const CreatedAtFilter: FC<CreatedAtFilterProps> = () => {
  const { createdAt } = useSearch({
    from: '/properties'
  })

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(value: CreatedAtSearchType) {
    navigate({
      resetScroll: false,
      search: (prev) => {
        return {
          ...prev,
          createdAt: value
        }
      }
    })
  }

  return (
    <div>
      <Label className="mb-2 mt-1 block">Posted at</Label>
      <Select onValueChange={handleChange} value={createdAt}>
        <SelectTrigger className="h-8 py-0">
          <SelectValue placeholder="Select last added properties" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="last24hours">Last 24 hours</SelectItem>
          <SelectItem value="lastWeek">Last week</SelectItem>
          <SelectItem value="lastMonth">Last month</SelectItem>
          <Separator className="mx-auto my-1 h-[1px] w-[95%]" />
          <SelectItem value="ALL">Any</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default CreatedAtFilter
