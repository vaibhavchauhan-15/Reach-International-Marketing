import { IndustryPageTemplate, createIndustryMetadata } from '@/components/templates/IndustryPageTemplate'

const config = {
  slug: 'manufacturing',
  title: 'Manufacturing',
  description: 'Access and material handling equipment for manufacturing plants and industrial facilities — maintenance, inspection and production support.',
  intro: 'Manufacturing facilities require dependable access and material handling solutions for maintenance, inspection, production support and facility management. We offer both short-term and long-term rental as well as sales.',
  equipmentLinks: [
    { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts', why: 'Elevated maintenance platforms inside plant buildings.' },
    { href: '/equipment/vertical-mast-lifts/', label: 'Vertical Mast Lifts', why: 'Compact units for narrow production aisles.' },
    { href: '/equipment/boom-lifts/', label: 'Boom Lifts', why: 'Access overhead structures and roof areas.' },
    { href: '/equipment/forklifts/', label: 'Forklifts', why: 'Materials movement within production and despatch areas.' },
    { href: '/equipment/reach-trucks/', label: 'Reach Trucks', why: 'Inbound/outbound racking and storage operations.' },
  ],
}

export const metadata = createIndustryMetadata(config)
export default function ManufacturingPage() {
  return <IndustryPageTemplate config={config} />
}
