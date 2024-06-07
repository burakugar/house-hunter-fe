import { DataTableColumnHeader } from '@/components/ui/table/column-header'
import { cn } from '@/lib/utils'
import { PropertyType } from '@/services/property-service/types'
import { CZK_DATE_FORMAT } from '@/utils/consts'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { Calendar, Check, Clock } from 'lucide-react'

export const requestedPropertiesColumns: ColumnDef<PropertyType>[] = [
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
      return <DataTableColumnHeader column={column} title="Available form" />
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
  }
]
