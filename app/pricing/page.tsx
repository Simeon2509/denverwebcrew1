import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../Nav'
import Footer from '../Footer'
import PackageBuilder from '../PackageBuilder'

export const metadata: Metadata = {
  title: 'Pricing — Denver Web Crew',
  description: 'Simple fixed-price packages for Denver local businesses. Starting at $600 one-time + low monthly hosting. Customize your package with add-ons.',
}

const ADDONS = [
  { title: 'Extra photo shoot',           price: '$125',      body: 'Seasonal refresh or a new product/service to feature.' },
  { title: 'Online booking setup',        price: '$125',      body: 'Add a scheduling system so customers can book directly from your site.' },
  { title: 'Print materials design',      price: 'from $200', body: 'Business cards, flyers, menus, or postcards — designed to match your brand.' },
  { title: 'Review system setup',         price: '$150',      body: 'QR codes and a system to collect and manage Google reviews.' },
  { title: 'Additional page',             price: '$75',       body: "Add a page beyond your package's included page count." },
  { title: 'Rush build (2 weeks)',        price: '$150',      body: 'Move your project to the front of the queue.' },
  { title: 'Additional location setup',   price: '$200',      body: 'Google Profile, Maps, and SEO setup for a second location.' },
  { title: 'Monthly SEO reporting',       price: '$28/mo',    body: 'Plain-English report on traffic, rankings, and map views each month.' },
]

const FAQS = [
  { q: 'How long does it take?',                a: 'Most sites are live within 2–4 weeks of our first meeting. Rush delivery in 2 weeks is available as an add-on.' },
  { q: 'Do I own my website?',                  a: "Yes. The site is yours. If you ever stop the monthly plan, you keep everything — we'll hand over the files." },
  { q: 'What if I need changes after launch?',  a: "Minor content updates are included in the monthly fee. Bigger changes like new pages are quoted separately at a fair flat rate." },
  { q: "What's included in the monthly fee?",   a: 'Hosting, SSL certificate, security updates, daily backups, and basic support. No surprise bills.' },
  { q: 'Do I need to provide photos?',          a: "No. We come to your business and shoot them. That's part of what makes us different from agencies that rely on stock photos." },
  { q: 'Can you work with my existing domain?', a: "Yes — we'll point your domain to the new site or transfer it over, no extra charge." },
]

export default function Pricing() {
  return (
    <main>
      <Nav />

      {/* HEADER */}
      <section style={{ padding: '80px 0 56px', background: 'var(--navy)', color: '#fff' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ color: 'var(--sunset-2)' }}>Pricing</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: '640px' }}>Simple, fixed-price packages</h1>
          <p style={{ color: '#c9d4e3', fontSize: '18px', maxWidth: '52ch', marginBottom: 0 }}>
            One clear price to build your site, plus a low monthly fee. No hidden hours, no surprise invoices.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ padding: '88px 0', background: 'var(--navy)' }}>
        <div className="wrap">
          <PackageBuilder />
        </div>
      </section>

      {/* ADD-ONS */}
      <section style={{ padding: '88px 0', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">Add-Ons</div>
            <h2>Pick and choose extras</h2>
            <p>Already have a site, or just want one or two things? These are also available on their own.</p>
          </div>
          <div className="addon-grid">
            {ADDONS.map(a => (
              <div key={a.title} className="addon">
                <div className="t">
                  <h4>{a.title}</h4>
                  <span className="p">{a.price}</span>
                </div>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">FAQ</div>
            <h2>Common questions</h2>
            <p>Still wondering about something? <Link href="/contact" style={{ color: 'var(--sky-deep)', fontWeight: 600 }}>Just ask us directly.</Link></p>
          </div>
          <div className="faq-grid">
            {FAQS.map(f => (
              <div key={f.q} style={{ padding: '24px', border: '1px solid var(--line)', borderRadius: 'var(--radius)', background: 'var(--paper)' }}>
                <h4 style={{ fontSize: '15px', color: 'var(--navy)', marginBottom: '8px' }}>{f.q}</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '88px 0', background: 'linear-gradient(120deg, var(--sunset), var(--sunset-2))', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ color: '#fff' }}>Let&apos;s meet at your business.</h2>
          <p style={{ color: 'rgba(255,255,255,.9)', maxWidth: '520px', margin: '0 auto 26px' }}>
            Free, no-pressure walkthrough — we&apos;ll give you a fixed price before we start anything.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--navy)', boxShadow: '0 8px 20px rgba(18,35,59,.35)' }}>
            Schedule a Free Site Visit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
