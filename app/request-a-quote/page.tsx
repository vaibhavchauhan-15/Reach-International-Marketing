import type { Metadata } from 'next'
import Link from 'next/link'
import { QuoteForm } from '@/components/patterns/QuoteForm'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Request a tailored quote for aerial work platform or material handling equipment rental or purchase from Reach International.',
  alternates: { canonical: 'https://www.reachinternational.co.in/request-a-quote/' },
  robots: { index: true, follow: true },
}

export default function RequestAQuotePage() {
  return (
    <>
      <div
        className="pt-[72px]"
        style={{
          backgroundColor: 'var(--surface-base)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-narrow mx-auto px-4 md:px-6 lg:px-8 py-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-caption" style={{ color: 'var(--text-muted)' }}>
              <li><Link href="/" style={{ color: 'var(--text-link)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Request a Quote</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            Request a Quote
          </h1>
          <p className="text-body-lg" style={{ color: 'var(--text-muted)' }}>
            Tell us about your project and machinery requirements. Our team will verify specs and send pricing with fast turnaround across India.
          </p>
        </div>
      </div>

      <div className="py-12 pb-[100px] lg:pb-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-narrow mx-auto px-4 md:px-6 lg:px-8 space-y-8">
          {/* Untitled UI Quote Form Component */}
          <QuoteForm />

          {/* Direct contact alternatives */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              backgroundColor: 'var(--surface-base)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Prefer to connect directly with an equipment specialist?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ backgroundColor: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--surface-tint)', color: 'var(--brand-blue, #008CFC)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-label font-medium" style={{ color: 'var(--text-primary)' }}>Email Inquiries</p>
                  <p className="text-body-sm" style={{ color: 'var(--text-muted)' }}>
                    Contact us to confirm
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ backgroundColor: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--surface-tint)', color: 'var(--brand-blue, #008CFC)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-label font-medium" style={{ color: 'var(--text-primary)' }}>Phone Consultation</p>
                  <p className="text-body-sm" style={{ color: 'var(--text-muted)' }}>
                    Contact us to confirm
                  </p>
                </div>
              </div>
            </div>

            <p className="text-caption mt-4" style={{ color: 'var(--text-muted)' }}>
              Note: Reach International deploys certified machinery across Maharashtra, Gujarat, Karnataka, Tamil Nadu, Delhi NCR, and nationwide.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
