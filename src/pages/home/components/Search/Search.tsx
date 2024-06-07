import { buttonVariants } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import {
  DistrictFormType,
  districtsForm
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { StatsResponse } from '@/services/stats-service/types'
import { UseQueryResult } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { ChevronRight, SearchIcon } from 'lucide-react'
import { FC, useState } from 'react'

type SearchProps = {
  statsQuery: UseQueryResult<StatsResponse, Error>
}

const Search: FC<SearchProps> = ({ statsQuery }) => {
  const { isLoading, isError, data } = statsQuery
  const [district, setDistrict] = useState<DistrictFormType>('PRAGUE 1')
  const homesAround = data?.totalRentalProperties + data?.totalSaleProperties

  function handleChange(value: DistrictFormType) {
    setDistrict(value)
  }

  return (
    <div className="mt-6">
      <div className="relative mb-4">
        <Select onValueChange={handleChange} value={district}>
          <div className="flex">
            <SelectTrigger className="rounded-l-full">
              <SelectValue placeholder="Select your district" />
            </SelectTrigger>
            <Link
              to="/properties"
              resetScroll={true}
              search={{
                district
              }}
              className={cn(buttonVariants(), 'rounded-r-full text-white')}
            >
              <span className="hidden sm:block">Search</span>
              <SearchIcon className="h-5 w-5" />
            </Link>
          </div>

          <SelectContent className="rounded-xl">
            {districtsForm.map((option) => (
              <SelectItem value={option} key={option}>
                {option.at(0).toUpperCase() + option.slice(1).toLowerCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="text-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? null : (
          <p className="text-md font-semibold text-gray-800">
            Properties around {homesAround}
          </p>
        )}

        <Link
          className={cn(
            buttonVariants({
              size: 'sm'
            }),
            'mt-8'
          )}
          to="/properties"
        >
          Browse All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default Search
