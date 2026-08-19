import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../Nav'
import Footer from '../Footer'

export const metadata: Metadata = {
  title: 'About — Denver Web Crew',
  description: 'Denver Web Crew is a small local team that builds websites for Denver businesses in person. Real people, real visits, real results.',
}

export default function About() {
  return (
    <main>
      <Nav />

      {/* HEADER */}
      <section style={{ padding: '80px 0 56px', background: 'var(--navy)', color: '#fff' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ color: 'var(--sunset-2)' }}>Who We Are</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: '640px' }}>A small team. Real people. Based in Denver.</h1>
          <p style={{ color: '#c9d4e3', fontSize: '18px', maxWidth: '52ch', marginBottom: 0 }}>
            We started Denver Web Crew because great local businesses deserve a great online presence.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '88px 0' }}>
        <div className="wrap why-grid">
          <div style={{ aspectRatio: '4/3', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/kling_20260819_IMAGE_Realistic__3156_0.png" alt="Denver Web Crew workspace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <div className="eyebrow">Our Story</div>
            <h2>Built for Denver, by Denver</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '1rem' }}>
              We started Denver Web Crew because we kept seeing great local businesses lose customers to competitors who just had a better website. A good-looking, fast site with real photos shouldn&apos;t be out of reach for a small business.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '1rem' }}>
              We&apos;re not a big agency with account managers and offshore developers. Every project is handled by us, start to finish. You&apos;ll always know who to call.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75 }}>
              We work exclusively with Denver-area businesses — that means we actually know the neighborhoods, the market, and what local customers are searching for.
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {([['Denver', 'Based & operated'], ['In-person', 'Every project'], ['Fixed price', 'No surprises']] as [string, string][]).map(([num, label]) => (
                <div key={label} style={{ borderLeft: '3px solid var(--sunset)', paddingLeft: '1rem' }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--navy)' }}>{num}</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-soft)', marginTop: '2px' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY LOCAL */}
      <section style={{ padding: '88px 0', background: 'linear-gradient(180deg, var(--paper-2), var(--paper))' }}>
        <div className="wrap why-grid">
          <div>
            <div className="eyebrow">Why Local Matters</div>
            <h2>You can meet us. That&apos;s the whole point.</h2>
            <p>Most web design &ldquo;agencies&rdquo; are a name on a website with nobody local behind it. Denver Web Crew is different — we&apos;re based in Denver, and part of every package is sitting down with you in person.</p>
            <ul className="why-list">
              {[
                'We visit your business and shoot photos ourselves — no stock photos, no generic imagery.',
                'You can call and talk to the person who actually built your site.',
                'We know the Denver market — what local customers search for and where they look.',
                'Something breaks? We can be at your business, not just on the phone.',
              ].map(item => (
                <li key={item}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="why-visual">
            <span style={{ fontSize: '18px' }}>📍 Serving Denver &amp; the Front Range</span>
            <span style={{ fontWeight: 500, fontSize: '13px', opacity: .85 }}>In-person consultations across the metro area</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '88px 0', background: 'linear-gradient(120deg, var(--sunset), var(--sunset-2))', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ color: '#fff' }}>Let&apos;s meet at your business.</h2>
          <p style={{ color: 'rgba(255,255,255,.9)', maxWidth: '520px', margin: '0 auto 26px' }}>
            Free, no-pressure walkthrough — we&apos;ll look at your space and give you a fixed price before we start anything.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--navy)', boxShadow: '0 8px 20px rgba(18,35,59,.35)' }}>Book a Free Visit</Link>
            <Link href="/pricing" className="btn btn-outline">See Pricing</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
