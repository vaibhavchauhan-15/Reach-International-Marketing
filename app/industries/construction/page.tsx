import { IndustryPageTemplate, createIndustryMetadata } from '@/components/templates/IndustryPageTemplate'

const config = {
  slug: 'construction',
  title: 'Construction',
  description: 'Aerial work platforms and material handling equipment for construction sites — boom lifts, scissor lifts and forklifts for rental and sale.',
  intro: 'Construction projects require robust, reliable access and materials handling. We supply aerial work platforms and material handling equipment suited to both indoor and outdoor construction environments.',
  equipmentLinks: [
    { href: '/equipment/boom-lifts/', label: 'Boom Lifts', why: 'Reach over structures and access difficult heights on open sites.' },
    { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts', why: 'Stable elevated platform for finishing work, MEP and cladding.' },
    { href: '/equipment/spider-lifts/', label: 'Spider Lifts', why: 'Confined-access crawler lifts for sensitive or restricted areas.' },
    { href: '/equipment/scaffolding/', label: 'Scaffolding', why: 'Rapid-assembly mobile towers for finishing trades.' },
    { href: '/equipment/forklifts/', label: 'Forklifts', why: 'Site materials handling, loading and unloading.' },
  ],
}

export const metadata = createIndustryMetadata(config)
export default function ConstructionPage() {
  return <IndustryPageTemplate config={config} />
}
