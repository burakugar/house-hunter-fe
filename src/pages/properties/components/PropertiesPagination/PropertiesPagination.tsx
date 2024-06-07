import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationGoFirst,
  PaginationGoLast,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { GetAllPropertiesResponse } from '@/services/property-service/types'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'

type PropertiesPaginationProps = {
  data: GetAllPropertiesResponse
  isFetching: boolean
  isError: boolean
}

const PropertiesPagination: FC<PropertiesPaginationProps> = ({
  data,
  isFetching,
  isError
}) => {
  const navigate = useNavigate({
    from: '/properties'
  })
  const { page: currentPage } = useSearch({
    from: '/properties'
  })

  const isLast = data?.last
  const isFirst = data?.first

  const totalPages = data?.totalPages
  const visiblePageCount = 4 // Number of visible pages in the pagination

  let startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2))
  let endPage = startPage + visiblePageCount - 1

  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(1, endPage - visiblePageCount + 1)
  }

  const arrayOfVisiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  )

  const showRightEllipsis = endPage < totalPages
  const showLeftEllipsis = startPage > 1

  function handleNextPage() {
    navigate({
      resetScroll: true,
      search: (prev) => {
        return {
          ...prev,
          page: prev.page + 1
        }
      }
    })
  }

  function handlePreviousPage() {
    navigate({
      resetScroll: true,
      search: (prev) => {
        if (prev.page > 1) {
          return {
            ...prev,
            page: prev.page - 1
          }
        } else {
          return {
            ...prev,
            page: prev.page
          }
        }
      }
    })
  }

  function handleGoLast() {
    navigate({
      resetScroll: true,
      search: (prev) => ({
        ...prev,
        page: data.totalPages
      })
    })
  }

  function handleGoFirst() {
    navigate({
      resetScroll: true,
      search: (prev) => ({
        ...prev,
        page: 1
      })
    })
  }

  function handleGoToPage(page: number) {
    navigate({
      resetScroll: true,
      search: (prev) => ({
        ...prev,
        page
      })
    })
  }

  return (
    <Pagination className="mt-6">
      <PaginationContent>
        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationGoFirst
              disabled={isFetching || isFirst || isError}
              onClick={handleGoFirst}
            />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationPrevious
            disabled={isFirst || isFetching || isError}
            onClick={handlePreviousPage}
          />
        </PaginationItem>

        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {arrayOfVisiblePages.map((page) => (
          <PaginationItem className="" key={page}>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleGoToPage(page)}
              className={cn(
                'h-8 w-8 p-0',
                page === currentPage && 'bg-gray-100'
              )}
            >
              {page}
            </Button>
          </PaginationItem>
        ))}

        {showRightEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            disabled={isLast || isFetching || isError}
            onClick={handleNextPage}
          />
        </PaginationItem>

        {showRightEllipsis && (
          <PaginationItem>
            <PaginationGoLast
              disabled={isFetching || isLast || isError}
              onClick={handleGoLast}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

export default PropertiesPagination
