import { ValidRoutes } from '@/app'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { FC, ReactNode } from 'react'

type SettingsLinkProps = {
  icon: ReactNode
  to: ValidRoutes
  children: ReactNode
}

const SettingsLink: FC<SettingsLinkProps> = ({ icon, to, children }) => {
  return (
    <Link
      to={to}
      className={cn(
        buttonVariants({
          variant: 'ghost',
          size: 'sm',
          className:
            'relative min-w-[180px] flex-grow justify-start gap-2 py-1 pl-4'
        })
      )}
      activeProps={{
        className: `bg-gray-100 before:h-5 before:w-1 before:rounded-md before:bg-blue-600 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1 before:content=['']`
      }}
    >
      {icon}

      {children}
    </Link>
  )
}

export default SettingsLink
