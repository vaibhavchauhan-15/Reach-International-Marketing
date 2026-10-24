import { CategoryPageTemplate, createCategoryMetadata } from '@/components/templates/CategoryPageTemplate'

const config = {
  slug: 'spider-lifts',
  title: 'Spider Lifts',
  h1: 'Spider Lifts — Rental & Sale',
  description: 'Tracked spider (crawler) lifts for sensitive surfaces and difficult terrain. Ideal for landscaping, heritage buildings and architectural access.',
  longDescription: 'Spider lifts (crawler lifts or tracked boom lifts) use outrigger legs and crawler tracks to distribute their weight and operate on surfaces where wheeled machines cannot. They are compact enough to enter through standard doorways and can work on sensitive floors, including polished stone, grass and uneven terrain.',
  applications: [
    'Heritage and historic building maintenance',
    'Interior access through standard doorways',
    'Landscaping and tree surgery',
    'Fragile or load-sensitive floor surfaces',
    'Narrow access corridors and confined sites',
  ],
  relatedCategories: [
    { href: '/equipment/boom-lifts/', label: 'Boom Lifts' },
    { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts' },
    { href: '/equipment/aerial-work-platforms/', label: 'All Aerial Work Platforms' },
  ],
}

export const metadata = createCategoryMetadata(config)

export default function SpiderLiftsPage() {
  return <CategoryPageTemplate config={config} />
}
