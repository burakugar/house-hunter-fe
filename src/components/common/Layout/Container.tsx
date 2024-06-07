import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>

const Container: FC<ContainerProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn('container px-4 sm:px-6', className)} {...rest}>
      {children}
    </div>
  )
}

export default Container
