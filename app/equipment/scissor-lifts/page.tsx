import { CategoryPageTemplate, createCategoryMetadata } from '@/components/templates/CategoryPageTemplate'

const config = {
  slug: 'scissor-lifts',
  title: 'Scissor Lifts',
  h1: 'Scissor Lifts — Rental & Sale',
  description: 'Electric and rough-terrain scissor lifts for rental and sale. Stable elevated work platforms for indoor and outdoor applications.',
  longDescription: 'Scissor lifts provide a stable, elevated platform using a crossed-arm (scissor) mechanism. Electric scissor lifts are ideal for indoor use with zero emissions. Rough-terrain (diesel or dual-fuel) models are designed for outdoor uneven ground. Available in a range of platform heights and capacities to suit various applications.',
  applications: [
    'Warehousing and logistics facilities',
    'Manufacturing plant maintenance',
    'Commercial construction interiors',
    'Retail and commercial fit-outs',
    'HVAC and electrical installation',
  ],
  relatedCategories: [
    { href: '/equipment/boom-lifts/', label: 'Boom Lifts' },
    { href: '/equipment/vertical-mast-lifts/', label: 'Vertical Mast Lifts' },
    { href: '/equipment/aerial-work-platforms/', label: 'All Aerial Work Platforms' },
  ],
}

export const metadata = createCategoryMetadata(config)

export default function ScissorLiftsPage() {
  return <CategoryPageTemplate config={config} />
}
