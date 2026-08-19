import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'

const TESTIMONIALS = [
  {
    quote: "I'd been meaning to update my website for two years. Denver Web Crew came to my shop, took photos, and had the whole thing done in under a month. I'm already getting calls from people who found me on Google.",
    who: 'Jake R.', biz: 'Highlands Auto Detail · Denver, CO',
  },
  {
    quote: "We had a website but it looked like it was from 2009. Within three weeks we had something we're actually proud to hand out on a business card. The Google Maps setup alone was worth it — we show up now.",
    who: 'Sandra M.', biz: 'Petal & Stem Floral · Denver, CO',
  },
  {
    quote: "What sold me was that they actually came to the restaurant. They took photos of the food, the space, everything. Our online orders went up noticeably in the first month.",
    who: 'Carlos V.', biz: 'El Rancho Kitchen · Aurora, CO',
  },
]

export default function Home() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section style={{
        background: 'radial-gradient(1100px 500px at 20% -10%, #1d3a5f 0%, var(--navy) 55%, var(--navy-2) 100%)',
        color: '#fff', padding: '96px 0 110px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: '-120px', top: '-80px', width: '480px', height: '480px',
          borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(255,179,71,.35), transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="wrap hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '56px', alignItems: 'center', position: 'relative' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--sunset-2)' }}>Denver, Colorado</div>
            <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 4.6vw, 54px)', marginBottom: '.4em' }}>
              Websites built <em style={{ fontStyle: 'italic', color: 'var(--sunset-2)' }}>in person</em>, by people who actually show up.
            </h1>
            <p style={{ color: '#c9d4e3', fontSize: '18px', maxWidth: '52ch' }}>
              We&apos;re not a call center in another time zone. Denver Web Crew meets Denver business owners face to face — we handle your website, photography, drone footage, Google presence, social media, branding, and more.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
              <Link href="/pricing" className="btn btn-primary">See Package Pricing</Link>
              <Link href="/contact" className="btn btn-outline">Schedule a Free Site Visit</Link>
            </div>
            <div style={{ display: 'flex', gap: '22px', marginTop: '44px', flexWrap: 'wrap' }}>
              {[
                { color: 'var(--sky)',      text: 'Locally owned & operated' },
                { color: 'var(--sunset)',   text: 'No long-term contracts' },
                { color: 'var(--sunset-2)', text: 'Fixed prices, no surprises' },
              ].map(b => (
                <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#c9d4e3', fontWeight: 600 }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: b.color, display: 'inline-block', flexShrink: 0 }} />
                  {b.text}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card" style={{
            background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)',
            borderRadius: '20px', padding: '28px', backdropFilter: 'blur(6px)',
          }}>
            <div style={{ aspectRatio: '4/3', borderRadius: '14px', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero-image2.jpg" alt="Denver business website example" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div style={{ background: 'var(--navy-2)', color: '#9fb3cc', padding: '16px 0' }}>
        <div className="wrap" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '13px', fontWeight: 600, letterSpacing: '.03em', textTransform: 'uppercase' }}>
          <span>In-Person Consultations</span>
          <span>Photography &amp; Drone</span>
          <span>Google &amp; Apple Maps</span>
          <span>Local SEO</span>
          <span>Social Media Setup</span>
          <span>Branding &amp; Design</span>
          <span>Ongoing Care</span>
        </div>
      </div>

      {/* SERVICES TEASER */}
      <section style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">What We Do</div>
            <h2>Everything a local business needs to grow — handled in person</h2>
            <p>From your website and photos to Google, social media, and branding — we handle it all.</p>
          </div>
          <div className="grid-services" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { ic: '💻', title: 'Website Development',           body: "A professional, mobile-friendly website designed around your business — not a generic template." },
              { ic: '📸', title: 'Photography & Drone Content',   body: 'Professional photos and aerial drone footage of your storefront, interior, products, and team.' },
              { ic: '📍', title: 'Google Business Profile & Maps', body: 'We set up and optimize your Google Business Profile so customers can find you easily on Maps.' },
            ].map(s => (
              <div key={s.title} className="card">
                <div className="ic">{s.ic}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/services" className="btn btn-navy">View All Services</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '88px 0', background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">What Clients Say</div>
            <h2>Real results for Denver businesses</h2>
          </div>
          <div className="grid-services">
            {TESTIMONIALS.map(t => (
              <div key={t.who} style={{
                background: 'var(--white)', borderRadius: 'var(--radius)', padding: '32px',
                display: 'flex', flexDirection: 'column', gap: '16px',
                border: '1px solid var(--line)', boxShadow: 'var(--shadow)',
              }}>
                <div style={{ color: 'var(--sunset)', fontSize: '20px', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '16px', lineHeight: 1.7, color: 'var(--navy)', margin: 0 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)' }}>{t.who}</div>
                  <div style={{ fontSize: '13px', color: 'var(--ink-soft)' }}>{t.biz}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '88px 0', background: 'linear-gradient(120deg, var(--sunset), var(--sunset-2))', color: '#fff', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ color: '#fff' }}>Let&apos;s meet at your business.</h2>
          <p style={{ color: 'rgba(255,255,255,.9)', maxWidth: '520px', margin: '0 auto 26px' }}>
            Free, no-pressure walkthrough — we&apos;ll look at your space, talk about goals, and give you a fixed price before we start anything.
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
