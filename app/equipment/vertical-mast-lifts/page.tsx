import { CategoryPageTemplate, createCategoryMetadata } from '@/components/templates/CategoryPageTemplate'

const config = {
  slug: 'vertical-mast-lifts',
  title: 'Vertical Mast Lifts',
  h1: 'Vertical Mast Lifts — Rental & Sale',
  description: 'Compact electric vertical mast lifts for indoor use. Zero tailswing design for narrow aisles and tight spaces.',
  longDescription: 'Vertical mast lifts (personnel lifts) are compact electric-powered machines designed for single-person operation in confined indoor spaces. Their zero tailswing design and narrow footprint make them ideal for tight aisles, alongside racking systems and within facilities where larger machines cannot operate.',
  applications: [
    'Narrow-aisle warehousing and racking access',
    'Indoor facility maintenance',
    'Retail stockroom and display work',
    'Light construction and fit-out',
    'Airport and transport terminal maintenance',
  ],
  relatedCategories: [
    { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts' },
    { href: '/equipment/boom-lifts/', label: 'Boom Lifts' },
    { href: '/equipment/aerial-work-platforms/', label: 'All Aerial Work Platforms' },
  ],
}

export const metadata = createCategoryMetadata(config)

export default function VerticalMastLiftsPage() {
  return <CategoryPageTemplate config={config} />
}
