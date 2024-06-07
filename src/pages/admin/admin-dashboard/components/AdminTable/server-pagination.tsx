import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon
} from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { PaginationType } from '@/pages/admin/admin-dashboard/components/AdminTable/AdminTable'
import { Dispatch, SetStateAction, useState } from 'react'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  pagination: PaginationType
  setPagination: Dispatch<SetStateAction<PaginationType>>
  pageCount: number
}

export function DataTableServerPagination<TData>({
  table,
  pagination,
  setPagination,
  pageCount
}: DataTablePaginationProps<TData>) {
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  function goNext() {
    if (pagination.pageIndex + 1 < pageCount) {
      setPagination({
        ...pagination,
        pageIndex: pagination.pageIndex + 1
      })
    }
  }

  function goPrev() {
    if (pagination.pageIndex > 0) {
      setPagination({
        ...pagination,
        pageIndex: pagination.pageIndex - 1
      })
    }
  }

  function goLast() {
    setPagination({
      ...pagination,
      pageIndex: pageCount - 1
    })
  }

  function goFirst() {
    setPagination({
      ...pagination,
      pageIndex: 0
    })
  }

  return (
    <div className="flex items-center justify-end px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={pagination.pageSize.toString()}
            open={isSelectOpen}
            onOpenChange={() => {
              setIsSelectOpen(!isSelectOpen)
            }}
            onValueChange={(value) => {
              setPagination({
                pageIndex: 0,
                pageSize: Number(value)
              })
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={goFirst}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={goPrev}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={goNext}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={goLast}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
