import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildFaqJsonLd } from '@/lib/jsonld'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { TiltCard } from '@/components/spectrumui/tilt-card'
import { StatusBadge } from '@/components/spectrumui/status-badge'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { ArrowRight } from '@untitledui/icons'
import { HeroSection } from '@/components/patterns/HeroSection'
import { ClientsSection } from '@/components/patterns/ClientsSection'

export const metadata: Metadata = {
  title: 'Reach International — Aerial Work Platforms & Material Handling Equipment',
  description:
    'Certified aerial work platforms, boom lifts, scissor lifts and material handling equipment for rental and sale across India. Authorized machinery from JCB, Toyota, Hyundai, JLG, Genie and BYD. Reaching All Heights.',
  alternates: { canonical: 'https://www.reachinternational.co.in/' },
}

// ── Verified Equipment Brands (per owner confirmation) ──────────────────────────
const brandShowcase = [
  {
    name: 'JCB',
    category: 'AWP (Aerial Work Platform)',
    typeTag: 'Boom Lifts & Rough-Terrain Access',
    desc: 'Heavy-duty rough-terrain aerial access machinery built for demanding Indian construction and infrastructure sites.',
    models: 'Articulated Booms • Telescopic Booms • Access Scissor Lifts',
    availability: 'Rental & Sales',
  },
  {
    name: 'Toyota',
    category: 'Both AWP & MHE',
    typeTag: 'Counterbalanced Forklifts & Aerial Access',
    desc: 'World benchmark in material handling durability, ergonomics, and precision electric and diesel forklift engineering.',
    models: '1.5T–8T Forklifts • Electric Reach Trucks • Access Equipment',
    availability: 'Rental & Sales',
  },
  {
    name: 'Hyundai',
    category: 'MHE (Material Handling)',
    typeTag: 'Heavy Diesel & Electric Forklifts',
    desc: 'Robust material handling machinery engineered for heavy-duty industrial yards, ports, and steel manufacturing plants.',
    models: 'Heavy Forklifts • Warehouse Material Lifts • Pallet Equipment',
    availability: 'Rental & Sales',
  },
  {
    name: 'JLG',
    category: 'AWP (Aerial Work Platform)',
    typeTag: 'High-Reach Articulated & Telescopic Booms',
    desc: 'Global leader in elevated work platform safety and engineering, reaching working heights from 15m to 48m.',
    models: 'Articulating Booms • Ultra Booms • Electric Scissor Lifts',
    availability: 'Rental & Sales',
  },
  {
    name: 'Genie',
    category: 'AWP (Aerial Work Platform)',
    typeTag: 'Self-Propelled Scissor & Boom Lifts',
    desc: 'Industry standard for electric slab scissor lifts and articulated aerial platforms with high operator safety.',
    models: 'Electric Scissor Lifts • Telescopic Booms • Vertical Masts',
    availability: 'Rental & Sales',
  },
  {
    name: 'BYD',
    category: 'MHE (Material Handling)',
    typeTag: 'Lithium Iron Phosphate Electric Forklifts',
    desc: 'Zero-emission lithium-ion battery forklifts designed for rapid charging, clean indoor air, and zero battery maintenance.',
    models: 'Li-Ion Electric Forklifts • High-Bay Reach Trucks • Heavy Stackers',
    availability: 'Rental & Sales',
  },
]

// ── AWP Categories ─────────────────────────────────────────────────────────────
const awpEquipment = [
  {
    href: '/equipment/boom-lifts/',
    label: 'Boom Lifts',
    reach: '15m – 48m Reach',
    desc: 'Articulated and telescopic heavy booms for up-and-over access in construction & plant maintenance.',
    image: '/images/awp_boom_lift.jpg',
    brands: ['JLG', 'JCB', 'Genie'],
  },
  {
    href: '/equipment/scissor-lifts/',
    label: 'Scissor Lifts',
    reach: '6m – 18m Elevation',
    desc: 'Electric slab and rough-terrain scissor lifts with large platform work decks for indoor and outdoor tasks.',
    image: '/images/awp_scissor_lift.jpg',
    brands: ['Genie', 'JCB', 'JLG'],
  },
  {
    href: '/equipment/vertical-mast-lifts/',
    label: 'Vertical Mast Lifts',
    reach: '8m – 12m Height',
    desc: 'Compact zero-tailswing personnel lifts ideal for narrow warehouse aisles and facility maintenance.',
    image: '/images/awp_scissor_lift.jpg',
    brands: ['JLG', 'Genie'],
  },
  {
    href: '/equipment/spider-lifts/',
    label: 'Spider Lifts',
    reach: '14m – 32m Reach',
    desc: 'Tracked crawler chassis designed for delicate marble floors, heritage buildings, and steep grade access.',
    image: '/images/awp_boom_lift.jpg',
    brands: ['JLG', 'Genie'],
  },
]

// ── MHE Categories ─────────────────────────────────────────────────────────────
const mheEquipment = [
  {
    href: '/equipment/forklifts/',
    label: 'Forklifts',
    spec: '1.5 – 16 Ton Payload',
    desc: 'Diesel, LPG, and zero-emission electric counterbalanced forklifts for factories and container yards.',
    image: '/images/mhe_forklift.jpg',
    brands: ['Toyota', 'Hyundai', 'BYD'],
  },
  {
    href: '/equipment/reach-trucks/',
    label: 'Reach Trucks',
    spec: 'Up to 12.5m Stacking',
    desc: 'High-performance narrow-aisle reach trucks designed for high-density warehouse storage racks.',
    image: '/images/mhe_reach_truck.jpg',
    brands: ['Toyota', 'Hyundai'],
  },
  {
    href: '/equipment/material-lifts/',
    label: 'Material Lifts',
    spec: 'Portable HVAC Telescopic',
    desc: 'Rapid mechanical crank and hydraulic hoists for HVAC, steel ducting, and electrical assembly.',
    image: '/images/mhe_forklift.jpg',
    brands: ['Hyundai', 'Toyota'],
  },
  {
    href: '/equipment/scaffolding/',
    label: 'Modular Scaffolding',
    spec: 'Heavy Duty Modular Systems',
    desc: 'Rapid-assembly certified aluminum and steel access towers for industrial plant overhauls.',
    image: '/images/awp_boom_lift.jpg',
    brands: ['Reach Access'],
  },
]

// ── Industries ─────────────────────────────────────────────────────────────────
const industries = [
  {
    href: '/industries/construction/',
    label: 'Construction',
    desc: 'High-elevation access for high-rise residential, commercial hubs & bridges.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    href: '/industries/manufacturing/',
    label: 'Manufacturing',
    desc: 'Heavy machinery handling, automotive assembly lines & plant retrofits.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: '/industries/warehousing-logistics/',
    label: 'Warehousing',
    desc: 'Narrow-aisle stacking, high-bay inventory handling & 3PL logistics.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    href: '/industries/infrastructure/',
    label: 'Infrastructure',
    desc: 'Metro rail corridors, airport terminals, flyovers & highway viaducts.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    href: '/industries/',
    label: 'Industrial Facilities',
    desc: 'Refineries, chemical plants, pharmaceutical hubs & power stations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    href: '/services/rental/',
    label: 'Maintenance',
    desc: 'Scheduled shutdown overhauls, HVAC ducting & façade servicing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
  },
]

// ── FAQs ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What equipment brands does Reach International rent and sell?',
    a: 'We offer certified aerial work platforms and material handling equipment from world-leading OEM manufacturers: Hyundai (MHE), JCB (AWP), Toyota (AWP & MHE), JLG (AWP), Genie (AWP), and BYD (MHE lithium-ion forklifts).',
  },
  {
    q: 'What is the difference between AWP and MHE machinery?',
    a: 'AWP (Aerial Work Platforms) includes equipment designed to elevate personnel and tools safely to height (boom lifts, scissor lifts, spider lifts, vertical masts). MHE (Material Handling Equipment) includes machinery built to lift, move, and stack heavy industrial goods (counterbalanced forklifts, reach trucks, and pallet equipment).',
  },
  {
    q: 'Do you offer both short-term rental and outright equipment purchase?',
    a: 'Yes. We provide flexible rental agreements ranging from daily/monthly project leases to multi-year contracts, as well as direct equipment sales with verified maintenance histories and documentation.',
  },
  {
    q: 'Where across India do you deliver machinery?',
    a: 'We provide pan-India delivery and support, deploying equipment to major industrial corridors, metro infrastructure projects, manufacturing clusters, and logistics parks across India.',
  },
  {
    q: 'How do I get a tailored quote for my project?',
    a: 'Submit your requirements via our Request a Quote form or reach out via our contact page. Our equipment specialists will assess your working height, payload, and site conditions to provide transparent terms.',
  },
]

// ── Testimonials (Indian Industrial Context) ───────────────────────────────────
const testimonials = [
  {
    quote:
      'Reach International delivered four JLG boom lifts directly to our metro viaduct site on short notice. The machines were in pristine condition and operator safety training was thoroughly handled.',
    author: 'Rajesh K. Sharma',
    role: 'Senior Project Director',
    org: 'Urban Infrastructure & Metro Rail Project',
    location: 'Mumbai – Ahmedabad Corridor',
    rating: 5,
  },
  {
    quote:
      'We switched to BYD lithium-ion forklifts and Toyota reach trucks for our 200,000 sq ft logistics hub. Zero downtime and high battery efficiency significantly reduced our turnaround cycles.',
    author: 'Amitabh Varma',
    role: 'VP of Supply Chain & Fulfillment',
    org: 'Apex Logistics & Warehousing Park',
    location: 'Bhiwandi, Maharashtra',
    rating: 5,
  },
  {
    quote:
      'During our annual automotive plant turnaround, Reach provided certified Genie scissor lifts and heavy Toyota forklifts. Their on-site support engineers ensured our overhaul completed two days ahead of schedule.',
    author: 'Siddharth Patel',
    role: 'Plant Maintenance Head',
    org: 'Automotive Precision Engineering',
    location: 'Sanand / Pune Industrial Cluster',
    rating: 5,
  },
]

export default function HomePage() {
  const faqJsonLd = buildFaqJsonLd(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── 1. HERO SECTION ────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── 2. AERIAL WORK PLATFORMS (AWP) ────────────────────────────────────── */}
      <section
        id="awp-section"
        className="w-full py-16 md:py-20"
        style={{
          backgroundColor: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: 'var(--brand-blue, #008CFC)' }}
              >
                OUR EQUIPMENT — AERIAL WORK PLATFORMS
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Aerial Work Platforms (AWP)
              </h2>
              <p className="text-base text-gray-600 mt-2 max-w-xl">
                High-reach access platforms engineered for worker safety, precision positioning, and elevated job site productivity.
              </p>
            </div>
            <Link
              href="/equipment/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
              style={{ color: 'var(--text-link)' }}
            >
              <span>View All Equipment</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awpEquipment.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md cursor-pointer block"
                style={{
                  backgroundColor: 'var(--surface-base)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ backgroundColor: 'var(--surface-sunken)' }}>
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute top-3 left-3 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold shadow-xs"
                    style={{
                      backgroundColor: 'var(--surface-raised)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {item.reach}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className="text-lg font-bold transition-colors group-hover:text-[#008CFC]"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.label}
                      </h3>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" style={{ color: 'var(--brand-blue, #008CFC)' }} />
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Brand tags — border removed per feedback */}
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="font-medium" style={{ color: 'var(--text-muted)' }}>Brands:</span>
                    <div className="flex items-center gap-1.5">
                      {item.brands.map((b) => (
                        <span
                          key={b}
                          className="px-2 py-0.5 rounded font-semibold text-[10px]"
                          style={{
                            backgroundColor: 'var(--surface-sunken)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-subtle)',
                          }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MATERIAL HANDLING EQUIPMENT (MHE) ───────────────────────────────── */}
      <section
        id="mhe-section"
        className="w-full py-16 md:py-20"
        style={{
          backgroundColor: 'var(--surface-base)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: 'var(--brand-blue, #008CFC)' }}
              >
                MATERIAL HANDLING SOLUTIONS
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Material Handling Equipment (MHE)
              </h2>
              <p className="text-base mt-2 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                Heavy-duty diesel, electric, and lithium-ion forklifts and reach trucks engineered for demanding warehouse and plant logistics.
              </p>
            </div>
            <Link
              href="/equipment/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
              style={{ color: 'var(--text-link)' }}
            >
              <span>Explore MHE Inventory</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mheEquipment.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md cursor-pointer block"
                style={{
                  backgroundColor: 'var(--surface-base)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ backgroundColor: 'var(--surface-sunken)' }}>
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute top-3 left-3 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold shadow-xs"
                    style={{
                      backgroundColor: 'var(--surface-raised)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {item.spec}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className="text-lg font-bold transition-colors group-hover:text-[#008CFC]"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.label}
                      </h3>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" style={{ color: 'var(--brand-blue, #008CFC)' }} />
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Brand tags — border removed per feedback */}
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="font-medium" style={{ color: 'var(--text-muted)' }}>Brands:</span>
                    <div className="flex items-center gap-1.5">
                      {item.brands.map((b) => (
                        <span
                          key={b}
                          className="px-2 py-0.5 rounded font-semibold text-[10px]"
                          style={{
                            backgroundColor: 'var(--surface-sunken)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-subtle)',
                          }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR CLIENTS & TRUSTED OEM BRANDS ───────────────────────────────── */}
      <section
        id="brands-section"
        className="w-full py-16 md:py-20"
        style={{
          backgroundColor: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: 'var(--brand-blue, #008CFC)' }}
            >
              TRUSTED OEM MACHINERY
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              World-Class Brands We Rent &amp; Sell
            </h2>
            <p className="text-base mt-3" style={{ color: 'var(--text-secondary)' }}>
              Certified equipment sourced from global leaders in access platforms and material handling technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandShowcase.map((brand) => (
              <TiltCard
                key={brand.name}
                className="p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xl shadow-xs"
                        style={{
                          backgroundColor: 'var(--surface-sunken)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {brand.name.slice(0, 3)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{brand.name}</h3>
                        <p className="text-xs font-semibold text-primary">{brand.category}</p>
                      </div>
                    </div>
                    <StatusBadge
                      status="success"
                      label={brand.availability}
                    />
                  </div>

                  <p className="text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wide">
                    {brand.typeTag}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {brand.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">{brand.models}</span>
                  <Link
                    href="/request-a-quote/"
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Get Quote →
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4B. ENTERPRISE CLIENTS SECTION (Dual Auto-scrolling Loop) ──────── */}
      <ClientsSection />

      {/* ── 5. INDUSTRY SECTION (Matches UI design screenshot layout) ─────────── */}
      <section
        id="industry-section"
        className="w-full py-16 md:py-24"
        style={{
          backgroundColor: 'var(--surface-base)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Featured Image Card with Play/Preview Badge */}
            <div className="lg:col-span-5 relative">
              <div
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <Image
                  src="/images/industry_construction.jpg"
                  alt="Indian engineer in safety vest and helmet on elevated scissor lift inspecting infrastructure works"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Watch Our Solutions Pill */}
                <div className="absolute bottom-5 left-5 bg-black/75 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-3 text-white text-xs font-semibold border border-white/20">
                  <div className="w-7 h-7 rounded-full bg-[#008CFC] flex items-center justify-center text-white">
                    <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span>Watch Our Solutions &bull; 2:14</span>
                </div>
              </div>
            </div>

            {/* Right: Copy & Industry Grid */}
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4"
                style={{
                  backgroundColor: 'var(--surface-tint)',
                  color: 'var(--brand-blue, #008CFC)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                INDUSTRIES
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
                Tailored Solutions for Every Industry
              </h2>

              <p className="text-base leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                From high-speed metro viaducts to 24/7 automated warehouses and automotive plants, we deliver equipment and support tailored to keep your operations safe, productive, and on schedule.
              </p>

              {/* 6 Industry Badges/Tiles Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {industries.map((ind) => (
                  <Link
                    key={ind.label}
                    href={ind.href}
                    className="flex flex-col p-4 rounded-xl transition-all group shadow-xs hover:shadow-md cursor-pointer"
                    style={{
                      backgroundColor: 'var(--surface-base)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors group-hover:bg-[#008CFC] group-hover:text-white"
                      style={{
                        backgroundColor: 'var(--surface-tint)',
                        color: 'var(--brand-blue, #008CFC)',
                      }}
                    >
                      {ind.icon}
                    </div>
                    <span
                      className="text-sm font-bold transition-colors group-hover:text-[#008CFC]"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {ind.label}
                    </span>
                    <span
                      className="text-xs mt-1 line-clamp-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {ind.desc}
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                href="/industries/"
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors"
                style={{ color: 'var(--brand-blue, #008CFC)' }}
              >
                <span>Explore All Industries</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SERVICE SECTION ("Flexible Rental & Sales Solutions") ─────────── */}
      <section
        id="services-section"
        className="w-full py-16 md:py-20"
        style={{
          backgroundColor: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Card 1: Rental & Sales Solutions */}
            <div
              className="lg:col-span-7 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs border"
              style={{
                backgroundColor: 'var(--surface-base)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4"
                  style={{
                    backgroundColor: 'var(--surface-tint)',
                    color: 'var(--brand-blue, #008CFC)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  RENTAL &amp; SALES
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Flexible Rental &amp; Sales Solutions
                </h3>
                <p className="text-base mb-6 leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                  Choose from short-term project rentals or permanent capital sales options for certified equipment that fits your exact project timeline and budget.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div
                    className="p-3.5 rounded-xl border"
                    style={{
                      backgroundColor: 'var(--surface-sunken)',
                      borderColor: 'var(--border-subtle)',
                    }}
                  >
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Equipment Rental</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Flexible daily, monthly &amp; annual leases with full maintenance coverage.</p>
                  </div>
                  <div
                    className="p-3.5 rounded-xl border"
                    style={{
                      backgroundColor: 'var(--surface-sunken)',
                      borderColor: 'var(--border-subtle)',
                    }}
                  >
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Equipment Sales</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Verified OEM machines with complete maintenance histories and warranty support.</p>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  href="/services/rental/"
                  color="primary"
                  size="md"
                  className="rounded-full px-7 shadow-xs group"
                  iconTrailing={<ArrowRight className="size-4" />}
                >
                  Explore Options
                </Button>
              </div>
            </div>

            {/* Card 2: Need a Quote? (Isometric Technical Scissor Lift Drawing) */}
            <div
              className="lg:col-span-5 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs border"
              style={{
                backgroundColor: 'var(--surface-base)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              {/* Technical Drawing Scissor Lift SVG */}
              <div className="w-full flex justify-center py-4">
                <svg
                  width="180"
                  height="160"
                  viewBox="0 0 200 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90"
                >
                  {/* Top Work Platform with Railings */}
                  <rect x="40" y="20" width="120" height="12" rx="2" stroke="#008CFC" strokeWidth="2.5" fill="var(--surface-sunken)" />
                  <line x1="45" y1="8" x2="155" y2="8" stroke="#008CFC" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="45" y1="8" x2="45" y2="20" stroke="#008CFC" strokeWidth="2" />
                  <line x1="155" y1="8" x2="155" y2="20" stroke="#008CFC" strokeWidth="2" />
                  <line x1="100" y1="8" x2="100" y2="20" stroke="#008CFC" strokeWidth="2" />

                  {/* Scissor Mechanism Lattice */}
                  <line x1="45" y1="32" x2="155" y2="75" stroke="#008CFC" strokeWidth="3" strokeLinecap="round" />
                  <line x1="155" y1="32" x2="45" y2="75" stroke="#008CFC" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="100" cy="53.5" r="3.5" fill="var(--surface-base)" stroke="#008CFC" strokeWidth="2" />

                  <line x1="45" y1="75" x2="155" y2="120" stroke="#008CFC" strokeWidth="3" strokeLinecap="round" />
                  <line x1="155" y1="75" x2="45" y2="120" stroke="#008CFC" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="100" cy="97.5" r="3.5" fill="var(--surface-base)" stroke="#008CFC" strokeWidth="2" />

                  {/* Chassis Base */}
                  <rect x="35" y="120" width="130" height="24" rx="4" stroke="#008CFC" strokeWidth="2.5" fill="var(--surface-sunken)" />
                  <rect x="45" y="126" width="35" height="12" rx="2" fill="#008CFC" fillOpacity="0.2" />

                  {/* Wheels */}
                  <circle cx="55" cy="155" r="14" fill="var(--surface-sunken)" stroke="#008CFC" strokeWidth="2" />
                  <circle cx="55" cy="155" r="6" fill="#008CFC" />
                  <circle cx="145" cy="155" r="14" fill="var(--surface-sunken)" stroke="#008CFC" strokeWidth="2" />
                  <circle cx="145" cy="155" r="6" fill="#008CFC" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Need a Quote?
                </h3>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Get a customized quote for your equipment requirements with fast mobilization across India.
                </p>
                <Button
                  href="/request-a-quote/"
                  color="secondary"
                  size="md"
                  className="rounded-full px-6 shadow-xs group"
                  iconTrailing={<ArrowRight className="size-4" />}
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY REACH (Value Bar from Design Screenshot) ───────────────────── */}
      <section
        id="why-reach"
        className="w-full py-14"
        style={{
          backgroundColor: 'var(--surface-base)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Safety First */}
            <div className="flex items-start gap-3.5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: 'var(--surface-tint)',
                  color: 'var(--brand-blue, #008CFC)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Safety First</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Our top priority is a safe work environment with certified machines.
                </p>
              </div>
            </div>

            {/* 2. Expert Support */}
            <div className="flex items-start gap-3.5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: 'var(--surface-tint)',
                  color: 'var(--brand-blue, #008CFC)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Expert Support</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Dedicated team for all your operational and on-site support needs.
                </p>
              </div>
            </div>

            {/* 3. Reliable Equipment */}
            <div className="flex items-start gap-3.5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: 'var(--surface-tint)',
                  color: 'var(--brand-blue, #008CFC)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Reliable Equipment</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Well-maintained and ready when you are, from leading global OEMs.
                </p>
              </div>
            </div>

            {/* 4. Sustainable Future */}
            <div className="flex items-start gap-3.5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: 'var(--surface-tint)',
                  color: 'var(--brand-blue, #008CFC)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Sustainable Future</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Greener electric and lithium-ion solutions for zero-emission projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. HOW IT WORKS ────────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="w-full py-16 md:py-20"
        style={{
          backgroundColor: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: 'var(--brand-blue, #008CFC)' }}
            >
              SEAMLESS PROCESS
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              How It Works
            </h2>
            <p className="text-base mt-2" style={{ color: 'var(--text-secondary)' }}>
              From initial machinery selection to on-site commissioning and ongoing support across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div
              className="p-6 rounded-2xl shadow-xs flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--surface-base)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div className="text-3xl font-extrabold text-[#008CFC] mb-4">01</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Select Machinery</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Browse our verified AWP and MHE categories. Filter by working height, payload, or brand: JCB, JLG, Genie, Toyota, Hyundai, or BYD.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="p-6 rounded-2xl shadow-xs flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--surface-base)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div className="text-3xl font-extrabold text-[#008CFC] mb-4">02</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Get Custom Quote</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Submit your project requirements. Receive transparent commercial rental terms or purchase options tailored to your site timeline.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className="p-6 rounded-2xl shadow-xs flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--surface-base)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div className="text-3xl font-extrabold text-[#008CFC] mb-4">03</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Rapid Site Dispatch</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Every machine undergoes a multi-point safety check before direct transport to your job site anywhere in India.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div
              className="p-6 rounded-2xl shadow-xs flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--surface-base)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div className="text-3xl font-extrabold text-[#008CFC] mb-4">04</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Full On-Site Support</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Our certified technicians provide on-site operator familiarization, scheduled preventative maintenance, and 24/7 technical backup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ────────────────────────────────────────────────────── */}
      <section
        id="testimonials"
        className="w-full py-16 md:py-20"
        style={{
          backgroundColor: 'var(--surface-base)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: 'var(--brand-blue, #008CFC)' }}
            >
              CLIENT EXPERIENCES
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Trusted on India&apos;s Flagship Projects
            </h2>
            <p className="text-base mt-2" style={{ color: 'var(--text-secondary)' }}>
              Hear from project managers, supply chain heads, and plant engineers who rely on Reach International.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl shadow-xs flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed italic mb-6" style={{ color: 'var(--text-primary)' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{t.author}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role} &bull; {t.org}</p>
                  <span
                    className="inline-block mt-2 text-[11px] font-semibold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: 'var(--surface-tint)',
                      color: 'var(--brand-blue, #008CFC)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ SECTION ────────────────────────────────────────────────────── */}
      <section
        id="faq"
        className="w-full py-16 md:py-20"
        style={{
          backgroundColor: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: 'var(--brand-blue, #008CFC)' }}
              >
                QUESTIONS &amp; ANSWERS
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible variant="card">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── 11. INVERSE QUOTE CTA ─────────────────────────────────────────────── */}
      <section
        className="w-full py-20 relative overflow-hidden"
        style={{
          backgroundColor: '#09101D',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: 'var(--brand-blue, #008CFC)' }}
        />

        <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{
              backgroundColor: 'rgba(0, 140, 252, 0.15)',
              color: '#8FCDFF',
              border: '1px solid rgba(0, 140, 252, 0.3)',
            }}
          >
            PAN-INDIA EQUIPMENT ACCESS
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white tracking-tight">
            Ready to find the right equipment for your project?
          </h2>

          <p className="text-base md:text-lg mb-8 mx-auto text-gray-300 max-w-xl leading-relaxed">
            Connect with our heavy machinery specialists. We will recommend the exact machine, working height, payload, and commercial model for your timeline.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/request-a-quote/"
              color="primary"
              size="lg"
              className="rounded-full px-8 shadow-lg group"
              iconTrailing={<ArrowRight className="size-4" />}
            >
              Request a Quote
            </Button>

            <Button
              href="/contact/"
              variant="outline"
              size="lg"
              className="rounded-full px-8 shadow-xs group text-white border-white/20 hover:bg-white/10 hover:border-white/40"
              iconTrailing={<ArrowRight className="size-4" />}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
