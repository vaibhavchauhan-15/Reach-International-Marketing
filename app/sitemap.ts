import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.reachinternational.co.in'
  const now = new Date('2026-10-23')

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/equipment/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/equipment/aerial-work-platforms/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/equipment/boom-lifts/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/equipment/scissor-lifts/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/equipment/vertical-mast-lifts/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/equipment/spider-lifts/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/equipment/scaffolding/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/equipment/material-handling/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/equipment/forklifts/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/equipment/reach-trucks/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/equipment/material-lifts/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/rental/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/equipment-sales/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/industries/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/industries/construction/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/industries/manufacturing/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/industries/warehousing-logistics/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/industries/infrastructure/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/request-a-quote/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/privacy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
