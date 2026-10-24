import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aerial Work Platforms',
  description: 'Compare aerial work platform types — boom lifts, scissor lifts, vertical mast lifts and spider lifts. Find the right AWP for your project.',
  alternates: { canonical: 'https://www.reachinternational.co.in/equipment/aerial-work-platforms/' },
}

const awpTypes = [
  {
    href: '/equipment/boom-lifts/',
    label: 'Boom Lifts',
    when: 'When you need to reach over or around obstacles, work at significant heights, or access hard-to-reach areas.',
    highlights: ['Articulated (knuckle) and telescopic options', 'Diesel and electric variants', 'High working heights'],
  },
  {
    href: '/equipment/scissor-lifts/',
    label: 'Scissor Lifts',
    when: 'When you need a stable elevated platform for multiple workers or heavy tools, on flat or slightly uneven ground.',
    highlights: ['Large platform area', 'Electric (indoor) and diesel (outdoor) options', 'Rough-terrain variants available'],
  },
  {
    href: '/equipment/vertical-mast-lifts/',
    label: 'Vertical Mast Lifts',
    when: 'When you need a compact single-person machine for tight indoor spaces with narrow aisles.',
    highlights: ['Zero tailswing', 'Narrow footprint', 'Electric — zero emissions indoors'],
  },
  {
    href: '/equipment/spider-lifts/',
    label: 'Spider Lifts',
    when: 'When you need to access difficult terrain, sensitive floor surfaces, or pass through narrow openings.',
    highlights: ['Tracked crawlers', 'Low floor pressure', 'Can enter through standard doorways'],
  },
]

export default function AWPHubPage() {
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
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Aerial Work Platforms</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>
            Aerial Work Platforms
          </h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            Aerial work platforms (AWPs) provide elevated access for personnel and tools. Use this guide to choose the right type for your project.
          </p>
        </div>
      </div>

      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-h2 mb-8" style={{ color: 'var(--text-primary)' }}>
            Which type do I need?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awpTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group p-8 rounded-lg flex flex-col transition-all"
                style={{
                  backgroundColor: 'var(--surface-base)',
                  border: '1px solid var(--border-subtle)',
                }}
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
            <p className="text-body mb-4" style={{ color: 'var(--text-muted)' }}>
              Not sure which type suits your project? Contact us for a recommendation.
            </p>
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
