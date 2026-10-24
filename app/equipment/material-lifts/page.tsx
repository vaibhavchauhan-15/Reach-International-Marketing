import { CategoryPageTemplate, createCategoryMetadata } from '@/components/templates/CategoryPageTemplate'

const config = {
  slug: 'material-lifts',
  title: 'Material Lifts',
  h1: 'Material Lifts — Rental & Sale',
  description: 'Portable crank and telescopic material lifts for HVAC, ducting and light mechanical installation.',
  longDescription: 'Material lifts (portable mechanical lifts) are manually operated or electric-powered hoisting platforms designed to raise materials to height without the need for a powered aerial work platform. Compact and portable, they are ideal for HVAC duct installation, suspended ceiling work, pipework and other mechanical and electrical installation tasks.',
  applications: [
    'HVAC and air conditioning installation',
    'Suspended ceiling and ductwork',
    'Mechanical and electrical services installation',
    'Lighting installation in commercial spaces',
    'Signage and display installation',
  ],
  relatedCategories: [
    { href: '/equipment/forklifts/', label: 'Forklifts' },
    { href: '/equipment/reach-trucks/', label: 'Reach Trucks' },
    { href: '/equipment/material-handling/', label: 'All Material Handling Equipment' },
  ],
}

export const metadata = createCategoryMetadata(config)

export default function MaterialLiftsPage() {
  return <CategoryPageTemplate config={config} />
}
