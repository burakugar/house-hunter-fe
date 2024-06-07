import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { adminColumns } from '@/pages/admin/admin-dashboard/components/AdminTable/admin-columns'
import { ServerDataTable } from '@/pages/admin/admin-dashboard/components/AdminTable/server-data-table'
import { userService } from '@/services/user-service/user-service'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { FC, useMemo, useState } from 'react'

type AdminTableProps = {}

export type PaginationType = {
  pageIndex: number
  pageSize: number
}

const USER_PAGE_SIZE = 10

const AdminTable: FC<AdminTableProps> = () => {
  const [pagination, setPagination] = useState<PaginationType>({
    pageIndex: 0,
    pageSize: USER_PAGE_SIZE
  })

  const {
    data: serverData,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['admin-table', pagination],
    queryFn: () =>
      userService.getAll(pagination.pageIndex, pagination.pageSize),
    placeholderData: keepPreviousData
  })

  const pageCount = serverData?.totalPages

  const processedData = useMemo(() => {
    return (isLoading ? Array(10).fill({}) : serverData?.content) ?? []
  }, [isLoading, serverData?.content])

  const columnsMemo = useMemo(
    () =>
      isLoading
        ? adminColumns.map((column) => {
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
        : adminColumns,
    [isLoading]
  )

  return (
    <ServerDataTable
      columns={columnsMemo}
      data={processedData}
      isError={isError}
      refetch={refetch}
      pageCount={pageCount}
      setPagination={setPagination}
      pagination={pagination}
    />
  )
}

export default AdminTable
