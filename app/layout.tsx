import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import '../styles/tokens.css'
import { Navigation } from '@/components/patterns/Navigation'
import { SiteFooter } from '@/components/patterns/SiteFooter'
import { StickyActionBar } from '@/components/patterns/StickyActionBar'
import { RouteProvider } from '@/providers/route-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { Agentation } from 'agentation'

// JSON-LD: Organization + WebSite (site-wide)
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Reach International',
  url: 'https://www.reachinternational.co.in',
  logo: 'https://www.reachinternational.co.in/images/reach-logo-dark.png',
  sameAs: [],
  description:
    'Reach International provides aerial work platforms, boom lifts, scissor lifts, forklifts and material handling equipment for rental and sale across India.',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Reach International',
  url: 'https://www.reachinternational.co.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.reachinternational.co.in/equipment/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.reachinternational.co.in'),
  title: {
    default: 'Reach International — Aerial Work Platforms & Material Handling Equipment',
    template: '%s | Reach International',
  },
  description:
    'Reach International provides aerial work platforms, boom lifts, scissor lifts, forklifts and material handling equipment for rental and sale across India. Reaching All Heights.',
  keywords: ['aerial work platforms', 'boom lifts', 'scissor lifts', 'forklift rental', 'material handling equipment', 'AWP rental India'],
  authors: [{ name: 'Reach International' }],
  creator: 'Reach International',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.reachinternational.co.in',
    siteName: 'Reach International',
    title: 'Reach International — Aerial Work Platforms & Material Handling Equipment',
    description:
      'Premium aerial work platforms and material handling equipment for rental and sale. Reaching All Heights.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Reach International — Reaching All Heights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reach International — Reaching All Heights',
    description: 'Aerial work platforms, boom lifts, scissor lifts and material handling equipment for rental and sale.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.reachinternational.co.in',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Theme bootstrap — runs before first paint; no FOUC. Must stay inline. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('reach-theme');if(s==='dark'||s==='light'){document.documentElement.setAttribute('data-theme',s);}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}document.documentElement.classList.add('js');})();`,
          }}
        />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={GeistSans.variable}>
        <RouteProvider>
          <ThemeProvider>
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            <Navigation />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <SiteFooter />
            <StickyActionBar />
            {process.env.NODE_ENV === 'development' && (
              <Agentation endpoint="http://localhost:4747" />
            )}
          </ThemeProvider>
        </RouteProvider>
      </body>
    </html>
  )
}
