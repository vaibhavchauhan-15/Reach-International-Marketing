'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Award,
  Clock,
  Wrench,
  Users,
  Target,
  Eye,
  HeartHandshake,
  Sparkles,
  Zap,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
  Copy,
  Building2,
  Layers,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
} from 'lucide-react'
import { NumberTicker } from '@/components/spectrumui/number-ticker'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/patterns/Breadcrumb'


// ── What We Do Items ────────────────────────────────────────────────────────
const whatWeDoList = [
  {
    title: 'Boom Lifts',
    desc: 'Articulated & telescopic high-reach boom platforms reaching up to 48m for complex overhead and up-and-over access.',
    href: '/equipment/boom-lifts/',
    icon: Layers,
    badge: 'Articulated & Telescopic',
  },
  {
    title: 'Scissor Lifts',
    desc: 'Electric slab & rough-terrain scissor lifts with spacious platforms for indoor facility installations and exterior facades.',
    href: '/equipment/scissor-lifts/',
    icon: SlidersHorizontal,
    badge: 'Electric & Diesel',
  },
  {
    title: 'Material-Handling Equipment',
    desc: 'Robust counterbalanced diesel and zero-emission electric forklifts, reach trucks, and warehouse handling machinery.',
    href: '/equipment/material-handling/',
    icon: Building2,
    badge: 'Forklifts & Reach Trucks',
  },
  {
    title: 'Aerial Work Platforms & Vertical Lifts',
    desc: 'Compact AWPs and zero-tailswing personnel vertical mast lifts designed for narrow aisles and delicate floor surfaces.',
    href: '/equipment/aerial-work-platforms/',
    icon: TrendingUp,
    badge: 'AWPs & Vertical Masts',
  },
  {
    title: 'Material Lifts',
    desc: 'Portable mechanical and hydraulic telescopic hoists for rapid HVAC, ducting, and structural installation.',
    href: '/equipment/material-lifts/',
    icon: Wrench,
    badge: 'Portable Hoists',
  },
  {
    title: 'Aluminium Scaffolding',
    desc: 'Certified high-strength modular aluminium towers engineered for rapid assembly and rigorous safety compliance.',
    href: '/equipment/scaffolding/',
    icon: ShieldCheck,
    badge: 'Modular & Lightweight',
  },
  {
    title: 'Parts and Services',
    desc: 'Proactive fleet maintenance, genuine replacement spares, and emergency field engineering dispatch.',
    href: '/services/',
    icon: Zap,
    badge: 'Service & Spares',
  },
]

// ── 5 Commitments (Success Mantra) ──────────────────────────────────────────
const commitments = [
  {
    number: '01',
    title: 'Quality Equipment',
    desc: 'Offer equipment that meets customer and project needs.',
    detail: 'Modern, well-maintained machinery adhering to certified international safety benchmarks.',
    icon: Award,
  },
  {
    number: '02',
    title: 'Competitive Rates',
    desc: 'Provide value through competitive rental pricing.',
    detail: 'Transparent rental packages tailored to project duration without hidden operational surcharges.',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Timely Delivery',
    desc: 'Help projects stay on schedule with on-time equipment delivery.',
    detail: 'Strategic logistics coordination to ensure equipment arrives at site precisely when needed.',
    icon: Clock,
  },
  {
    number: '04',
    title: 'Proactive Service',
    desc: 'Support customers with an experienced service team.',
    detail: 'Dedicated certified technicians keeping equipment breakdown time strictly below 5%.',
    icon: Wrench,
  },
  {
    number: '05',
    title: 'Stakeholder Value',
    desc: 'Treat every stakeholder as an important part of our work.',
    detail: 'Long-term partnership ethos focusing on client safety, team welfare, and sustainable growth.',
    icon: HeartHandshake,
  },
]

// ── Core Values ─────────────────────────────────────────────────────────────
const coreValues = [
  {
    title: 'Passion',
    desc: 'Bring commitment and energy to our work.',
    color: '#008CFC',
  },
  {
    title: 'Customer Focus',
    desc: 'Keep customer requirements at the centre of our approach.',
    color: '#0284C7',
  },
  {
    title: 'Collaboration',
    desc: 'Work together to support project needs.',
    color: '#0D9488',
  },
  {
    title: 'Innovation',
    desc: 'Look for progressive ways to improve our solutions.',
    color: '#6366F1',
  },
  {
    title: 'Positivity',
    desc: 'Maintain a constructive, solutions-oriented outlook.',
    color: '#EAB308',
  },
]

// ── Guiding Principles ──────────────────────────────────────────────────────
const guidingPrinciples = [
  { label: 'Ethical Business Practices', icon: ShieldCheck },
  { label: 'Thoughtful Decision-Making', icon: CheckCircle2 },
  { label: 'Respect for Human Rights', icon: Users },
  { label: 'Risk Management', icon: Target },
  { label: 'Health & Safety', icon: ShieldCheck },
  { label: 'Green Energy & Sustainability', icon: Leaf },
]

// ── What Sets Us Apart ──────────────────────────────────────────────────────
const differentiators = [
  {
    title: 'Fast project turnaround',
    desc: 'Swift equipment mobilization, rapid on-site commissioning, and agile response to shifting project schedules.',
    icon: Clock,
  },
  {
    title: 'Substantial cost savings',
    desc: 'Optimized rental structures, fuel-efficient modern fleets, and low total cost of operation.',
    icon: Zap,
  },
  {
    title: 'Adherence to international quality standards',
    desc: 'Rigorous multi-point pre-delivery inspections and certified equipment compliance.',
    icon: Award,
  },
  {
    title: 'Support for business revenue and productivity',
    desc: 'High machine uptime (<5% breakdown rate) preventing costly workforce downtime.',
    icon: TrendingUp,
  },
  {
    title: 'Broad domain knowledge and outsourcing expertise',
    desc: 'Deep multi-domain engineering experience across construction, industrial plants, infrastructure, and warehousing.',
    icon: Building2,
  },
  {
    title: 'Strategic delivery locations',
    desc: 'Strategic operational logistics enabling customers to make prompt, effective use of advanced lifting technology.',
    icon: MapPin,
  },
]

export function AboutClient() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--surface-base)' }}>
      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section
        className="relative pt-[96px] pb-20 md:pb-28 overflow-hidden"
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          background:
            'radial-gradient(120% 80% at 50% 0%, var(--surface-tint) 0%, var(--surface-base) 100%)',
        }}
      >
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[120px] opacity-25 dark:opacity-20"
          style={{ background: 'var(--brand-blue)' }}
        />

        <div className="relative max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'About Us' }]} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Badge */}
              <div>
                <span
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-xs"
                  style={{
                    backgroundColor: 'var(--surface-raised)',
                    border: '1px solid var(--border-strong)',
                    color: 'var(--text-link)',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--brand-blue)' }}
                  />
                  About Reach International
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]"
                style={{ color: 'var(--text-primary)' }}
              >
                Easy, Safe and Efficient{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, var(--brand-blue) 0%, #005aa3 100%)',
                  }}
                >
                  Lifting Solutions
                </span>
              </h1>

              {/* Story Copy */}
              <div className="space-y-4 max-w-2xl">
                <p
                  className="text-body-lg font-normal leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Reach International provides industrial lifting and shifting equipment for
                  businesses that need to work safely and efficiently at height. With a decade
                  of experience in equipment rental, we combine engineering-led knowledge,
                  competitive rental rates and a service-focused approach to support projects
                  with different site requirements.
                </p>
                <p
                  className="text-body font-normal leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Our range includes more than 50 product types and a rental fleet of over 328
                  machines. We understand the urgency of project schedules and the practical,
                  site-specific needs of engineers, helping customers find suitable equipment for
                  their work.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link href="/request-a-quote/">
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/equipment/">
                    <span>Explore Fleet Catalog</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Visual Image Card with Live Metrics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div
                className="relative rounded-2xl overflow-hidden p-2 shadow-md"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <BorderBeam size={280} duration={14} colorFrom="var(--brand-blue)" colorTo="#005aa3" />
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src="/images/hero_boom_lift.jpg"
                    alt="Reach International aerial work platform on site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider font-semibold text-sky-300">
                      Engineering-Led Excellence
                    </p>
                    <p className="text-sm font-medium mt-0.5">
                      Empowering Indian infrastructure and manufacturing with certified access.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── 4 Verified Stats Row ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              {
                value: 10,
                suffix: '+',
                label: 'Decade of Experience',
                desc: 'In industrial equipment rental',
              },
              {
                value: 328,
                suffix: '+',
                label: 'Rental Fleet Machines',
                desc: 'Active operational inventory',
              },
              {
                value: 50,
                suffix: '+',
                label: 'Product Types',
                desc: 'Specialized lifting solutions',
              },
              {
                prefix: '< ',
                value: 5,
                suffix: '%',
                label: 'Breakdown Target',
                desc: 'Strict SLA equipment uptime',
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="relative rounded-xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {stat.prefix}
                  <NumberTicker
                    value={stat.value}
                    className="font-extrabold"
                    digitClassName="text-3xl md:text-4xl"
                  />
                  <span style={{ color: 'var(--brand-blue)' }}>{stat.suffix}</span>
                </div>
                <div
                  className="mt-2 text-sm font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {stat.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── What We Do Section ────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative"
        style={{
          backgroundColor: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span
              className="text-xs font-mono font-semibold uppercase tracking-wider"
              style={{ color: 'var(--brand-blue)' }}
            >
              WHAT WE DO
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Comprehensive Lifting & Access Solutions
            </h2>
            <p
              className="text-body-lg mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              We provide equipment rental and related products and services across a range of
              lifting and access requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoList.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  style={{
                    backgroundColor: 'var(--surface-base)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors group-hover:scale-110 duration-200"
                        style={{
                          backgroundColor: 'var(--surface-tint)',
                          color: 'var(--brand-blue)',
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="brand" size="sm">
                        {item.badge}
                      </Badge>
                    </div>

                    <h3
                      className="text-h4 font-bold group-hover:text-[var(--brand-blue)] transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-body-sm mt-2 leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center text-xs font-semibold text-[var(--brand-blue)] group-hover:translate-x-1 transition-transform">
                    <span>View equipment specifications</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              )
            })}

            {/* Self-Propelled Special Feature Highlight Card */}
            <div
              className="relative rounded-xl p-6 md:col-span-2 lg:col-span-2 overflow-hidden flex flex-col justify-center"
              style={{
                background:
                  'linear-gradient(135deg, var(--surface-base) 0%, var(--surface-tint) 100%)',
                border: '1px solid var(--border-strong)',
              }}
            >
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--surface-base)] text-[var(--brand-blue)] border border-[var(--border-subtle)]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Fleet Specialization
                  </div>
                  <h3
                    className="text-h3 font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Self-Propelled Scissor Lifts & Boom Lifts
                  </h3>
                  <p
                    className="text-body-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Our fleet includes self-propelled scissor lifts and boom lifts, allowing
                    smooth navigation at full height with precision proportional controls for
                    faster turnaround on active construction, logistics, and industrial maintenance sites.
                  </p>
                </div>

                <Button asChild size="md" className="shrink-0">
                  <Link href="/equipment/">
                    <span>Browse All 50+ Types</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision Spotlight Section ────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          backgroundColor: 'var(--surface-base)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="text-xs font-mono font-semibold uppercase tracking-wider"
              style={{ color: 'var(--brand-blue)' }}
            >
              PURPOSE & DIRECTION
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Our Mission & Vision
            </h2>
            <p
              className="text-body-lg mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              The driving principles behind every machine we mobilize and every project we support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div
              className="relative rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--surface-raised)',
                border: '1px solid var(--border-strong)',
              }}
            >
              <BorderBeam size={220} duration={12} colorFrom="var(--brand-blue)" colorTo="#008cfc" />
              <div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-xs"
                  style={{
                    backgroundColor: 'var(--surface-tint)',
                    color: 'var(--brand-blue)',
                  }}
                >
                  <Target className="w-7 h-7" />
                </div>
                <span
                  className="text-xs font-mono uppercase font-bold tracking-wider"
                  style={{ color: 'var(--brand-blue)' }}
                >
                  STATEMENT OF PURPOSE
                </span>
                <h3
                  className="text-h2 font-bold mt-2 mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Our Mission
                </h3>
                <blockquote
                  className="text-xl md:text-2xl font-medium leading-relaxed italic"
                  style={{ color: 'var(--text-primary)' }}
                >
                  “To provide the best industrial equipment so that people can reach every
                  height safely.”
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[var(--surface-sunken)] text-[var(--text-secondary)]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--brand-blue)]" />
                  Operator Safety First
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[var(--surface-sunken)] text-[var(--text-secondary)]">
                  <Check className="w-3.5 h-3.5 text-[var(--brand-blue)]" />
                  Zero Compromise on Quality
                </span>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="relative rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--surface-raised)',
                border: '1px solid var(--border-strong)',
              }}
            >
              <BorderBeam size={220} duration={12} delay={6} colorFrom="#005aa3" colorTo="var(--brand-blue)" />
              <div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-xs"
                  style={{
                    backgroundColor: 'var(--surface-tint)',
                    color: 'var(--brand-blue)',
                  }}
                >
                  <Eye className="w-7 h-7" />
                </div>
                <span
                  className="text-xs font-mono uppercase font-bold tracking-wider"
                  style={{ color: 'var(--brand-blue)' }}
                >
                  FUTURE VISION
                </span>
                <h3
                  className="text-h2 font-bold mt-2 mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Our Vision
                </h3>
                <blockquote
                  className="text-xl md:text-2xl font-medium leading-relaxed italic"
                  style={{ color: 'var(--text-primary)' }}
                >
                  “To provide customers with the safest, high-quality and right-fit equipment
                  quickly, supported by easy and smooth rental options. We aim to keep equipment
                  breakdown time below 5% and earn the confidence and satisfaction of more
                  customers.”
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-[var(--surface-tint)] text-[var(--text-link)]">
                  <Zap className="w-3.5 h-3.5 text-[var(--brand-blue)]" />
                  Target Breakdown Time &lt; 5%
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[var(--surface-sunken)] text-[var(--text-secondary)]">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--brand-blue)]" />
                  Customer Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Success Mantra (Five Commitments) ──────────────────────────── */}
      <section
        className="py-20 md:py-28 relative"
        style={{
          backgroundColor: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span
              className="text-xs font-mono font-semibold uppercase tracking-wider"
              style={{ color: 'var(--brand-blue)' }}
            >
              OPERATIONAL EXCELLENCE
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Our Success Mantra
            </h2>
            <p
              className="text-body-lg mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              Our approach is built around five commitments that ensure seamless project execution:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {commitments.map((c, idx) => {
              const Icon = c.icon
              return (
                <div
                  key={idx}
                  className="relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  style={{
                    backgroundColor: 'var(--surface-base)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xl font-extrabold font-mono"
                        style={{ color: 'var(--brand-blue)' }}
                      >
                        {c.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: 'var(--surface-tint)',
                          color: 'var(--brand-blue)',
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3
                      className="text-h4 font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="text-body-sm font-medium mt-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {c.desc}
                    </p>
                  </div>

                  <p
                    className="text-xs mt-4 pt-3 border-t border-[var(--border-subtle)] leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {c.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Core Values & Principles ──────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative"
        style={{
          backgroundColor: 'var(--surface-base)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Core Values (Left) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span
                  className="text-xs font-mono font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--brand-blue)' }}
                >
                  ORGANIZATIONAL CULTURE
                </span>
                <h2
                  className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Our Core Values
                </h2>
                <p
                  className="text-body mt-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  The fundamental beliefs that anchor our daily interactions and field operations:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {coreValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: val.color }}
                      />
                      <h3
                        className="text-base font-bold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {val.title}
                      </h3>
                    </div>
                    <p
                      className="text-body-sm leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Principles (Right) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span
                  className="text-xs font-mono font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--brand-blue)' }}
                >
                  ETHICAL FRAMEWORK
                </span>
                <h2
                  className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Our Principles
                </h2>
                <p
                  className="text-body mt-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Our work is guided by ethical business practices, thoughtful decision-making,
                  respect for human rights, risk management, health and safety, and an interest
                  in green energy.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {guidingPrinciples.map((p, idx) => {
                  const Icon = p.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 p-3.5 rounded-lg transition-colors"
                      style={{
                        backgroundColor: 'var(--surface-sunken)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: 'var(--surface-tint)',
                          color: 'var(--brand-blue)',
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {p.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Sets Us Apart ────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative"
        style={{
          backgroundColor: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span
              className="text-xs font-mono font-semibold uppercase tracking-wider"
              style={{ color: 'var(--brand-blue)' }}
            >
              COMPETITIVE ADVANTAGE
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2"
              style={{ color: 'var(--text-primary)' }}
            >
              What Sets Us Apart
            </h2>
            <p
              className="text-body-lg mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              We focus on helping customers complete projects efficiently and get value from
              their equipment choices. Our stated strengths include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon
              return (
                <div
                  key={idx}
                  className="relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--surface-base)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: 'var(--surface-tint)',
                      color: 'var(--brand-blue)',
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-h4 font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {diff.title}
                  </h3>
                  <p
                    className="text-body-sm mt-2 leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {diff.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Business Partners & Manufacturing Innovation ─────────────────── */}
      <section
        className="py-20 md:py-28 relative"
        style={{
          backgroundColor: 'var(--surface-base)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span
                className="text-xs font-mono font-semibold uppercase tracking-wider"
                style={{ color: 'var(--brand-blue)' }}
              >
                MANUFACTURING BENCHMARKS
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Our Business Partners & Engineering Rigour
              </h2>
              <p
                className="text-body-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Our company profile highlights equipment supported by advanced factory
                automation, rigorous quality-control inspections and engineering innovation. It
                also features Genie, a Terex-owned American manufacturer of work lifts and
                platforms used in construction, maintenance, warehouse stocking and equipment
                installation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  'Construction Sites',
                  'Facility Maintenance',
                  'Warehouse Stocking',
                  'Equipment Installation',
                ].map((app, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg text-center text-xs font-semibold"
                    style={{
                      backgroundColor: 'var(--surface-sunken)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {app}
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  Fleet machinery also includes verified global manufacturers: JCB, Toyota, Hyundai, JLG, and BYD.
                </p>
              </div>
            </div>

            {/* Genie Partner Spotlight Card */}
            <div className="lg:col-span-5">
              <div
                className="relative rounded-2xl p-8 overflow-hidden"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border-strong)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <BorderBeam size={200} duration={10} colorFrom="var(--brand-blue)" colorTo="#0284c7" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--brand-blue)]">
                    FEATURED PARTNER
                  </span>
                  <Badge variant="brand" size="sm">
                    Terex-Owned
                  </Badge>
                </div>

                <div className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
                  Genie®
                </div>
                <p className="text-xs font-mono text-[var(--text-muted)] mb-4">
                  American Manufacturer of Elevated Work Platforms
                </p>

                <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6">
                  Industry benchmark for electric slab scissor lifts, articulating booms, and
                  telescopic work platforms engineered for operator safety, fast lifting cycles, and
                  exceptional site reliability.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-blue)]" />
                    <span>Advanced factory automation & precision machining</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-blue)]" />
                    <span>Rigorous multi-point quality control inspections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-blue)]" />
                    <span>Continuous engineering innovation and safety interlocks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Let's Talk About Your Project (CTA & Contact Hub) ─────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background:
            'radial-gradient(100% 70% at 50% 100%, var(--surface-tint) 0%, var(--surface-base) 100%)',
        }}
      >
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden"
            style={{
              backgroundColor: 'var(--surface-raised)',
              border: '1px solid var(--border-strong)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <BorderBeam size={320} duration={15} colorFrom="var(--brand-blue)" colorTo="#005aa3" />

            <div className="max-w-3xl space-y-4">
              <span
                className="text-xs font-mono font-semibold uppercase tracking-wider"
                style={{ color: 'var(--brand-blue)' }}
              >
                CONNECT WITH OUR ENGINEERS
              </span>
              <h2
                className="text-3xl md:text-5xl font-extrabold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Let’s Talk About Your Project
              </h2>
              <p
                className="text-body-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                Whether you need equipment for access, lifting or material handling, our team
                would be glad to discuss your requirements.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone Card */}
              <div
                className="p-6 rounded-2xl flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--surface-base)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: 'var(--surface-tint)',
                      color: 'var(--brand-blue)',
                    }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Call Direct
                  </h3>
                  <div className="mt-2 space-y-1">
                    <a
                      href="tel:+919910221405"
                      className="block text-base font-semibold hover:text-[var(--brand-blue)] transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      +91 9910221405
                    </a>
                    <a
                      href="tel:+919958199513"
                      className="block text-base font-semibold hover:text-[var(--brand-blue)] transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      +91 9958199513
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('+919910221405', 'phone')}
                  className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>{copiedKey === 'phone' ? 'Copied to clipboard!' : 'Copy primary number'}</span>
                  {copiedKey === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email Card */}
              <div
                className="p-6 rounded-2xl flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--surface-base)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: 'var(--surface-tint)',
                      color: 'var(--brand-blue)',
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Email Inquiries
                  </h3>
                  <div className="mt-2">
                    <a
                      href="mailto:info@reachinternational.co.in"
                      className="block text-base font-semibold hover:text-[var(--brand-blue)] transition-colors break-all"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      info@reachinternational.co.in
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('info@reachinternational.co.in', 'email')}
                  className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>{copiedKey === 'email' ? 'Copied to clipboard!' : 'Copy email address'}</span>
                  {copiedKey === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Office Address Card */}
              <div
                className="p-6 rounded-2xl flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--surface-base)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: 'var(--surface-tint)',
                      color: 'var(--brand-blue)',
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Head Office
                  </h3>
                  <p
                    className="mt-2 text-sm font-medium leading-relaxed"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    702, New Delhi House, 27 Barakhamba Road, New Delhi – 110001, India
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-medium text-[var(--text-muted)]">
                  <span>Central Business District</span>
                  <span className="text-[var(--brand-blue)]">New Delhi</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Row */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-[var(--border-subtle)]">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/request-a-quote/">
                    <span>Request a Quote Online</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+919910221405">
                    <span>Call +91 9910221405</span>
                  </a>
                </Button>
              </div>

              {/* Attribution Note */}
              <p
                className="text-xs max-w-md italic"
                style={{ color: 'var(--text-muted)' }}
              >
                Company information and figures on this page are based on the Reach International
                Company Profile provided for this project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
