import { CategoryPageTemplate, createCategoryMetadata } from '@/components/templates/CategoryPageTemplate'

const config = {
  slug: 'forklifts',
  title: 'Forklifts',
  h1: 'Forklifts — Rental & Sale',
  description: 'Diesel, LPG and electric counterbalanced forklifts for rental and sale. A range of capacities for warehouse, yard and industrial use.',
  longDescription: 'Forklifts (counterbalanced lift trucks) are the workhorses of materials handling. Available in diesel, LPG and electric versions to suit indoor and outdoor applications. Capacities range from light-duty warehouse forklifts to heavy-duty machines for freight terminals and industrial facilities.',
  applications: [
    'Warehouse receiving and despatch',
    'Freight terminal and yard operations',
    'Manufacturing and production facilities',
    'Construction site materials handling',
    'Container and bulk cargo handling',
  ],
  relatedCategories: [
    { href: '/equipment/reach-trucks/', label: 'Reach Trucks' },
    { href: '/equipment/material-lifts/', label: 'Material Lifts' },
    { href: '/equipment/material-handling/', label: 'All Material Handling Equipment' },
  ],
}

export const metadata = createCategoryMetadata(config)

export default function ForkliftsPage() {
  return <CategoryPageTemplate config={config} />
}
