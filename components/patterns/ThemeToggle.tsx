'use client'

import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import { Button } from '@/components/base/buttons/button'
import { Moon01, Sun } from '@untitledui/icons'

const subscribe = () => () => {}

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)

  const isDark = mounted ? (resolvedTheme || theme) === 'dark' : false

  return (
    <Button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      color="secondary"
      size="sm"
      className="w-10 h-10 p-0 rounded-full flex items-center justify-center border shadow-xs transition-transform active:scale-95"
      iconLeading={isDark ? Sun : Moon01}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    />
  )
}
