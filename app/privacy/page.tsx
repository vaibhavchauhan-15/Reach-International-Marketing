import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Reach International — how we handle your personal information.',
  alternates: { canonical: 'https://www.reachinternational.co.in/privacy/' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
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
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>Privacy Policy</h1>
          <p className="text-body-sm" style={{ color: 'var(--text-muted)' }}>
            Last updated: October 2026 — pending legal review.
          </p>
        </div>
      </div>

      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-narrow mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="p-8 rounded-lg prose"
            style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
          >
            <p className="text-body mb-4" style={{ color: 'var(--text-secondary)' }}>
              This privacy policy will be updated with approved legal text by Reach International prior to launch.
              It will cover: what personal data we collect, how we use it, how long we retain it, and your rights.
            </p>

            <h2 className="text-h2 mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>Information We Collect</h2>
            <p className="text-body mb-4" style={{ color: 'var(--text-secondary)' }}>
              When you submit a quote request or contact form, we collect the information you provide (name, company,
              phone, email, project details). This is used solely to respond to your enquiry.
            </p>

            <h2 className="text-h2 mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>How We Use Your Information</h2>
            <p className="text-body mb-4" style={{ color: 'var(--text-secondary)' }}>
              Your information is used to respond to your enquiry and, where you have consented, to send you
              relevant follow-up communications. We do not sell or share your data with third parties for marketing.
            </p>

            <h2 className="text-h2 mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>Contact Us</h2>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              For privacy-related queries, please <Link href="/contact/" style={{ color: 'var(--text-link)' }}>contact us</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
