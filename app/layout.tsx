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
  title: 'Denver Web Crew | Websites Built In Person, Denver CO',
  description: 'Denver Web Crew builds websites for Denver local businesses — in person, with professional photography, Google & Apple Maps setup, and ongoing care. Fixed-price packages.',
  icons: {
    icon: '/denver-web-crew-favicon.png',
    apple: '/denver-web-crew-favicon.png',
  },
  openGraph: {
    title: 'Denver Web Crew | Websites Built In Person, Denver CO',
    description: 'Denver Web Crew builds websites for Denver local businesses — in person, with professional photography, Google & Apple Maps setup, and ongoing care. Fixed-price packages.',
    url: 'https://denverwebcrew.com',
    images: [{ url: '/denver-web-crew-lockup.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  )
}
