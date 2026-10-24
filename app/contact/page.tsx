import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Reach International for equipment rental or sales enquiries. Get in touch with our team.',
  alternates: { canonical: 'https://www.reachinternational.co.in/contact/' },
}

export default function ContactPage() {
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
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Contact</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            Contact Reach International
          </h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            Get in touch for equipment rental enquiries, sales quotations, technical support, or general information.
          </p>
        </div>
      </div>

      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact details */}
            <div>
              <h2 className="text-h2 mb-6" style={{ color: 'var(--text-primary)' }}>
                Get in touch
              </h2>
              <div className="space-y-4">
                <div
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
                >
                  <h3 className="text-h4 mb-4" style={{ color: 'var(--text-primary)' }}>
                    Contact Information
                  </h3>
                  <p className="text-body" style={{ color: 'var(--text-muted)' }}>
                    Contact details are being verified. Please check back shortly or use the quote request form.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center justify-center px-6 h-11 rounded-md text-label font-medium transition-colors"
                  style={{ backgroundColor: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' }}
                >
                  Request a quote
                </Link>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)', minHeight: '360px' }}
            >
              <div className="w-full h-full flex items-center justify-center p-8">
                <p className="text-body-sm text-center" style={{ color: 'var(--text-muted)' }}>
                  Location map will be displayed here once address details are confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
