import { Skeleton } from '@/components/ui/skeleton'
import { FC } from 'react'

const VerificationSkeletonList: FC = () => {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-full" />
    </div>
  )
}

export default VerificationSkeletonList
