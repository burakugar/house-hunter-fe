import { cn } from '@/lib/utils'
import { InboxIcon } from 'lucide-react'
import { FC } from 'react'

type NoContentProps = {
  className?: string
}

const NoContent: FC<NoContentProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'mt-12 flex flex-col items-center justify-center',
        className
      )}
    >
      <InboxIcon className="h-12 w-12 text-gray-400" />
      <p className="mt-4 text-gray-500 dark:text-gray-400">No content found</p>
    </div>
  )
}

export default NoContent
