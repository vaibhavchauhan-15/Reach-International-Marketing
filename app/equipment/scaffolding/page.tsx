import { CategoryPageTemplate, createCategoryMetadata } from '@/components/templates/CategoryPageTemplate'

const config = {
  slug: 'scaffolding',
  title: 'Scaffolding',
  h1: 'Aluminium Scaffolding — Rental & Sale',
  description: 'Modular aluminium mobile tower scaffolding for rapid assembly. Lightweight, strong and safe for work at height.',
  longDescription: 'Aluminium mobile tower scaffolding provides a stable working platform that can be assembled and moved without tools. The lightweight aluminium construction makes it easy to transport and erect, while maintaining the strength and stability required for safe work at height. Suitable for both indoor and outdoor use.',
  applications: [
    'Painting and decorating at height',
    'Plastering and rendering',
    'Light construction and refurbishment',
    'Event and exhibition set-up',
    'Maintenance in facilities with restricted access for powered machines',
  ],
  relatedCategories: [
    { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts' },
    { href: '/equipment/vertical-mast-lifts/', label: 'Vertical Mast Lifts' },
    { href: '/equipment/aerial-work-platforms/', label: 'All Aerial Work Platforms' },
  ],
}

export const metadata = createCategoryMetadata(config)

export default function ScaffoldingPage() {
  return <CategoryPageTemplate config={config} />
}
