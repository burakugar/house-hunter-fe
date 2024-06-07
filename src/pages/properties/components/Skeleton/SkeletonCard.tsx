import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { FC } from 'react'

type SkeletonCardProps = {}

const SkeletonCard: FC<SkeletonCardProps> = () => {
  return (
    <Card className="w-[full] p-6">
      <div>
        <div>
          <Skeleton className="h-[380px] w-full" />
          <Skeleton className="mt-6 h-4 w-1/2" />
          <Skeleton className="mt-2 h-4 w-1/3" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </Card>
  )
}

export default SkeletonCard
