import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'
import { z } from 'zod'

export const districtsSearch = [
  'PRAGUE 1',
  'PRAGUE 2',
  'PRAGUE 3',
  'PRAGUE 4',
  'PRAGUE 5',
  'PRAGUE 6',
  'PRAGUE 7',
  'PRAGUE 8',
  'PRAGUE 9',
  'ALL'
] as const

export const districtSearchSchema = z.enum(districtsSearch)
export type DistrictSearchType = z.infer<typeof districtSearchSchema>

const DistrictsFilter: FC = () => {
  const { district } = useSearch({
    from: '/properties'
  })

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(value: DistrictSearchType) {
    navigate({
      resetScroll: false,
      search: (prev) => ({
        ...prev,
        district: value
      })
    })
  }

  return (
    <div>
      <Label>District</Label>
      <Select onValueChange={handleChange} value={district}>
        <SelectTrigger className="h-8 py-0">
          <SelectValue placeholder="Select your district" />
        </SelectTrigger>

        <SelectContent>
          {districtsSearch.map((option) => (
            <SelectItem value={option} key={option}>
              {option.at(0).toUpperCase() + option.slice(1).toLowerCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default DistrictsFilter
