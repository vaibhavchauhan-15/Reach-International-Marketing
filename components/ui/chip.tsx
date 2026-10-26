'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode
  icon?: React.ComponentType<{ className?: string }> | React.ReactNode
  onRemove?: () => void
  selected?: boolean
  disabled?: boolean
  variant?: 'default' | 'outline' | 'secondary'
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      label,
      icon: Icon,
      onRemove,
      selected,
      disabled,
      variant = 'default',
      onClick,
      ...props
    },
    ref
  ) => {
    const isInteractive = Boolean(onClick && !disabled)

    const renderIcon = () => {
      if (!Icon) return null
      if (React.isValidElement(Icon)) return Icon
      if (typeof Icon === 'function') {
        const IconComp = Icon as React.ComponentType<{ className?: string }>
        return <IconComp className="size-3.5 shrink-0" />
      }
      return null
    }

    return (
      <motion.div
        ref={ref}
        whileHover={isInteractive ? { scale: 1.03 } : undefined}
        whileTap={isInteractive ? { scale: 0.97 } : undefined}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        onClick={disabled ? undefined : onClick}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors select-none',
          variant === 'default' &&
            'bg-secondary text-secondary-foreground border border-border hover:bg-muted',
          variant === 'outline' &&
            'border border-border bg-background text-foreground hover:bg-accent',
          variant === 'secondary' &&
            'bg-accent text-accent-foreground border border-accent/20',
          selected &&
            'bg-primary text-primary-foreground border-primary hover:bg-primary/90',
          disabled && 'opacity-50 cursor-not-allowed',
          isInteractive && 'cursor-pointer',
          className
        )}
        {...(props as any)}
      >
        {renderIcon()}
        <span>{label}</span>
        {onRemove && !disabled && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onRemove()
            }}
            className="ml-0.5 rounded-full p-0.5 hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Remove"
          >
            <X className="size-3" />
          </button>
        )}
      </motion.div>
    )
  }
)
Chip.displayName = 'Chip'
