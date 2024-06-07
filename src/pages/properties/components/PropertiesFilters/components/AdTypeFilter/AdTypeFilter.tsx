import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { MAX_PRICE } from '@/pages/properties/components/PropertiesFilters/PropertiesFilters'
import { AdTypeSearchType } from '@/routes/properties'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'

type AdTypeFilterProps = {}

const AdTypeFilter: FC<AdTypeFilterProps> = () => {
  const { adType } = useSearch({
    from: '/properties'
  })

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(value: AdTypeSearchType) {
    const isFullPriceRangeAvailable = value === 'SALE' || value === 'ALL'

    navigate({
      resetScroll: false,
      search: (prev) => {
        return {
          ...prev,
          adType: value,
          minPrice: 0,
          maxPrice: isFullPriceRangeAvailable ? MAX_PRICE : 100_000
        }
      }
    })
  }

  return (
    <div>
      <Label className="mb-2 block">I'm here to...</Label>
      <Select onValueChange={handleChange} value={adType || 'ALL'}>
        <SelectTrigger className="h-8 py-0">
          <SelectValue placeholder="Select a verified email to display" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="RENTAL">Rent</SelectItem>
          <SelectItem value="SALE">Buy</SelectItem>
          <Separator className="mx-auto my-1 h-[1px] w-[95%]" />
          <SelectItem value="ALL">Any</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default AdTypeFilter
