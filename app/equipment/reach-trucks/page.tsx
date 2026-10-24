import { CategoryPageTemplate, createCategoryMetadata } from '@/components/templates/CategoryPageTemplate'

const config = {
  slug: 'reach-trucks',
  title: 'Reach Trucks',
  h1: 'Reach Trucks — Rental & Sale',
  description: 'Electric reach trucks for narrow-aisle high-density warehouse storage. Stacking solutions for maximum space utilisation.',
  longDescription: 'Reach trucks are electric-powered stand-up or sit-down forklifts designed for high-density, narrow-aisle warehouse racking. The extending mast allows the forks to reach into racking without the whole machine moving forward, enabling operation in narrower aisles than counterbalanced forklifts and maximising warehouse storage density.',
  applications: [
    'High-bay warehouse racking systems',
    'Narrow-aisle order picking',
    'Cold store and temperature-controlled warehousing',
    'Distribution centre operations',
    'Manufacturing inbound/outbound logistics',
  ],
  relatedCategories: [
    { href: '/equipment/forklifts/', label: 'Forklifts' },
    { href: '/equipment/material-lifts/', label: 'Material Lifts' },
    { href: '/equipment/material-handling/', label: 'All Material Handling Equipment' },
  ],
}

export const metadata = createCategoryMetadata(config)

export default function ReachTrucksPage() {
  return <CategoryPageTemplate config={config} />
}
