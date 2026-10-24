import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Equipment Rental',
  description: 'Flexible equipment rental from Reach International. Short and long-term hire of aerial work platforms and material handling equipment.',
  alternates: { canonical: 'https://www.reachinternational.co.in/services/rental/' },
}

export default function RentalPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { label: 'Services' },
    { label: 'Equipment Rental', href: '/services/rental/' },
  ])
  const serviceJsonLd = buildServiceJsonLd(
    'Equipment Rental',
    'Flexible rental of aerial work platforms and material handling equipment for project-based needs.',
    '/services/rental/',
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <div
        className="pt-[72px]"
        style={{ backgroundColor: 'var(--surface-base)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 py-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-caption" style={{ color: 'var(--text-muted)' }}>
              <li><Link href="/" style={{ color: 'var(--text-link)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services/rental/" style={{ color: 'var(--text-link)' }}>Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Equipment Rental</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            Equipment Rental
          </h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            Flexible rental of aerial work platforms and material handling equipment for project-based needs — without the capital expenditure of ownership.
          </p>
        </div>
      </div>

      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div
                className="p-8 rounded-lg mb-6"
                style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
              >
                <h2 className="text-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
                  What We Offer
                </h2>
                <p className="text-body mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Reach International provides rental of aerial work platforms (boom lifts, scissor lifts, vertical mast lifts, spider lifts, scaffolding) and material handling equipment (forklifts, reach trucks, material lifts).
                </p>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                  Detailed rental terms, rates and availability are provided on enquiry. Contact us to discuss your project requirements.
                </p>
              </div>
            </div>

            <div>
              <div
                className="p-8 rounded-lg"
                style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
              >
                <h2 className="text-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
                  Request a Rental Quote
                </h2>
                <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Tell us what equipment you need, where and when. We will provide current availability and pricing.
                </p>
                <p className="text-body-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  Helpful information to have ready:
                </p>
                <ul className="space-y-1 mb-6">
                  {[
                    'Equipment type needed',
                    'Project location',
                    'Start date',
                    'Duration of hire',
                    'Site conditions (indoor / outdoor, surface type)',
                    'Required working height or capacity',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-body-sm" style={{ color: 'var(--text-secondary)' }}>
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--icon-accent)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/request-a-quote/"
                  className="flex items-center justify-center w-full h-11 rounded-md text-label font-medium"
                  style={{ backgroundColor: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' }}
                >
                  Request a rental quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
