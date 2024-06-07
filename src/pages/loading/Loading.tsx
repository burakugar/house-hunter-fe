import { Loader } from 'lucide-react'
import { FC } from 'react'

type LoadingPageProps = {}

const LoadingPage: FC<LoadingPageProps> = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  )
}

export default LoadingPage
