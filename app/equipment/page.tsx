import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Equipment Catalogue',
  description:
    'Browse Reach International\'s full range of aerial work platforms and material handling equipment available for rental and sale.',
  alternates: { canonical: 'https://www.reachinternational.co.in/equipment/' },
}

const categories = [
  {
    group: 'Access Equipment',
    items: [
      { href: '/equipment/aerial-work-platforms/', label: 'Aerial Work Platforms (Hub)', desc: 'Overview and comparison of all AWP types.' },
      { href: '/equipment/boom-lifts/', label: 'Boom Lifts', desc: 'Articulated and telescopic boom lifts.' },
      { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts', desc: 'Electric and rough-terrain slab lifts.' },
      { href: '/equipment/vertical-mast-lifts/', label: 'Vertical Mast Lifts', desc: 'Indoor zero-tailswing solutions.' },
      { href: '/equipment/spider-lifts/', label: 'Spider Lifts', desc: 'Tracked crawlers for sensitive surfaces.' },
      { href: '/equipment/scaffolding/', label: 'Scaffolding', desc: 'Modular mobile tower systems.' },
    ],
  },
  {
    group: 'Material Handling Equipment',
    items: [
      { href: '/equipment/material-handling/', label: 'Material Handling (Hub)', desc: 'Overview and comparison of all MHE types.' },
      { href: '/equipment/forklifts/', label: 'Forklifts', desc: 'Diesel, LPG and electric forklifts.' },
      { href: '/equipment/reach-trucks/', label: 'Reach Trucks', desc: 'Narrow-aisle high-density stacking.' },
      { href: '/equipment/material-lifts/', label: 'Material Lifts', desc: 'Compact portable crank lifts.' },
    ],
  },
]

export default function EquipmentPage() {
  return (
    <>
      <div
        className="pt-[72px] pb-12"
        style={{
          backgroundColor: 'var(--surface-base)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 pt-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-caption" style={{ color: 'var(--text-muted)' }}>
              <li><Link href="/" style={{ color: 'var(--text-link)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Equipment</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            Equipment Catalogue
          </h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            Aerial work platforms and material handling equipment for rental and sale. Browse by category to find the right machine for your project.
          </p>
        </div>
      </div>

      <div
        className="py-16"
        style={{ backgroundColor: 'var(--surface-sunken)' }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          {categories.map((group) => (
            <div key={group.group} className="mb-12">
              <h2 className="text-h2 mb-6" style={{ color: 'var(--text-primary)' }}>
                {group.group}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start justify-between p-6 rounded-lg transition-all"
                    style={{
                      backgroundColor: 'var(--surface-base)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div>
                      <h3
                        className="text-h4 mb-1 group-hover:text-[var(--text-link)] transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.label}
                      </h3>
                      <p className="text-body-sm" style={{ color: 'var(--text-muted)' }}>
                        {item.desc}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 shrink-0 ml-4 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote CTA */}
      <section className="py-16" style={{ backgroundColor: 'var(--surface-base)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
            Not sure which equipment you need?
          </h2>
          <p className="text-body-lg mb-8" style={{ color: 'var(--text-muted)' }}>
            Contact us and we will help you select the right machine for your project and site conditions.
          </p>
          <Link
            href="/request-a-quote/"
            className="inline-flex items-center justify-center px-8 h-12 rounded-md text-label font-medium"
            style={{ backgroundColor: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' }}
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  )
}
