import type { Metadata } from 'next'
import { Manrope, Fraunces } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://denverwebcrew.com'),
  title: {
    default: 'Denver Web Crew | Local Web Design for Denver Businesses',
    template: '%s | Denver Web Crew',
  },
  description: 'Denver Web Crew builds websites for local businesses in Denver, Aurora, Lakewood, Littleton, and across the Front Range — in person, with professional photography, Google Maps setup, and local SEO. Fixed-price packages.',
  keywords: [
    'web design denver',
    'website design denver co',
    'denver web designer',
    'small business website denver',
    'local business website colorado',
    'denver web design company',
    'web design aurora co',
    'web design lakewood co',
    'web design littleton co',
    'front range web design',
    'google business profile setup denver',
    'local seo denver',
    'denver website photography',
    'denver business website',
    'affordable web design denver',
  ],
  authors: [{ name: 'Denver Web Crew', url: 'https://denverwebcrew.com' }],
  creator: 'Denver Web Crew',
  publisher: 'Denver Web Crew',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  icons: {
    icon: '/denver-web-crew-favicon.png',
    apple: '/denver-web-crew-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Denver Web Crew',
    title: 'Denver Web Crew | Local Web Design for Denver Businesses',
    description: 'Websites built in person for Denver-area businesses — photography, Google Maps setup, local SEO, branding, and ongoing care. Fixed-price packages starting at $600.',
    url: 'https://denverwebcrew.com',
    images: [{ url: '/denver-web-crew-lockup.png', width: 1200, height: 630, alt: 'Denver Web Crew' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denver Web Crew | Local Web Design for Denver Businesses',
    description: 'Websites built in person for Denver-area businesses. Photography, Google Maps, local SEO, branding. Fixed-price packages.',
    images: ['/denver-web-crew-lockup.png'],
  },
  alternates: {
    canonical: 'https://denverwebcrew.com',
  },
}

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Denver Web Crew',
  description: 'Local web design company serving Denver, Aurora, Lakewood, Littleton, and the Front Range. We build websites in person with professional photography, Google Business Profile setup, local SEO, and branding for small businesses.',
  url: 'https://denverwebcrew.com',
  telephone: '+13039497775',
  email: 'denverwebcrew@gmail.com',
  logo: 'https://denverwebcrew.com/denver-web-crew-lockup.png',
  image: 'https://denverwebcrew.com/denver-web-crew-lockup.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    postalCode: '80202',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.7392,
    longitude: -104.9903,
  },
  areaServed: [
    { '@type': 'City', name: 'Denver', sameAs: 'https://en.wikipedia.org/wiki/Denver' },
    { '@type': 'City', name: 'Aurora', sameAs: 'https://en.wikipedia.org/wiki/Aurora,_Colorado' },
    { '@type': 'City', name: 'Lakewood', sameAs: 'https://en.wikipedia.org/wiki/Lakewood,_Colorado' },
    { '@type': 'City', name: 'Littleton', sameAs: 'https://en.wikipedia.org/wiki/Littleton,_Colorado' },
    { '@type': 'City', name: 'Englewood', sameAs: 'https://en.wikipedia.org/wiki/Englewood,_Colorado' },
    { '@type': 'City', name: 'Arvada', sameAs: 'https://en.wikipedia.org/wiki/Arvada,_Colorado' },
    { '@type': 'City', name: 'Westminster', sameAs: 'https://en.wikipedia.org/wiki/Westminster,_Colorado' },
    { '@type': 'City', name: 'Thornton', sameAs: 'https://en.wikipedia.org/wiki/Thornton,_Colorado' },
    { '@type': 'City', name: 'Broomfield', sameAs: 'https://en.wikipedia.org/wiki/Broomfield,_Colorado' },
    { '@type': 'City', name: 'Centennial', sameAs: 'https://en.wikipedia.org/wiki/Centennial,_Colorado' },
    { '@type': 'City', name: 'Highlands Ranch', sameAs: 'https://en.wikipedia.org/wiki/Highlands_Ranch,_Colorado' },
    { '@type': 'City', name: 'Parker', sameAs: 'https://en.wikipedia.org/wiki/Parker,_Colorado' },
    { '@type': 'City', name: 'Castle Rock', sameAs: 'https://en.wikipedia.org/wiki/Castle_Rock,_Colorado' },
    { '@type': 'City', name: 'Boulder', sameAs: 'https://en.wikipedia.org/wiki/Boulder,_Colorado' },
    { '@type': 'State', name: 'Colorado', sameAs: 'https://en.wikipedia.org/wiki/Colorado' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'Starter Package', price: '600', priceCurrency: 'USD', description: 'Up to 5 pages, photography, branding, basic local SEO' },
      { '@type': 'Offer', name: 'Growth Package', price: '1000', priceCurrency: 'USD', description: 'Up to 8 pages, photography, Google Business Profile, social media setup, review system' },
      { '@type': 'Offer', name: 'Premium Package', price: '1900', priceCurrency: 'USD', description: 'Unlimited pages, all services including online booking, print materials, priority support' },
    ],
  },
  sameAs: [
    'https://www.facebook.com/denverwebcrew',
    'https://www.instagram.com/denverwebcrew',
    'https://www.linkedin.com/company/denverwebcrew',
  ],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Denver Web Crew',
  url: 'https://denverwebcrew.com',
  description: 'Local web design for Denver businesses — built in person with photography, Google Maps setup, and local SEO.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Denver, Colorado" />
        <meta name="geo.position" content="39.7392;-104.9903" />
        <meta name="ICBM" content="39.7392, -104.9903" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
