import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { StatsResponse } from '@/services/stats-service/types'
import { UseQueryResult } from '@tanstack/react-query'
import { BadgeDollarSign, BookUser, HomeIcon, Users } from 'lucide-react'
import { FC } from 'react'

type StatsProps = {
  statsQuery: UseQueryResult<StatsResponse, Error>
}

const Stats: FC<StatsProps> = ({ statsQuery }) => {
  const { data: stats, isLoading, isError } = statsQuery

  if (isError) {
    return null
  }

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <Card className="flex flex-col items-center justify-center transition-shadow hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
            <HomeIcon className="h-8 w-8 text-gray-500" />
            <div className="text-3xl font-bold">
              {stats?.totalRentalProperties || 0}
            </div>
            <p className="text-center text-sm text-gray-500">
              Rental Properties
            </p>
          </CardContent>
        </Card>

        <Card className="transition-shadow hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
            <BadgeDollarSign className="h-8 w-8 text-gray-500" />
            <div className="text-3xl font-bold">
              {stats?.totalSaleProperties || 0}
            </div>
            <p className="text-gray-500">Sale Properties</p>
          </CardContent>
        </Card>
        <Card className="transition-shadow hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
            <BookUser className="h-8 w-8 text-gray-500" />
            <div className="text-3xl font-bold">
              {stats?.totalLandlords || 0}
            </div>
            <p className="text-gray-500">Total Landlords</p>
          </CardContent>
        </Card>
        <Card className="transition-shadow hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
            <Users className="h-8 w-8 text-gray-500" />
            <div className="text-3xl font-bold">{stats?.totalTenants || 0}</div>
            <p className="text-gray-500">Total Tenants</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Stats
