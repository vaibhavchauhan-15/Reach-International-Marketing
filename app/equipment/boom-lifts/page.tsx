import { CategoryPageTemplate, createCategoryMetadata } from '@/components/templates/CategoryPageTemplate'

const config = {
  slug: 'boom-lifts',
  title: 'Boom Lifts',
  h1: 'Boom Lifts — Rental & Sale',
  description: 'Articulated and telescopic boom lifts for rental and sale. Reach overhead and around obstacles at height — from construction sites to industrial facilities.',
  longDescription: 'Boom lifts are self-propelled aerial work platforms that provide access at height and over obstacles. Articulated boom lifts (knuckle booms) can reach around barriers and in tight spaces, while telescopic boom lifts provide maximum straight-line reach and working height. Available in electric and diesel-powered configurations for indoor and outdoor use.',
  applications: [
    'Construction and building works',
    'Industrial maintenance and inspection',
    'Infrastructure projects',
    'Facility management at height',
    'Steel erection and structural work',
  ],
  relatedCategories: [
    { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts' },
    { href: '/equipment/vertical-mast-lifts/', label: 'Vertical Mast Lifts' },
    { href: '/equipment/spider-lifts/', label: 'Spider Lifts' },
    { href: '/equipment/aerial-work-platforms/', label: 'All Aerial Work Platforms' },
  ],
}

export const metadata = createCategoryMetadata(config)

export default function BoomLiftsPage() {
  return <CategoryPageTemplate config={config} />
}
