import { IndustryPageTemplate, createIndustryMetadata } from '@/components/templates/IndustryPageTemplate'

const config = {
  slug: 'infrastructure',
  title: 'Infrastructure',
  description: 'Heavy-access aerial work platforms for infrastructure projects — bridges, highways, power installations and public works.',
  intro: 'Infrastructure projects often involve elevated work in exposed or difficult-to-reach environments. Our heavy-duty boom lifts and specialist access platforms are suited to bridge maintenance, power line work, highway projects and large-scale public infrastructure.',
  equipmentLinks: [
    { href: '/equipment/boom-lifts/', label: 'Boom Lifts', why: 'Maximum working height and horizontal reach for open infrastructure sites.' },
    { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts', why: 'Rough-terrain diesel models for outdoor uneven ground.' },
    { href: '/equipment/spider-lifts/', label: 'Spider Lifts', why: 'Access below bridges, alongside structures and on unstable ground.' },
    { href: '/equipment/forklifts/', label: 'Forklifts', why: 'Heavy materials handling on large infrastructure sites.' },
  ],
}

export const metadata = createIndustryMetadata(config)
export default function InfrastructurePage() {
  return <IndustryPageTemplate config={config} />
}
