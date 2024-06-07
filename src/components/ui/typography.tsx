import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const typographyVariants = cva('leading-7 m-0', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-[1.8rem] font-semibold tracking-tight',
      h2: 'scroll-m-20 text-[1.6rem] font-semibold tracking-tight',
      h3: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-lg font-semibold tracking-tight',
      p: 'leading-6',
      muted: 'text-sm text-muted-foreground'
    }
  },
  defaultVariants: {
    variant: 'p'
  }
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <p
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = 'Typography'

export { Typography as Typography, typographyVariants }
