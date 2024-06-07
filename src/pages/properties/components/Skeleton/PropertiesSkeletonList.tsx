import SkeletonCard from '@/pages/properties/components/Skeleton/SkeletonCard'
import { FC } from 'react'

type SkeletonListProps = {}

const PropertiesSkeletonList: FC<SkeletonListProps> = () => {
  return new Array(10).fill(0).map((_, i) => <SkeletonCard key={i} />)
}

export default PropertiesSkeletonList
