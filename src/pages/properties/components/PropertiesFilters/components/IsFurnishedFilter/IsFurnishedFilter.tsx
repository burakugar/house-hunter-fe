import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { IsFurnishedSearchType } from '@/routes/properties'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'

const IsFurnishedFilter: FC = () => {
  const { isFurnished } = useSearch({
    from: '/properties'
  })

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(value: IsFurnishedSearchType) {
    navigate({
      resetScroll: false,
      search: (prev) => ({
        ...prev,
        isFurnished: value
      })
    })
  }

  return (
    <div>
      <Label>Furnished?</Label>
      <Select onValueChange={handleChange} value={isFurnished}>
        <SelectTrigger className="h-8 py-0">
          <SelectValue placeholder="Select a verified email to display" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="FURNISHED">Furnished</SelectItem>
          <SelectItem value="UNFURNISHED">Not furnished</SelectItem>
          <SelectItem value="SEMI_FURNISHED">Semi-furnished</SelectItem>
          <Separator className="mx-auto my-1 h-[1px] w-[95%]" />
          <SelectItem value="ALL">Any</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default IsFurnishedFilter
