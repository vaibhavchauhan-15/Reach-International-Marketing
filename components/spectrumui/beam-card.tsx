'use client'

import * as React from 'react'
import { BorderBeam } from '@/components/ui/border-beam'
import { cn } from '@/lib/utils'

export interface BeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title?: string
  description?: string
  children?: React.ReactNode
  beamActive?: boolean
  colorFrom?: string
  colorTo?: string
}

export function BeamCard({
  eyebrow,
  title,
  description,
  children,
  beamActive = true,
  colorFrom,
  colorTo,
  className,
  ...props
}: BeamCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xs transition-colors duration-200',
        className
      )}
      {...props}
    >
      {beamActive && (
        <BorderBeam
          size={250}
          duration={12}
          colorFrom={colorFrom}
          colorTo={colorTo}
        />
      )}
      {eyebrow && (
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      {title && (
        <h3 className="mt-2 text-lg md:text-xl font-bold tracking-tight text-foreground">
          {title}
        </h3>
      )}
      {description && (
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
