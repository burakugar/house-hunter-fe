import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DataTableColumnHeader } from '@/components/ui/table/column-header'
import { cn } from '@/lib/utils'
import { UserType } from '@/services/user-service/types'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import { Link } from '@tanstack/react-router'
import { CheckIcon, MoreHorizontal, ShieldCheck, X } from 'lucide-react'

export const adminColumns: ColumnDef<UserType>[] = [
  {
    accessorKey: 'name',
    enableSorting: true,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />
    },
    cell: ({ row }) => {
      const userName = row.original.name

      return <div className="">{userName}</div>
    }
  },
  {
    accessorKey: 'email',
    enableSorting: true,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />
    }
  },
  {
    accessorKey: 'verificationStatus',
    size: 100,
    enableSorting: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Verification status" />
      )
    },
    cell: ({ row }) => {
      const verificationStatus = row.original.verificationStatus

      const messages = {
        VERIFIED: 'Verified',
        PENDING_VERIFICATION: 'Pending',
        NOT_VERIFIED: 'Not Verified'
      }

      return (
        <Badge
          className={cn('border-none text-xs', {
            'bg-green-500 text-white': verificationStatus === 'VERIFIED',
            'bg-yellow-400 text-white':
              verificationStatus === 'PENDING_VERIFICATION',
            'bg-red-500 text-white': verificationStatus === 'NOT_VERIFIED'
          })}
          variant="outline"
        >
          {messages[verificationStatus]}
        </Badge>
      )
    }
  },
  {
    accessorKey: 'role',
    enableSorting: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Role" />
    },
    cell: ({ row }) => {
      const userRole = row.original.role

      const messages = {
        TENANT: 'Tenant',
        LANDLORD: 'Landlord',
        ADMIN: 'Admin'
      }

      return (
        <div className="flex items-center gap-2 font-semibold">
          {userRole === 'ADMIN' && <ShieldCheck className="h-3 w-3" />}
          {messages[userRole]}
        </div>
      )
    }
  },
  {
    accessorKey: 'accountStatus',
    enableSorting: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Account status" />
    },
    cell: ({ row }) => {
      const userStatus = row.original.accountStatus

      const messages = {
        ACTIVE: 'Active',
        NOT_ACTIVATED: 'Not active',
        BLOCKED: 'Blocked'
      }

      return (
        <div className="flex items-center gap-2 font-semibold">
          {userStatus === 'ACTIVE' && <CheckIcon className="h-3 w-3" />}
          {userStatus == 'NOT_ACTIVATED' && <X className="h-3 w-3" />}
          {userStatus == 'BLOCKED' && <X className="h-3 w-3" />}
          {messages[userStatus]}
        </div>
      )
    }
  },

  {
    id: 'actions',
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const user = row.original

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.id)}
              >
                Copy user ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link to="/admin-dashboard/$id" params={{ id: user.id }}>
                <DropdownMenuItem>View user</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  }
]
