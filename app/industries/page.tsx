import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Reach International serves construction, manufacturing, warehousing & logistics and infrastructure industries with aerial work platforms and material handling equipment.',
  alternates: { canonical: 'https://www.reachinternational.co.in/industries/' },
}

const industries = [
  {
    href: '/industries/construction/',
    label: 'Construction',
    desc: 'Boom lifts, scissor lifts and material handling equipment for building and civil engineering projects.',
  },
  {
    href: '/industries/manufacturing/',
    label: 'Manufacturing',
    desc: 'Access and MHE solutions for plant maintenance, production facilities and factory environments.',
  },
  {
    href: '/industries/warehousing-logistics/',
    label: 'Warehousing & Logistics',
    desc: 'Reach trucks, forklifts and vertical mast lifts for high-density storage and order fulfilment.',
  },
  {
    href: '/industries/infrastructure/',
    label: 'Infrastructure',
    desc: 'Heavy-access platforms for bridges, power installations, roads and public infrastructure.',
  },
]

export default function IndustriesPage() {
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
              <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Industries</li>
            </ol>
          </nav>
          <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>Industries We Serve</h1>
          <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>
            Our equipment is used across a range of industries throughout India. Select your sector to see relevant equipment guidance.
          </p>
        </div>
      </div>
      <div className="py-16" style={{ backgroundColor: 'var(--surface-sunken)' }}>
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="group p-8 rounded-lg flex flex-col transition-all"
                style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
              >
                <h2
                  className="text-h2 mb-2 group-hover:text-[var(--text-link)] transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {ind.label}
                </h2>
                <p className="text-body" style={{ color: 'var(--text-muted)' }}>{ind.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-label font-medium" style={{ color: 'var(--text-link)' }}>
                  View equipment
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
