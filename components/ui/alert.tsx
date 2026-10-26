'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-2xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-2px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground shadow-xs select-none transition-all',
  {
    variants: {
      variant: {
        default: 'bg-card border-border text-card-foreground',
        destructive:
          'border-destructive/30 bg-destructive/10 text-destructive dark:border-destructive/40 [&>svg]:text-destructive',
        success:
          'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 [&>svg]:text-emerald-600',
        warning:
          'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 [&>svg]:text-amber-600',
        info:
          'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 [&>svg]:text-sky-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <motion.div
    ref={ref}
    role="alert"
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    className={cn(alertVariants({ variant }), className)}
    {...(props as unknown as HTMLMotionProps<'div'>)}
  />
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 text-sm font-bold leading-none tracking-tight text-foreground', className)}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-xs text-muted-foreground leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
