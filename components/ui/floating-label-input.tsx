'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (value: string) => void
}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        placeholder=" "
        className={cn('peer', className)}
        ref={ref}
        {...props}
      />
    )
  }
)
FloatingInput.displayName = 'FloatingInput'

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        'peer-focus:secondary absolute left-2 top-2 z-10 origin-left -translate-y-4 scale-75 transform bg-background px-2 text-xs text-muted-foreground duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 cursor-text select-none pointer-events-none',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
FloatingLabel.displayName = 'FloatingLabel'

export type FloatingLabelInputProps = InputProps & { label?: string }

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, ...props }, ref) => {
  const generatedId = React.useId()
  const inputId = id || generatedId
  return (
    <div className="relative">
      <FloatingInput ref={ref} id={inputId} {...props} />
      {label && <FloatingLabel htmlFor={inputId}>{label}</FloatingLabel>}
    </div>
  )
})
FloatingLabelInput.displayName = 'FloatingLabelInput'

export { FloatingInput, FloatingLabel, FloatingLabelInput }
