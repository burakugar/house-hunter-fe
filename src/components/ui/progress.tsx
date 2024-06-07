import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/lib/utils'

const PasswordProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    isColorful?: boolean
  }
>(({ className, value, isColorful = false, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn('h-full w-full flex-1 transition-all', {
        'bg-red-500': isColorful && value && value < 40,
        'bg-yellow-500': isColorful && value && value >= 40 && value < 90,
        'bg-green-500': isColorful && value && value >= 90,
        'bg-primary': !isColorful
      })}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
PasswordProgress.displayName = ProgressPrimitive.Root.displayName

export { PasswordProgress as Progress }
