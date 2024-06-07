import * as React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon
} from '@radix-ui/react-icons'
import { MoreHorizontal } from 'lucide-react'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    aria-label="Go to previous page"
    size="default"
    variant="outline"
    className={cn('h-8 w-8 p-0', className)}
    {...props}
  >
    <ChevronLeftIcon className="h-4 w-4" />
  </Button>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationGoFirst = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    aria-label="Go to previous page"
    size="default"
    variant="outline"
    className={cn('h-8 w-8 p-0', className)}
    {...props}
  >
    <DoubleArrowLeftIcon className="h-4 w-4" />
  </Button>
)
PaginationPrevious.displayName = 'PaginationGoFirst'

const PaginationGoLast = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    aria-label="Go to previous page"
    size="default"
    variant="outline"
    className={cn('h-8 w-8 p-0', className)}
    {...props}
  >
    <DoubleArrowRightIcon className="h-4 w-4" />
  </Button>
)
PaginationPrevious.displayName = 'PaginationGoLast'
const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    aria-label="Go to next page"
    size="default"
    variant="outline"
    className={cn('h-8 w-8 p-0', className)}
    {...props}
  >
    <ChevronRightIcon className="h-4 w-4" />
  </Button>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = () => (
  <div className="flex h-8 w-8 items-center justify-center p-0">
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </div>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationGoFirst,
  PaginationGoLast,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
}
