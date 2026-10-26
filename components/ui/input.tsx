'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  error?: string
  isRequired?: boolean
  icon?: React.ComponentType<{ className?: string }> | React.ReactNode
  onChange?: (value: string) => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      error,
      isRequired,
      icon: Icon,
      onChange,
      id,
      value,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id || generatedId

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (typeof onChange === 'function') {
        if (onChange.length === 1 && typeof (onChange as any) === 'function') {
          // Check if parent expects string or event
          try {
            ;(onChange as any)(e.target.value)
          } catch {
            ;(onChange as any)(e)
          }
        } else {
          ;(onChange as any)(e)
        }
      }
    }

    const renderIcon = () => {
      if (!Icon) return null
      if (React.isValidElement(Icon)) return Icon
      if (typeof Icon === 'function') {
        const IconComp = Icon as React.ComponentType<{ className?: string }>
        return <IconComp className="size-4 shrink-0 text-muted-foreground" />
      }
      return null
    }

    const inputNode = (
      <div className="relative flex items-center w-full">
        {Icon && (
          <div className="absolute left-3 pointer-events-none flex items-center justify-center">
            {renderIcon()}
          </div>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          value={value}
          onChange={handleChange}
          required={isRequired}
          className={cn(
            'flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground transition-all duration-150',
            'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:border-ring',
            'disabled:cursor-not-allowed disabled:opacity-50',
            Icon && 'pl-9',
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          {...props}
        />
      </div>
    )

    if (!label && !error) {
      return inputNode
    }

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold text-foreground/80 tracking-wide"
          >
            {label}
            {isRequired && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        {inputNode}
        {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
