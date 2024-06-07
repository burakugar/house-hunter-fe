import { DataTable } from '@/components/common/DataTable/data-table'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { requestedPropertiesColumns } from '@/pages/owner/manage-properties/RequestedPropertiesTable/requested-properties-columns'
import { propertyService } from '@/services/property-service/property-service'
import { useQuery } from '@tanstack/react-query'
import { FC, useMemo } from 'react'

type RequestedPropertiesTableProps = {
  email: string
}

const RequestedPropertiesTable: FC<RequestedPropertiesTableProps> = ({
  email
}) => {
  const {
    data: serverData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['properties/owner', email],
    queryFn: () => propertyService.getPropertiesRequests(email)
  })

  const processedData = useMemo(() => {
    return (isLoading ? Array(10).fill({}) : serverData) ?? []
  }, [isLoading, serverData])

  const columnsMemo = useMemo(
    () =>
      isLoading
        ? requestedPropertiesColumns.map((column) => {
            return {
              ...column,
              cell: () => (
                <div
                  className={cn('flex', {
                    'justify-end': column.id === 'actions'
                  })}
                >
                  <Skeleton className={cn('h-[18px] w-1/2')} />
                </div>
              )
            }
          })
        : requestedPropertiesColumns,
    [isLoading]
  )

  return (
    <div>
      <DataTable columns={columnsMemo} data={processedData} isError={isError} />
    </div>
  )
}

export default RequestedPropertiesTable
