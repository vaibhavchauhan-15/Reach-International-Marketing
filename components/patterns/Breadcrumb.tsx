/**
 * Breadcrumb — renders visual breadcrumb trail + BreadcrumbList JSON-LD.
 * PRD §5.4: Breadcrumbs on all nested pages (visual + BreadcrumbList JSON-LD).
 *
 * Usage:
 *   <Breadcrumb items={[
 *     { label: 'Equipment', href: '/equipment/' },
 *     { label: 'Boom Lifts' },  // last item — no href
 *   ]} />
 */

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const BASE_URL = 'https://www.reachinternational.co.in'

  // JSON-LD: BreadcrumbList (includes Home automatically)
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL + '/',
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: BASE_URL + item.href } : {}),
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav aria-label="Breadcrumb">
        <ol
          className="flex flex-wrap items-center gap-1 text-caption"
          style={{ color: 'var(--text-muted)' }}
        >
          <li>
            <Link
              href="/"
              style={{ color: 'var(--text-link)' }}
              className="hover:underline"
            >
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <svg
                className="w-3 h-3 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {item.href ? (
                <Link
                  href={item.href}
                  style={{ color: 'var(--text-link)' }}
                  className="hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" style={{ color: 'var(--text-secondary)' }}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
