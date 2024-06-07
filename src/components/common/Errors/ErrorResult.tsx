import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AlertTriangle } from 'lucide-react'
import { FC } from 'react'

type ErrorResultProps = {
  onRetry?: () => void
  className?: string
}

const ErrorResult: FC<ErrorResultProps> = ({ onRetry, className }) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="space-y-4 text-center">
        <div className="flex  justify-center rounded-full p-4">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold">Oops, something went wrong!</h2>
        <p className="text-gray-500 dark:text-gray-400">
          There was an unexpected error. Please try again.
        </p>

        {onRetry ? (
          <Button variant="ghost" onClick={onRetry}>
            Try Again
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default ErrorResult
