/**
 * Shared industry page template — reused for each industry.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbJsonLd } from '@/lib/jsonld'
import { Button } from '@/components/ui/button'
import { ArrowRight } from '@untitledui/icons'

interface IndustryConfig {
  slug: string
  title: string
  description: string
  intro: string
  equipmentLinks: { href: string; label: string; why: string }[]
}

export function createIndustryMetadata(config: IndustryConfig): Metadata {
  return {
    title: `${config.title} — Equipment Rental & Sale`,
    description: config.description,
    alternates: { canonical: `https://www.reachinternational.co.in/industries/${config.slug}/` },
  }
}

export function IndustryPageTemplate({ config }: { config: IndustryConfig }) {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { label: 'Industries', href: '/industries/' },
    { label: config.title },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div
        className="pt-[72px]"
        style={{ backgroundColor: 'var(--surface-base)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 py-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-caption" style={{ color: 'var(--text-muted)' }}>
              <li><Link href="/" style={{ color: 'var(--text-link)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/industries/" style={{ color: 'var(--text-link)' }}>Industries</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>{config.title}</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            Equipment for {config.title}
          </h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            {config.intro}
          </p>
        </div>
      </div>

      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-h2 mb-8" style={{ color: 'var(--text-primary)' }}>
            Relevant Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {config.equipmentLinks.map((eq) => (
              <Link
                key={eq.href}
                href={eq.href}
                className="group p-6 rounded-lg transition-all"
                style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
              >
                <h3
                  className="text-h4 mb-1 group-hover:text-[var(--text-link)] transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {eq.label}
                </h3>
                <p className="text-body-sm" style={{ color: 'var(--text-muted)' }}>{eq.why}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
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
        </div>
      </div>
    </>
  )
}
