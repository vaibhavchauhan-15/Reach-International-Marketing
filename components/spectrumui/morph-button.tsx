/**
 * Spectrum UI - MorphButton
 *
 * A multi-state async action button. Clicking runs your action while the pill
 * morphs its width to fit each state's content: a rotating arc spinner while
 * loading, an emerald check that draws in on success, or a rose X with a tight
 * shake on error - then it melts back to idle. Works controlled or
 * uncontrolled, honors prefers-reduced-motion, and announces every state to
 * screen readers via a polite live region.
 *
 * Dependencies: framer-motion, @/lib/utils
 */

'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type MorphButtonState = 'idle' | 'loading' | 'success' | 'error'

export interface MorphButtonProps {
  /** Idle content of the button - usually a short action label */
  children: React.ReactNode
  /**
   * Async work to run on click when uncontrolled. The button shows loading
   * while the promise is pending, success when it resolves, error when it
   * throws, then auto-resets to idle after resetDelay
   */
  onAction?: () => Promise<void> | void
  /**
   * Controlled state. When provided the internal machine is bypassed and the
   * button renders exactly this state
   */
  state?: MorphButtonState
  /** Click handler; fires on idle clicks in both modes */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /** Label rendered next to the spinner while loading; spinner-only if omitted */
  loadingLabel?: string
  /** Label shown next to the check in the success state. Default "Done" */
  successLabel?: string
  /** Label shown next to the X in the error state. Default "Failed" */
  errorLabel?: string
  /** Milliseconds success/error is held before auto-resetting. Default 1800 */
  resetDelay?: number
  /** Visual size of the button. Default "md" */
  size?: 'sm' | 'md' | 'lg'
  /** Disables pointer and keyboard interaction */
  disabled?: boolean
  className?: string
}

const SPRING_SNAPPY = { type: 'spring', stiffness: 500, damping: 30 } as const
const SPRING_SOFT = { type: 'spring', stiffness: 260, damping: 22 } as const
const EASE_REVEAL: [number, number, number, number] = [0.22, 1, 0.36, 1]
const CONTENT_SHIFT = 8
const CONTENT_DURATION = 0.3
const DRAW_DURATION = 0.25
const SHAKE_KEYFRAMES = [0, -3, 3, -2, 2, 0]
const SHAKE_DURATION = 0.25
const SPIN_DURATION = 0.8
const SPINNER_ARC = 0.75
const SPINNER_RADIUS = 10
const DEFAULT_RESET_DELAY = 1800

const SIZES = {
  sm: { button: 'h-8 px-3 text-xs', content: 'gap-1.5', icon: 14 },
  md: { button: 'h-10 px-4 text-sm', content: 'gap-2', icon: 16 },
  lg: { button: 'h-12 px-6 text-base', content: 'gap-2', icon: 18 },
} as const

const CHECK_PATH = 'M5 13l4.5 4.5L19 7'
const X_PATHS = ['M7 7l10 10', 'M17 7L7 17']

const STATE_CLASSES: Record<MorphButtonState, string> = {
  idle: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs',
  loading: 'bg-primary text-primary-foreground shadow-xs',
  success: 'bg-emerald-600 text-white shadow-xs',
  error: 'bg-rose-600 text-white shadow-xs',
}

function SpinnerIcon({ size }: { size: number }) {
  const circumference = 2 * Math.PI * SPINNER_RADIUS
  return (
    <motion.svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{ duration: SPIN_DURATION, ease: 'linear', repeat: Infinity }}
    >
      <circle
        cx="12"
        cy="12"
        r={SPINNER_RADIUS}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${circumference * SPINNER_ARC} ${circumference}`}
      />
    </motion.svg>
  )
}

function DrawnIcon({
  paths,
  size,
  instant,
}: {
  paths: string[]
  size: number
  instant: boolean
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          initial={instant ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={
            instant
              ? { duration: 0 }
              : {
                  duration: DRAW_DURATION,
                  ease: EASE_REVEAL,
                  delay: index * 0.05,
                }
          }
        />
      ))}
    </svg>
  )
}

export function MorphButton({
  children,
  onAction,
  state: stateProp,
  onClick,
  loadingLabel,
  successLabel = 'Done',
  errorLabel = 'Failed',
  resetDelay = DEFAULT_RESET_DELAY,
  size = 'md',
  disabled = false,
  className,
}: MorphButtonProps) {
  const shouldReduceMotion = useReducedMotion()
  const [internalState, setInternalState] = useState<MorphButtonState>('idle')
  const mountedRef = useRef(true)

  const isControlled = stateProp !== undefined
  const state = stateProp ?? internalState
  const interactive = state === 'idle' && !disabled
  const { button: sizeClasses, content: contentGap, icon: iconSize } = SIZES[size]

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    if (isControlled) return
    if (internalState !== 'success' && internalState !== 'error') return
    const timer = setTimeout(() => setInternalState('idle'), resetDelay)
    return () => clearTimeout(timer)
  }, [internalState, isControlled, resetDelay])

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!interactive) return
      onClick?.(event)
      if (isControlled || !onAction) return
      setInternalState('loading')
      try {
        await onAction()
        if (mountedRef.current) setInternalState('success')
      } catch {
        if (mountedRef.current) setInternalState('error')
      }
    },
    [interactive, isControlled, onAction, onClick]
  )

  const announcement =
    state === 'loading'
      ? loadingLabel ?? 'Loading'
      : state === 'success'
        ? successLabel
        : state === 'error'
          ? errorLabel
          : ''

  let content: React.ReactNode
  if (state === 'loading') {
    content = (
      <>
        <SpinnerIcon size={iconSize} />
        {loadingLabel && <span>{loadingLabel}</span>}
      </>
    )
  } else if (state === 'success') {
    content = (
      <>
        <motion.span
          className="inline-flex"
          initial={shouldReduceMotion ? false : { scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={SPRING_SOFT}
        >
          <DrawnIcon paths={[CHECK_PATH]} size={iconSize} instant={!!shouldReduceMotion} />
        </motion.span>
        {successLabel && <span>{successLabel}</span>}
      </>
    )
  } else if (state === 'error') {
    content = (
      <>
        <DrawnIcon paths={X_PATHS} size={iconSize} instant={!!shouldReduceMotion} />
        {errorLabel && <span>{errorLabel}</span>}
      </>
    )
  } else {
    content = children
  }

  return (
    <motion.button
      type="button"
      layout
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={!interactive || undefined}
      aria-busy={state === 'loading' || undefined}
      aria-label={typeof children === 'string' ? children : undefined}
      style={{ borderRadius: 999 }}
      whileTap={interactive && !shouldReduceMotion ? { scale: 0.97 } : undefined}
      animate={
        state === 'error' && !shouldReduceMotion ? { x: SHAKE_KEYFRAMES } : { x: 0 }
      }
      transition={{
        layout: shouldReduceMotion ? { duration: 0 } : SPRING_SNAPPY,
        scale: SPRING_SNAPPY,
        x: { duration: SHAKE_DURATION, ease: 'easeInOut' },
      }}
      className={cn(
        'relative inline-flex select-none items-center justify-center overflow-hidden rounded-full font-semibold',
        'transition-colors duration-300 cursor-pointer',
        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        !interactive && 'pointer-events-none',
        STATE_CLASSES[state],
        sizeClasses,
        className
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={state}
          className={cn('inline-flex items-center justify-center whitespace-nowrap', contentGap)}
          initial={{ y: CONTENT_SHIFT, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -CONTENT_SHIFT, opacity: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: CONTENT_DURATION, ease: EASE_REVEAL }
          }
        >
          {content}
        </motion.span>
      </AnimatePresence>
      <span aria-live="polite" role="status" className="sr-only">
        {announcement}
      </span>
    </motion.button>
  )
}
