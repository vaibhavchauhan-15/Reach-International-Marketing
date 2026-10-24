import type { ReactNode } from 'react'

// Shared layout for all industry pages — wraps children with common header pattern
export default function IndustriesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
