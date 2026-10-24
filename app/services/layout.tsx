import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Reach International',
    default: 'Services | Reach International',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
