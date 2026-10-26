import type { Metadata } from 'next'
import { AboutClient } from './AboutClient'

export const metadata: Metadata = {
  title: 'About Reach International — Easy, Safe and Efficient Lifting Solutions',
  description:
    'Reach International provides industrial lifting and shifting equipment across India. With over a decade of rental experience, 50+ product types, and a 328+ machine fleet, we deliver engineering-led access solutions.',
  alternates: { canonical: 'https://www.reachinternational.co.in/about/' },
}

export default function AboutPage() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Reach International',
    url: 'https://www.reachinternational.co.in',
    logo: 'https://www.reachinternational.co.in/images/reach-logo-dark.png',
    description:
      'Industrial lifting and shifting equipment rental and sales. Boom lifts, scissor lifts, aerial work platforms, and material handling equipment across India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '702, New Delhi House, 27 Barakhamba Road',
      addressLocality: 'New Delhi',
      postalCode: '110001',
      addressCountry: 'IN',
    },
    telephone: ['+91 9910221405', '+91 9958199513'],
    email: 'info@reachinternational.co.in',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <AboutClient />
    </>
  )
}
