import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import ContactForm from './ContactForm'

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

      {/* SERVICES PREVIEW */}
      <section style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">What We Do</div>
            <h2>Everything a local business needs to grow — handled in person</h2>
            <p>From your website and photos to Google, social media, and branding — we handle it all.</p>
          </div>
          <div className="grid-services">
            {[
              { ic: '💻', title: 'Website Development',           body: "A professional, mobile-friendly website designed around your business — not a generic template." },
              { ic: '📸', title: 'Photography & Drone Content',   body: 'Professional photos and aerial drone footage of your storefront, interior, products, and team.' },
              { ic: '📍', title: 'Google Business Profile & Maps', body: 'We set up and optimize your Google Business Profile so customers can find you easily on Maps.' },
              { ic: '🔍', title: 'Local SEO',                     body: 'Improve your visibility when people search Google for your services in the Denver area.' },
              { ic: '📱', title: 'Social Media Setup',            body: 'Instagram, Facebook, and LinkedIn set up and optimized with professional branded content.' },
              { ic: '🎨', title: 'Branding & Graphic Design',     body: 'Logo, colors, fonts, and brand guidelines — a consistent look across everything you put out.' },
            ].map(s => (
              <div key={s.title} className="card">
                <div className="ic">{s.ic}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/services" className="btn btn-navy">View All 9 Services</Link>
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section style={{ padding: '88px 0', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">How It Works</div>
            <h2>Five steps, start to finish</h2>
            <p>No outsourced strangers, no back-and-forth over email for weeks. We show up, we build it, we keep it running.</p>
          </div>
          <div className="steps">
            {[
              { n: 1, title: 'We meet in person',        body: 'A free walkthrough of your business — we talk goals, look at your space, and figure out exactly what you need.' },
              { n: 2, title: 'We capture your content',  body: 'Photos of your storefront, products, and team — shot on-site so your site looks like your actual business.' },
              { n: 3, title: 'We design & build',        body: 'Your site is built around your brand and your photos — you review drafts before anything goes live.' },
              { n: 4, title: 'We get you found',         body: 'Google Business Profile, Apple Maps, and local SEO are set up so customers can actually find you.' },
              { n: 5, title: 'We stick around',          body: 'Hosting, updates, and support continue every month — one local point of contact, not a ticket queue.' },
            ].map(s => (
              <div key={s.n} className="step">
                <div className="num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/services" className="btn btn-navy">See Our Full Services</Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section style={{ padding: '88px 0', background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">Our Work</div>
            <h2>Sites we&apos;ve built for Denver businesses</h2>
            <p>Every site is custom-built around the business — their photos, their brand, their customers.</p>
          </div>
          <div className="grid-services">
            {[
              { type: 'Restaurant',    label: 'Local dining & takeout', img: '/portfolio-1.jpg' },
              { type: 'Auto Shop',     label: 'Repair & detailing',     img: '/portfolio-2.jpg' },
              { type: 'Retail',        label: 'Boutique & specialty',   img: '/portfolio-3.jpg' },
              { type: 'Home Services', label: 'Trades & home services', img: '/portfolio-4.jpg' },
            ].map(p => (
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

      {/* ABOUT PREVIEW */}
      <section style={{ padding: '88px 0', background: 'var(--white)' }}>
        <div className="wrap why-grid">
          <div style={{ aspectRatio: '4/3', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/kling_20260819_IMAGE_Realistic__3156_0.png" alt="Denver Web Crew workspace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2>A small team. Real people. Based in Denver.</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '1rem' }}>
              We started Denver Web Crew because we kept seeing great local businesses lose customers to competitors who just had a better website. A good-looking, fast site with real photos shouldn&apos;t be out of reach for a small business.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '2rem' }}>
              Every project is handled by us, start to finish. You&apos;ll always know who to call.
            </p>
            <Link href="/about" className="btn btn-navy">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section style={{ padding: '88px 0', background: 'var(--navy)' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow" style={{ color: 'var(--sunset-2)' }}>Pricing</div>
            <h2 style={{ color: '#fff' }}>Simple, fixed-price packages</h2>
            <p style={{ color: '#aebdd2' }}>One clear price to build your site, plus a low monthly fee. No hidden hours, no surprise invoices.</p>
          </div>
          <div className="plans">
            {[
              { name: 'Starter',  tag: 'For a clean, simple online presence',            price: '$600',   mo: '$45',  features: ['Up to 5 pages', 'Photography & drone', 'Branding & logo', 'Basic local SEO'] },
              { name: 'Growth',   tag: 'Our most popular package',  price: '$1,000', mo: '$88',  features: ['Up to 8 pages', 'Photography & drone', 'Google Business Profile', 'Social media setup', 'Review system'], featured: true },
              { name: 'Premium',  tag: 'For growth-focused businesses',                   price: '$1,900', mo: '$139', features: ['Unlimited pages', 'Everything in Growth', 'Online booking', 'Print materials', 'Priority support'] },
            ].map(p => (
              <div key={p.name} className={`plan${p.featured ? ' featured' : ''}`}>
                <h3>{p.name}</h3>
                <div className="tag">{p.tag}</div>
                <div style={{ fontSize: '13px', color: '#9fb3cc', marginBottom: '4px' }}>Starting at</div>
                <div className="price-row"><span className="price">{p.price}</span><span className="price-sub">one-time</span></div>
                <div className="price-monthly">+ {p.mo}/mo hosting &amp; care</div>
                <ul style={{ flex: 1, listStyle: 'none', margin: '0 0 24px', padding: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: '#dbe3ee' }}>
                      <span style={{ color: 'var(--sky)', fontWeight: 800, flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className={`btn ${p.featured ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', justifyContent: 'center', ...(p.name === 'Starter' ? { color: 'var(--navy)', borderColor: 'var(--navy)', background: '#fff' } : {}) }}>
                  Customize Package
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/pricing" style={{ color: '#9fb3cc', fontSize: '14px', fontWeight: 600 }}>View full pricing, add-ons &amp; FAQ →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '88px 0' }}>
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

      {/* FAQ PREVIEW */}
      <section style={{ padding: '88px 0', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">FAQ</div>
            <h2>Common questions</h2>
          </div>
          <div className="faq-grid">
            {[
              { q: 'How long does it take?',               a: 'Most sites are live within 2–4 weeks of our first meeting. Rush delivery in 2 weeks is available as an add-on.' },
              { q: 'Do I own my website?',                 a: "Yes. The site is yours. If you ever stop the monthly plan, you keep everything — we'll hand over the files." },
              { q: "What's included in the monthly fee?",  a: 'Hosting, SSL certificate, security updates, daily backups, and basic support. No surprise bills.' },
              { q: 'Do I need to provide photos?',         a: "No. We come to your business and shoot them. That's part of what makes us different." },
            ].map(f => (
              <div key={f.q} style={{ padding: '24px', border: '1px solid var(--line)', borderRadius: 'var(--radius)', background: 'var(--paper)' }}>
                <h4 style={{ fontSize: '15px', color: 'var(--navy)', marginBottom: '8px' }}>{f.q}</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/pricing#faq" className="btn btn-navy">See All FAQs</Link>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section style={{ padding: '88px 0', background: 'var(--paper-2)' }}>
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Get In Touch</div>
            <h2>Tell us about your business</h2>
            <p>We&apos;ll follow up to schedule a free in-person visit — usually within one business day.</p>
            <div className="info-item">
              <div className="ic">📞</div>
              <div><h4>Phone</h4><p><a href="tel:+13039497775" style={{ color: 'var(--sky-deep)', fontWeight: 600 }}>(303) 949-7775</a></p></div>
            </div>
            <div className="info-item">
              <div className="ic">✉️</div>
              <div><h4>Email</h4><p><a href="mailto:denverwebcrew@gmail.com" style={{ color: 'var(--sky-deep)', fontWeight: 600 }}>denverwebcrew@gmail.com</a></p></div>
            </div>
            <div className="info-item">
              <div className="ic">📍</div>
              <div><h4>Service Area</h4><p>Denver &amp; the Front Range — in-person visits across the metro</p></div>
            </div>
            <div className="info-item">
              <div className="ic">🕒</div>
              <div><h4>Hours</h4><p>Mon–Fri, 8am–6pm · Weekend visits by request</p></div>
            </div>
          </div>
          <ContactForm />
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
