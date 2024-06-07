import { DataTable } from '@/components/common/DataTable/data-table'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { propertyService } from '@/services/property-service/property-service'
import { useQuery } from '@tanstack/react-query'
import { FC, useMemo } from 'react'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DataTableColumnHeader } from '@/components/ui/table/column-header'
import PreviewDocumentsDialogContent from '@/pages/admin/manage-user/components/ManageOwner/ManageOwnerRequestsTable/PreviewDocumentsDialog'
import { PropertyType } from '@/services/property-service/types'
import { CZK_DATE_FORMAT } from '@/utils/consts'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { Link } from '@tanstack/react-router'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { Calendar, Check, Clock, MoreHorizontal } from 'lucide-react'

type ManageOwnerRequestsTableProps = {
  email: string
}

const ManageOwnerRequestsTable: FC<ManageOwnerRequestsTableProps> = ({
  email
}) => {
  const {
    data: serverData,
    isLoading,
    refetch,
    isError
  } = useQuery({
    queryKey: ['properties/owner-requests', email],
    queryFn: () => propertyService.getPropertiesRequests(email)
  })

  const processedData = useMemo(() => {
    return (isLoading ? Array(10).fill({}) : serverData) ?? []
  }, [isLoading, serverData])

  const manageOwnerRequestsColumns: ColumnDef<PropertyType>[] = useMemo(
    () => [
      {
        accessorKey: 'apartmentType',
        header: 'Ap. type'
      },
      {
        accessorKey: 'adType',
        header: 'Ad type'
      },
      {
        accessorKey: 'price',
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Amount" />
        },
        enableSorting: true,
        cell: ({ row }) => {
          const price = row.original.price

          return <div>{czkCurrencyFormatter.format(price)}</div>
        }
      },
      {
        accessorKey: 'availableFrom',
        header: ({ column }) => {
          return (
            <DataTableColumnHeader column={column} title="Available form" />
          )
        },
        enableSorting: true,
        cell: ({ row }) => {
          const date = row.original.availableFrom

          return (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {format(date, CZK_DATE_FORMAT)}
            </div>
          )
        }
      },
      {
        accessorKey: 'status',
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Status" />
        },
        enableSorting: false,
        cell: ({ row }) => {
          const status = row.original.status

          const statusMessage = {
            VERIFIED: 'Verified',
            PENDING_REQUEST: 'Pending'
          }

          return (
            <div
              className={cn('flex items-center gap-2', {
                'text-green-500': status === 'VERIFIED',
                'text-yellow-500': status === 'PENDING_REQUEST'
              })}
            >
              {status === 'VERIFIED' && <Check className="h-4 w-4" />}
              {status === 'PENDING_REQUEST' && <Clock className="h-4 w-4" />}
              {statusMessage[status]}
            </div>
          )
        }
      },
      {
        id: 'actions',
        header: () => <div className="text-right">Actions</div>,
        cell: ({ row }) => {
          const propertyId = row.original?.id
          const documentName = row.original.ownershipDocument

          return (
            <div className="flex justify-end">
              <Dialog>
                <PreviewDocumentsDialogContent
                  refetch={refetch}
                  propertyId={propertyId}
                  documentName={documentName}
                />

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link
                      to={'/manage-properties/edit/$id'}
                      params={{
                        id: propertyId
                      }}
                    >
                      <DropdownMenuItem>Edit Property</DropdownMenuItem>
                    </Link>
                    <DialogTrigger>
                      <DropdownMenuItem>View documents</DropdownMenuItem>
                    </DialogTrigger>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Dialog>
            </div>
          )
        }
      }
    ],
    [refetch]
  )

  const columnsMemo = useMemo(
    () =>
      isLoading
        ? manageOwnerRequestsColumns.map((column) => {
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
        : manageOwnerRequestsColumns,
    [isLoading, manageOwnerRequestsColumns]
  )

  return (
    <div>
      <DataTable columns={columnsMemo} data={processedData} isError={isError} />
    </div>
  )
}

export default ManageOwnerRequestsTable
