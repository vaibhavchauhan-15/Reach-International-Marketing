/**
 * Spectrum UI - AnimatedSwitch
 *
 * An iOS-quality toggle switch. Pressing stretches the knob toward the far
 * side (anchored to the side it currently sits on) and releasing springs it
 * back round; dragging carries the knob across the track and commits to the
 * nearest side on release, and a quick flick commits in the flick direction.
 * The track color crossfades, optional knob icons rotate through a crossfade,
 * and prefers-reduced-motion collapses everything to an instant jump. Works
 * controlled or uncontrolled and announces itself via role="switch".
 *
 * Dependencies: framer-motion, @/lib/utils
 */

'use client'

import React, { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface AnimatedSwitchProps {
  /** Controlled checked state. Leave undefined for uncontrolled usage */
  checked?: boolean
  /** Initial checked state when uncontrolled. Default false */
  defaultChecked?: boolean
  /** Fires with the next checked state whenever a toggle commits */
  onCheckedChange?: (checked: boolean) => void
  /** Icon shown inside the knob while on; crossfades with offIcon on toggle */
  onIcon?: React.ReactNode
  /** Icon shown inside the knob while off; crossfades with onIcon on toggle */
  offIcon?: React.ReactNode
  /** Visual size of the switch. Default "md" */
  size?: 'sm' | 'md' | 'lg'
  /** Disables pointer and keyboard interaction */
  disabled?: boolean
  /** Accessible name of the switch. Default "Toggle" */
  label?: string
  /** Additional classes merged with the default track styles */
  className?: string
}

interface PointerSample {
  x: number
  t: number
}

interface GestureState {
  pointerId: number
  originClientX: number
  originKnobX: number
  dragging: boolean
  samples: PointerSample[]
}

const TRACK_PADDING = 2
const STRETCH_FACTOR = 1.35
const DRAG_START_DISTANCE = 3
const FLICK_VELOCITY = 250
const VELOCITY_SAMPLE_COUNT = 5
const ICON_ROTATION = 45

const SNAPPY_SPRING = { type: 'spring', stiffness: 500, damping: 30 } as const
const SOFT_SPRING = { type: 'spring', stiffness: 260, damping: 22 } as const

const SIZES = {
  sm: { trackWidth: 32, trackHeight: 18, icon: 8 },
  md: { trackWidth: 44, trackHeight: 24, icon: 10 },
  lg: { trackWidth: 56, trackHeight: 30, icon: 12 },
} as const

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function AnimatedSwitch({
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  onIcon,
  offIcon,
  size = 'md',
  disabled = false,
  label = 'Toggle',
  className,
}: AnimatedSwitchProps) {
  const shouldReduceMotion = useReducedMotion()
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const [pressed, setPressed] = useState(false)
  const [dragX, setDragX] = useState<number | null>(null)

  const gesture = useRef<GestureState | null>(null)
  const suppressClick = useRef(false)

  const checked = checkedProp ?? internalChecked
  const { trackWidth, trackHeight, icon: iconSize } = SIZES[size]

  const knobSize = trackHeight - TRACK_PADDING * 2
  const stretchedWidth = Math.round(knobSize * STRETCH_FACTOR)
  const innerWidth = trackWidth - TRACK_PADDING * 2
  const knobWidth = pressed && !shouldReduceMotion ? stretchedWidth : knobSize
  const maxX = innerWidth - knobWidth
  const knobX = dragX !== null ? clamp(dragX, 0, maxX) : checked ? maxX : 0

  const setChecked = useCallback(
    (next: boolean) => {
      if (disabled) return
      if (checkedProp === undefined) setInternalChecked(next)
      onCheckedChange?.(next)
    },
    [checkedProp, disabled, onCheckedChange]
  )

  const handleClick = useCallback(() => {
    if (suppressClick.current) {
      suppressClick.current = false
      return
    }
    setChecked(!checked)
  }, [checked, setChecked])

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      if (disabled || event.button !== 0) return
      event.currentTarget.setPointerCapture(event.pointerId)
      gesture.current = {
        pointerId: event.pointerId,
        originClientX: event.clientX,
        originKnobX: knobX,
        dragging: false,
        samples: [{ x: event.clientX, t: event.timeStamp }],
      }
      setPressed(true)
    },
    [disabled, knobX]
  )

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      const state = gesture.current
      if (!state || event.pointerId !== state.pointerId) return
      state.samples.push({ x: event.clientX, t: event.timeStamp })
      if (state.samples.length > VELOCITY_SAMPLE_COUNT) state.samples.shift()
      const deltaX = event.clientX - state.originClientX
      if (!state.dragging && Math.abs(deltaX) < DRAG_START_DISTANCE) return
      state.dragging = true
      setDragX(state.originKnobX + deltaX)
    },
    []
  )

  const endGesture = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      gesture.current = null
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
      setPressed(false)
      setDragX(null)
    },
    []
  )

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      const state = gesture.current
      if (!state || event.pointerId !== state.pointerId) return
      if (state.dragging) {
        suppressClick.current = true
        const width = shouldReduceMotion ? knobSize : stretchedWidth
        const knobEnd = clamp(
          state.originKnobX + (event.clientX - state.originClientX),
          0,
          innerWidth - width
        )
        const oldest = state.samples[0]
        const elapsed = oldest ? event.timeStamp - oldest.t : 0
        const velocity =
          oldest && elapsed > 0 ? ((event.clientX - oldest.x) / elapsed) * 1000 : 0
        const next =
          Math.abs(velocity) >= FLICK_VELOCITY
            ? velocity > 0
            : knobEnd + width / 2 > innerWidth / 2
        if (next !== checked) setChecked(next)
      }
      endGesture(event)
    },
    [checked, endGesture, innerWidth, knobSize, setChecked, shouldReduceMotion, stretchedWidth]
  )

  const hasIcons = onIcon != null || offIcon != null
  const activeIcon = checked ? onIcon : offIcon

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={endGesture}
      className={cn(
        'relative inline-flex shrink-0 cursor-pointer touch-manipulation select-none items-center rounded-full',
        'transition-colors duration-200 ease-out',
        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        checked
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted border border-border text-muted-foreground',
        className
      )}
      style={{ width: trackWidth, height: trackHeight }}
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[max(100%,24px)] w-[max(100%,24px)] -translate-x-1/2 -translate-y-1/2"
      />

      <motion.span
        aria-hidden="true"
        className="absolute rounded-full bg-white shadow-xs dark:bg-neutral-900"
        style={{ top: TRACK_PADDING, left: TRACK_PADDING, height: knobSize }}
        initial={false}
        animate={{ x: knobX, width: knobWidth }}
        transition={shouldReduceMotion ? { duration: 0 } : SNAPPY_SPRING}
      >
        {hasIcons && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-neutral-600 dark:text-neutral-300">
            <AnimatePresence initial={false}>
              {activeIcon != null && (
                <motion.span
                  key={checked ? 'on' : 'off'}
                  className="absolute flex items-center justify-center [&_svg]:h-full [&_svg]:w-full"
                  style={{
                    width: iconSize,
                    height: iconSize,
                    fontSize: iconSize,
                    lineHeight: 1,
                  }}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, rotate: -ICON_ROTATION, scale: 0.5 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, rotate: 0, scale: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, rotate: ICON_ROTATION, scale: 0.5 }
                  }
                  transition={shouldReduceMotion ? { duration: 0 } : SOFT_SPRING}
                >
                  {activeIcon}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        )}
      </motion.span>
    </button>
  )
}
