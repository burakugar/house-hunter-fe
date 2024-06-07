import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'

import ErrorResult from '@/components/common/Errors/ErrorResult'
import NoContent from '@/components/common/Errors/NoContent'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { PaginationType } from '@/pages/admin/admin-dashboard/components/AdminTable/AdminTable'
import { DataTableServerPagination } from '@/pages/admin/admin-dashboard/components/AdminTable/server-pagination'
import { Dispatch, SetStateAction, useState } from 'react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isError: boolean
  pageCount: number
  pagination: PaginationType
  setPagination: Dispatch<SetStateAction<PaginationType>>
  refetch: () => void
}

export function ServerDataTable<TData, TValue>({
  columns,
  data,
  isError,
  pageCount,
  pagination,
  refetch,
  setPagination
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    pageCount: pageCount,
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    state: {
      pagination,
      sorting
    }
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          {isError ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="py-12">
                <ErrorResult className="mx-auto w-full" onRetry={refetch} />
              </TableCell>
            </TableRow>
          ) : (
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className=" text-center">
                    <NoContent className="mt-0 py-12" />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>

      <div className="mt-6">
        <DataTableServerPagination
          table={table}
          pagination={pagination}
          pageCount={pageCount}
          setPagination={setPagination}
        />
      </div>
    </div>
  )
}
