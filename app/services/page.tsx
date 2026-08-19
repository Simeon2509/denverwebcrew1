import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../Nav'
import Footer from '../Footer'

export const metadata: Metadata = {
  title: 'Services — Denver Web Crew',
  description: 'Website development, photography, drone footage, Google Maps, local SEO, social media, branding, and more — all handled in person for Denver businesses.',
}

const SERVICES = [
  { ic: '💻', title: 'Website Development',             body: "A professional, mobile-friendly website that makes it easy for customers to learn about your business, contact you, book services, or make a purchase." },
  { ic: '📸', title: 'Photography & Drone Content',     body: 'Professional photos and aerial drone footage of your storefront, interior, products, team, and property — ready to use on your site, Google, social media, and print.' },
  { ic: '📱', title: 'Social Media Setup & Content',    body: 'We set up and optimize your Instagram, Facebook, and LinkedIn — and create professional photos, videos, and graphics to launch your profiles strong.' },
  { ic: '📍', title: 'Google Business Profile & Maps',  body: 'We set up and optimize your Google Business Profile so customers can easily find your location, hours, services, photos, and reviews directly on Google and Maps.' },
  { ic: '🔍', title: 'Local SEO',                       body: 'Improve your visibility when people search Google for your services nearby — through website optimization, local listings, and location-specific content.' },
  { ic: '🎨', title: 'Branding & Graphic Design',       body: 'Develop your visual identity from the ground up — logo, colors, fonts, brand guidelines, and a consistent look and feel across everything you put out.' },
  { ic: '📅', title: 'Online Booking & Scheduling',     body: 'Set up an easy online booking system so customers can schedule appointments or services directly from your website, 24/7.' },
  { ic: '🖨️', title: 'Print & Promotional Materials',  body: 'Turn your brand into physical marketing — business cards, flyers, menus, brochures, signage, postcards, and any other printed materials your business needs.' },
  { ic: '⭐', title: 'Review & Reputation Management',  body: 'Build a stronger online reputation with review systems, QR codes, monitoring, and professional response strategies that keep your rating climbing.' },
]

const STEPS = [
  { n: 1, title: 'We meet in person',        body: 'A free walkthrough of your business — we talk goals, look at your space, and figure out exactly what you need.' },
  { n: 2, title: 'We capture your content',  body: 'Photos of your storefront, products, and team — shot on-site so your site looks like your actual business.' },
  { n: 3, title: 'We design & build',        body: 'Your site is built around your brand and your photos — you review drafts before anything goes live.' },
  { n: 4, title: 'We get you found',         body: 'Google Business Profile, Apple Maps, and local SEO are set up so customers can actually find you.' },
  { n: 5, title: 'We stick around',          body: 'Hosting, updates, and support continue every month — one local point of contact, not a ticket queue.' },
]

const PORTFOLIO = [
  { type: 'Restaurant',    label: 'Local dining & takeout',    img: '/portfolio-1.jpg' },
  { type: 'Auto Shop',     label: 'Repair & detailing',        img: '/portfolio-2.jpg' },
  { type: 'Retail',        label: 'Boutique & specialty',      img: '/portfolio-3.jpg' },
  { type: 'Home Services', label: 'Trades & home services',    img: '/portfolio-4.jpg' },
]

export default function Services() {
  return (
    <main>
      <Nav />

      {/* HEADER */}
      <section style={{ padding: '80px 0 56px', background: 'var(--navy)', color: '#fff' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ color: 'var(--sunset-2)' }}>What We Do</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: '640px' }}>Everything a local business needs to grow online</h1>
          <p style={{ color: '#c9d4e3', fontSize: '18px', maxWidth: '52ch', marginBottom: 0 }}>
            All services are handled in person, start to finish — no outsourcing, no call centers.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="grid-services">
            {SERVICES.map(s => (
              <div key={s.title} className="card">
                <div className="ic">{s.ic}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '88px 0', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">How It Works</div>
            <h2>Five steps, start to finish</h2>
            <p>No outsourced strangers, no back-and-forth over email for weeks. We show up, we build it, we keep it running.</p>
          </div>
          <div className="steps">
            {STEPS.map(s => (
              <div key={s.n} className="step">
                <div className="num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section style={{ padding: '88px 0', background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">Our Work</div>
            <h2>Sites we&apos;ve built for Denver businesses</h2>
            <p>Every site is custom-built around the business — their photos, their brand, their customers.</p>
          </div>
          <div className="grid-services">
            {PORTFOLIO.map(p => (
              <div key={p.type} style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--line)', background: 'var(--white)', boxShadow: 'var(--shadow)' }}>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.type} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '18px 20px' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--navy)', marginBottom: '2px' }}>{p.type}</div>
                  <div style={{ fontSize: '13px', color: 'var(--ink-soft)' }}>{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '88px 0', background: 'linear-gradient(120deg, var(--sunset), var(--sunset-2))', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ color: '#fff' }}>Ready to get started?</h2>
          <p style={{ color: 'rgba(255,255,255,.9)', maxWidth: '480px', margin: '0 auto 26px' }}>View our packages or reach out directly — we&apos;ll get back to you within one business day.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn-primary" style={{ background: 'var(--navy)', boxShadow: '0 8px 20px rgba(18,35,59,.35)' }}>See Pricing</Link>
            <Link href="/contact" className="btn btn-outline">Book a Free Visit</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
