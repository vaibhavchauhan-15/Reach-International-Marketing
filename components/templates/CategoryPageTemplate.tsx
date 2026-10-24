import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbJsonLd } from '@/lib/jsonld'
import { Button } from '@/components/base/buttons/button'
import { ArrowRight } from '@untitledui/icons'

interface CategoryPageConfig {
  slug: string
  title: string
  h1: string
  description: string
  longDescription: string
  specs?: {
    label: string
    value: string
  }[]
  applications?: string[]
  relatedCategories?: { href: string; label: string }[]
}

export function createCategoryMetadata(config: CategoryPageConfig): Metadata {
  return {
    title: `${config.title} — Rental & Sale`,
    description: config.description,
    alternates: {
      canonical: `https://www.reachinternational.co.in/equipment/${config.slug}/`,
    },
  }
}

export function CategoryPageTemplate({ config }: { config: CategoryPageConfig }) {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { label: 'Equipment', href: '/equipment/' },
    { label: config.title },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Page header */}
      <div
        className="pt-[72px]"
        style={{ backgroundColor: 'var(--surface-base)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 py-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-caption" style={{ color: 'var(--text-muted)' }}>
              <li><Link href="/" style={{ color: 'var(--text-link)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/equipment/" style={{ color: 'var(--text-link)' }}>Equipment</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>{config.title}</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            {config.h1}
          </h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            {config.description}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div
                className="p-8 rounded-lg mb-6"
                style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
              >
                <h2 className="text-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
                  About {config.title}
                </h2>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                  {config.longDescription}
                </p>
              </div>

              {config.applications && config.applications.length > 0 && (
                <div
                  className="p-8 rounded-lg"
                  style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
                >
                  <h2 className="text-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
                    Typical Applications
                  </h2>
                  <ul className="space-y-2">
                    {config.applications.map((app) => (
                      <li key={app} className="flex items-start gap-2">
                        <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--icon-accent)' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body" style={{ color: 'var(--text-secondary)' }}>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Products note */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
              >
                <h3 className="text-h4 mb-3" style={{ color: 'var(--text-primary)' }}>
                  Available Models
                </h3>
                <p className="text-body-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  Specific models and specifications will be listed here once verified by Reach International. Contact us to confirm current availability.
                </p>
                <Button
                  href="/request-a-quote/"
                  color="primary"
                  size="md"
                  className="w-full rounded-md shadow-xs"
                  iconTrailing={<ArrowRight className="size-4" />}
                >
                  Request a quote
                </Button>
              </div>

              {/* Related categories */}
              {config.relatedCategories && config.relatedCategories.length > 0 && (
                <div
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
                >
                  <h3 className="text-h4 mb-3" style={{ color: 'var(--text-primary)' }}>
                    Related Categories
                  </h3>
                  <ul className="space-y-2">
                    {config.relatedCategories.map((cat) => (
                      <li key={cat.href}>
                        <Link
                          href={cat.href}
                          className="text-body-sm transition-colors"
                          style={{ color: 'var(--text-link)' }}
                        >
                          {cat.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quote CTA */}
      <section className="py-16" style={{ backgroundColor: 'var(--surface-base)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
            Need {config.title}?
          </h2>
          <p className="text-body-lg mb-8" style={{ color: 'var(--text-muted)' }}>
            Contact us to confirm availability, specifications and pricing for your project.
          </p>
          <Button
            href="/request-a-quote/"
            color="primary"
            size="lg"
            className="rounded-md px-8 shadow-sm"
            iconTrailing={<ArrowRight className="size-4" />}
          >
            Request a quote
          </Button>
        </div>
      </section>
    </>
  )
}
