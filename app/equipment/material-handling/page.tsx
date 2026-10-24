import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Material Handling Equipment',
  description: 'Compare material handling equipment types — forklifts, reach trucks and material lifts. Find the right MHE for your warehouse or site.',
  alternates: { canonical: 'https://www.reachinternational.co.in/equipment/material-handling/' },
}

const mheTypes = [
  {
    href: '/equipment/forklifts/',
    label: 'Forklifts',
    when: 'When you need to move pallets or bulk loads in a yard, warehouse or on a freight terminal.',
    highlights: ['Diesel, LPG and electric options', 'Wide capacity range', 'Indoor and outdoor use'],
  },
  {
    href: '/equipment/reach-trucks/',
    label: 'Reach Trucks',
    when: 'When you need to stack pallets to height in narrow warehouse aisles for high-density storage.',
    highlights: ['Narrow-aisle operation', 'High stacking heights', 'Electric — zero emissions'],
  },
  {
    href: '/equipment/material-lifts/',
    label: 'Material Lifts',
    when: 'When you need to raise materials to height for installation without a full AWP.',
    highlights: ['Compact and portable', 'Manual or electric operation', 'Ideal for M&E installation'],
  },
]

export default function MHEHubPage() {
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
              <li><Link href="/equipment/" style={{ color: 'var(--text-link)' }}>Equipment</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Material Handling Equipment</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            Material Handling Equipment
          </h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            Material handling equipment (MHE) moves, stores and manages goods and materials within facilities. Use this guide to choose the right type.
          </p>
        </div>
      </div>

      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-h2 mb-8" style={{ color: 'var(--text-primary)' }}>
            Which type do I need?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mheTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group p-8 rounded-lg flex flex-col transition-all"
                style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
              >
                <h3
                  className="text-h3 mb-2 group-hover:text-[var(--text-link)] transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {type.label}
                </h3>
                <p className="text-body-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Best when:</strong> {type.when}
                </p>
                <ul className="space-y-1 mt-auto">
                  {type.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-body-sm" style={{ color: 'var(--text-secondary)' }}>
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--icon-accent)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center justify-center px-8 h-12 rounded-md text-label font-medium"
              style={{ backgroundColor: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' }}
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
