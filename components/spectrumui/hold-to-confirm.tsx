/**
 * Spectrum UI - HoldToConfirmButton
 *
 * A press-and-hold confirmation button for critical or destructive actions. Holding the
 * button fills a circular progress ring around the icon; releasing early springs the
 * ring back and nothing fires. Holding to completion fires onConfirm exactly once.
 *
 * Dependencies: framer-motion, lucide-react, @/lib/utils
 */

'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion'
import { Check, ShieldAlert } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface HoldToConfirmButtonProps {
  /** Fires exactly once when the hold reaches completion */
  onConfirm: () => void
  /** How long the button must be held, in milliseconds. Default 1200 */
  duration?: number
  /** Idle label. Default "Hold to confirm" */
  label?: string
  /** Label shown after a completed hold. Default "Confirmed" */
  confirmedLabel?: string
  /** Replaces the default icon */
  icon?: React.ReactNode
  /** Visual size of the button. Default "md" */
  size?: 'sm' | 'md' | 'lg'
  /** Milliseconds before resetting to idle after confirming; 0 stays confirmed. Default 1500 */
  resetDelay?: number
  /** Disables pointer and keyboard interaction */
  disabled?: boolean
  className?: string
}

type HoldSource = 'pointer' | 'keyboard'

const SIZES = {
  sm: { button: 'h-8 gap-1.5 pl-2 pr-3 text-xs', icon: 12, ring: 20, stroke: 2 },
  md: { button: 'h-10 gap-2 pl-2.5 pr-4 text-sm', icon: 14, ring: 24, stroke: 2 },
  lg: { button: 'h-12 gap-2.5 pl-3 pr-5 text-base', icon: 17, ring: 30, stroke: 2.5 },
} as const

const SNAPPY_SPRING = { type: 'spring', stiffness: 500, damping: 30 } as const
const SWAP_SPRING = { type: 'spring', stiffness: 400, damping: 30 } as const
const CHECK_POP_SPRING = { type: 'spring', stiffness: 500, damping: 22 } as const
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const HOLD_SCALE = 0.97
const HOLD_SCALE_DURATION = 0.2
const CHECK_DRAW_DELAY = 0.05
const CHECK_DRAW_DURATION = 0.25
const LABEL_STAGGER = 0.12
const RING_RESET_DURATION = 0.3

const CHECK_PATH = 'M20 6 9 17l-5-5'

const labelVariants = {
  enter: (reduce: boolean) => (reduce ? { opacity: 0 } : { y: 6, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (reduce: boolean) =>
    reduce
      ? { opacity: 0, transition: { duration: 0 } }
      : { y: -6, opacity: 0, transition: SWAP_SPRING },
}

export function HoldToConfirmButton({
  onConfirm,
  duration = 1200,
  label = 'Hold to confirm',
  confirmedLabel = 'Confirmed',
  icon,
  size = 'md',
  resetDelay = 1500,
  disabled = false,
  className,
}: HoldToConfirmButtonProps) {
  const shouldReduceMotion = useReducedMotion()
  const [holding, setHolding] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const progress = useMotionValue(0)
  const animationRef = useRef<ReturnType<typeof animate> | null>(null)
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const confirmedRef = useRef(false)
  const holdSourcesRef = useRef<Set<HoldSource>>(new Set())

  const { button: sizeClasses, icon: iconSize, ring, stroke } = SIZES[size]
  const radius = (ring - stroke) / 2
  const circumference = 2 * Math.PI * radius

  const dashOffset = useTransform(progress, (p) => circumference * (1 - p))
  const ringOpacity = useTransform(progress, [0, 0.05], [0, 1])

  useEffect(() => {
    return () => {
      animationRef.current?.stop()
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
    }
  }, [])

  const startHold = useCallback(
    (source: HoldSource) => {
      if (disabled || confirmedRef.current) return
      holdSourcesRef.current.add(source)
      if (holding) return

      setHolding(true)
      animationRef.current?.stop()

      animationRef.current = animate(progress, 1, {
        duration: duration / 1000,
        ease: 'linear',
        onComplete: () => {
          confirmedRef.current = true
          setConfirmed(true)
          setHolding(false)
          holdSourcesRef.current.clear()
          onConfirm()

          if (resetDelay > 0) {
            resetTimerRef.current = setTimeout(() => {
              confirmedRef.current = false
              setConfirmed(false)
              animate(progress, 0, { duration: RING_RESET_DURATION, ease: EASE_OUT })
            }, resetDelay)
          }
        },
      })
    },
    [disabled, duration, holding, onConfirm, progress, resetDelay]
  )

  const endHold = useCallback(
    (source: HoldSource) => {
      holdSourcesRef.current.delete(source)
      if (holdSourcesRef.current.size > 0 || confirmedRef.current) return

      setHolding(false)
      animationRef.current?.stop()
      animate(progress, 0, {
        duration: RING_RESET_DURATION,
        ease: EASE_OUT,
      })
    },
    [progress]
  )

  return (
    <motion.button
      type="button"
      disabled={disabled}
      onPointerDown={() => startHold('pointer')}
      onPointerUp={() => endHold('pointer')}
      onPointerLeave={() => endHold('pointer')}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault()
          startHold('keyboard')
        }
      }}
      onKeyUp={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault()
          endHold('keyboard')
        }
      }}
      animate={{ scale: holding && !shouldReduceMotion ? HOLD_SCALE : 1 }}
      transition={
        holding
          ? { duration: HOLD_SCALE_DURATION, ease: EASE_OUT }
          : SNAPPY_SPRING
      }
      className={cn(
        'relative inline-flex touch-none select-none items-center justify-center rounded-full border font-semibold transition-colors cursor-pointer',
        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        confirmed
          ? 'border-emerald-500/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
          : 'border-border bg-card text-foreground hover:bg-muted shadow-xs',
        sizeClasses,
        className
      )}
    >
      <span
        className="relative inline-flex shrink-0 items-center justify-center"
        style={{ width: ring, height: ring }}
        aria-hidden="true"
      >
        <motion.span
          className="inline-flex items-center justify-center"
          initial={false}
          animate={{
            scale: confirmed ? 0 : 1,
            opacity: confirmed ? 0 : 1,
          }}
          transition={shouldReduceMotion ? { duration: 0 } : SNAPPY_SPRING}
        >
          {icon ?? <ShieldAlert size={iconSize} strokeWidth={2} />}
        </motion.span>

        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: confirmed ? 1 : 0,
            opacity: confirmed ? 1 : 0,
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { ...CHECK_POP_SPRING, delay: confirmed ? CHECK_DRAW_DELAY : 0 }
          }
        >
          <svg
            viewBox="0 0 24 24"
            width={iconSize}
            height={iconSize}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d={CHECK_PATH}
              initial={false}
              animate={{ pathLength: confirmed ? 1 : 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : confirmed
                    ? { duration: CHECK_DRAW_DURATION, ease: EASE_OUT, delay: CHECK_DRAW_DELAY }
                    : { duration: 0.1 }
              }
            />
          </svg>
        </motion.span>

        <motion.svg
          viewBox={`0 0 ${ring} ${ring}`}
          width={ring}
          height={ring}
          className="absolute inset-0 -rotate-90"
          style={{ opacity: ringOpacity }}
        >
          <circle
            cx={ring / 2}
            cy={ring / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.2}
            strokeWidth={stroke}
          />
          <motion.circle
            cx={ring / 2}
            cy={ring / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: dashOffset }}
          />
        </motion.svg>
      </span>

      <span
        className={cn(
          'relative inline-flex overflow-hidden transition-opacity duration-200',
          holding && 'opacity-60'
        )}
      >
        <AnimatePresence mode="popLayout" initial={false} custom={shouldReduceMotion ?? false}>
          <motion.span
            key={confirmed ? 'confirmed' : 'idle'}
            className="inline-block whitespace-nowrap"
            custom={shouldReduceMotion ?? false}
            variants={labelVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    ...SWAP_SPRING,
                    delay: confirmed ? CHECK_DRAW_DELAY + LABEL_STAGGER : 0,
                  }
            }
          >
            {confirmed ? confirmedLabel : label}
          </motion.span>
        </AnimatePresence>
      </span>

      <span className="sr-only" role="status" aria-live="polite">
        {confirmed ? confirmedLabel : ''}
      </span>
    </motion.button>
  )
}
