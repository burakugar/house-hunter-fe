import { Skeleton } from '@/components/ui/skeleton'
import { FC } from 'react'

type UserSkeletonProps = {}

const UserSkeleton: FC<UserSkeletonProps> = () => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
      </div>
    </div>
  )
}

export default UserSkeleton
