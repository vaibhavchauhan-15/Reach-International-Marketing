import { IndustryPageTemplate, createIndustryMetadata } from '@/components/templates/IndustryPageTemplate'

const config = {
  slug: 'warehousing-logistics',
  title: 'Warehousing & Logistics',
  description: 'Reach trucks, forklifts and vertical mast lifts for warehousing and logistics operations — high-density storage, order picking and despatch.',
  intro: 'Warehousing and logistics operations demand efficient, reliable material handling. From narrow-aisle reach trucks for maximum storage density to forklifts for loading bays and mast lifts for maintenance access — we have the equipment your facility needs.',
  equipmentLinks: [
    { href: '/equipment/reach-trucks/', label: 'Reach Trucks', why: 'Narrow-aisle high-bay storage stacking up to 12.5m.' },
    { href: '/equipment/forklifts/', label: 'Forklifts', why: 'Loading docks, yard operations and pallet movements.' },
    { href: '/equipment/vertical-mast-lifts/', label: 'Vertical Mast Lifts', why: 'Maintenance access in racking aisles.' },
    { href: '/equipment/material-lifts/', label: 'Material Lifts', why: 'Light goods hoisting for installation tasks.' },
  ],
}

export const metadata = createIndustryMetadata(config)
export default function WarehousingPage() {
  return <IndustryPageTemplate config={config} />
}
