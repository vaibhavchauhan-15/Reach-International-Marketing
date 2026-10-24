import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Reach International',
  description: 'Learn about Reach International — providers of aerial work platforms and material handling equipment for rental and sale in India.',
  alternates: { canonical: 'https://www.reachinternational.co.in/about/' },
}

export default function AboutPage() {
  return (
    <>
      <div
        className="pt-[72px]"
        style={{ backgroundColor: 'var(--surface-base)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 py-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-caption" style={{ color: 'var(--text-muted)' }}>
              <li><Link href="/" style={{ color: 'var(--text-link)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>About</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            About Reach International
          </h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            Reach International is an Indian industrial equipment company providing aerial work platforms and material handling equipment for rental and sale.
          </p>
        </div>
      </div>

      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-narrow">
            {/* Company info — awaiting verification */}
            <div
              className="p-8 rounded-lg mb-8"
              style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
            >
              <h2 className="text-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
                Who We Are
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--text-secondary)' }}>
                Reach International specialises in aerial work platforms (AWPs), access equipment and material handling equipment (MHE), offered through rental/hiring and sales.
              </p>
              <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                Detailed company history, leadership, fleet metrics and branch information will be published here once approved by the business owner.
              </p>
            </div>

            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
            >
              <h2 className="text-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
                Our Equipment
              </h2>
              <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                We offer a comprehensive range of access and material handling equipment. Browse our catalogue to find the right machine for your project.
              </p>
              <Link
                href="/equipment/"
                className="inline-flex items-center justify-center px-6 h-11 rounded-md text-label font-medium"
                style={{ backgroundColor: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' }}
              >
                Browse equipment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
