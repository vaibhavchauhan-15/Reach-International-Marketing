import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Equipment Sales',
  description: 'Purchase aerial work platforms and material handling equipment from Reach International. Verified equipment with complete documentation.',
  alternates: { canonical: 'https://www.reachinternational.co.in/services/equipment-sales/' },
}

export default function EquipmentSalesPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { label: 'Services' },
    { label: 'Equipment Sales', href: '/services/equipment-sales/' },
  ])
  const serviceJsonLd = buildServiceJsonLd(
    'Equipment Sales',
    'Purchase aerial work platforms and material handling equipment from Reach International with verified documentation.',
    '/services/equipment-sales/',
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
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Equipment Sales</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            Equipment Sales
          </h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            Purchase aerial work platforms and material handling equipment from Reach International for your permanent fleet.
          </p>
        </div>
      </div>

      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="max-w-narrow p-8 rounded-lg"
            style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
          >
            <h2 className="text-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
              Purchase from Reach International
            </h2>
            <p className="text-body mb-4" style={{ color: 'var(--text-secondary)' }}>
              We offer equipment sales with verified documentation. Contact us to enquire about available machines, specifications and pricing.
            </p>
            <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
              Available models and stock are confirmed on enquiry — contact us to confirm current availability and request a sales quotation.
            </p>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center justify-center px-6 h-11 rounded-md text-label font-medium"
              style={{ backgroundColor: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' }}
            >
              Request a sales quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
