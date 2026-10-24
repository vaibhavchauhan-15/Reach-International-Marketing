import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div
        className="pt-[72px] min-h-[80vh] flex items-center"
        style={{ backgroundColor: 'var(--surface-base)' }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 py-20 text-center">
          <div
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm text-overline uppercase tracking-widest mb-6"
            style={{ backgroundColor: 'var(--surface-tint)', color: 'var(--badge-fg)' }}
          >
            404 — Page not found
          </div>

          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            This page does not exist
          </h1>
          <p className="text-body-lg mb-10 mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '480px' }}>
            The page you are looking for may have moved or the URL may be incorrect.
            Try browsing our equipment catalogue or get in touch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/equipment/"
              className="inline-flex items-center justify-center px-6 h-11 rounded-md text-label font-medium"
              style={{ backgroundColor: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' }}
            >
              Browse equipment
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 h-11 rounded-md border text-label font-medium"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
            >
              Go to homepage
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-6 h-11 rounded-md border text-label font-medium"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
            >
              Contact us
            </Link>
          </div>

          {/* Quick links */}
          <div
            className="inline-grid grid-cols-2 md:grid-cols-4 gap-3 text-left"
            style={{ maxWidth: '720px', margin: '0 auto' }}
          >
            {[
              { href: '/equipment/boom-lifts/', label: 'Boom Lifts' },
              { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts' },
              { href: '/equipment/forklifts/', label: 'Forklifts' },
              { href: '/equipment/reach-trucks/', label: 'Reach Trucks' },
              { href: '/services/rental/', label: 'Equipment Rental' },
              { href: '/services/equipment-sales/', label: 'Equipment Sales' },
              { href: '/about/', label: 'About Us' },
              { href: '/request-a-quote/', label: 'Request a Quote' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-body-sm transition-colors"
                style={{ color: 'var(--text-link)' }}
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
