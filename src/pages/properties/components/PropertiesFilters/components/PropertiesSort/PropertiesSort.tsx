import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { SortSearchType } from '@/routes/properties'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'
type PropertiesSortProps = {}

type SelectItemValue = 'price_asc' | 'price_desc' | 'createdAt'

const PropertiesSort: FC<PropertiesSortProps> = () => {
  const { sort } = useSearch({
    from: '/properties'
  })

  const selectValue =
    sort.key === 'createdAt' ? 'createdAt' : sort.key + '_' + sort.order

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(value: SelectItemValue) {
    const sortArr = value.split('_')

    const sortKey = value === 'createdAt' ? 'createdAt' : sortArr[0]

    const sortValue = value === 'createdAt' ? 'desc' : sortArr[1]

    navigate({
      resetScroll: false,
      search: (prev) => {
        return {
          ...prev,
          page: 1,
          sort: {
            key: sortKey,
            order: sortValue
          } as SortSearchType
        }
      }
    })
  }

  return (
    <div className="min-w-[150px] sm:min-w-[230px]">
      <Select onValueChange={handleChange} value={selectValue}>
        <SelectTrigger className="h-8 py-0" withoutIcon>
          <div className="flex items-center gap-2">
            <CaretSortIcon className="h-4 w-4" />
            <SelectValue />
          </div>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="price_asc">From cheap to expensive</SelectItem>
          <SelectItem value="price_desc">From expensive to cheap</SelectItem>
          <SelectItem value="createdAt">Newest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default PropertiesSort
