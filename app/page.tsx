import Nav from './Nav'
import ContactForm from './ContactForm'

const SERVICES = [
  { ic: '🏗️', title: 'Custom Website Build',      body: "A fast, mobile-friendly site designed around your business — not a generic template that looks like everyone else's." },
  { ic: '📍', title: 'Google & Apple Maps Setup', body: 'We claim and optimize your Google Business Profile and Apple Maps listing so customers can find and navigate to you.' },
  { ic: '🔍', title: 'Local SEO',                 body: 'On-page optimization so you show up when Denver customers search for what you do, in your neighborhood.' },
  { ic: '📸', title: 'Professional Photography',  body: 'Storefront, interior, and product photos shot on-site by us — including drone footage when you need it.' },
  { ic: '⭐', title: 'Review Generation',          body: 'QR codes and a simple in-store system that makes it easy for happy customers to leave you a Google review.' },
  { ic: '📱', title: 'Social Profile Setup',       body: 'Facebook and Instagram business profiles set up and linked to your new site, with consistent branding.' },
  { ic: '📧', title: 'Professional Email',         body: 'A real @yourbusiness.com email address instead of a personal Gmail — looks sharper on every invoice and card.' },
  { ic: '🎨', title: 'Logo & Basic Branding',      body: "Don't have a logo yet? We'll create simple, clean branding — colors, fonts, and a mark you can use everywhere." },
  { ic: '🛠️', title: 'Hosting & Maintenance',     body: 'We host the site, keep it secure and updated, and fix things fast if something breaks — no monthly guesswork.' },
]

const STEPS = [
  { n: 1, title: 'We meet in person',       body: 'A free walkthrough of your business — we talk goals, look at your space, and figure out exactly what you need.' },
  { n: 2, title: 'We capture your content', body: 'Photos of your storefront, products, and team — shot on-site so your site looks like your actual business.' },
  { n: 3, title: 'We design & build',       body: 'Your site is built around your brand and your photos — you review drafts before anything goes live.' },
  { n: 4, title: 'We get you found',        body: 'Google Business Profile, Apple Maps, and local SEO are set up so customers can actually find you.' },
  { n: 5, title: 'We stick around',         body: 'Hosting, updates, and support continue every month — one local point of contact, not a ticket queue.' },
]

const PORTFOLIO = [
  { type: 'Restaurant', label: 'Local dining & takeout', color: '#2b4a72' },
  { type: 'Auto Shop',  label: 'Repair & detailing',     color: '#1d3a5f' },
  { type: 'Retail',     label: 'Boutique & specialty',   color: '#16283f' },
  { type: 'Services',   label: 'Trades & home services', color: '#0f1e30' },
]

const FAQS = [
  { q: 'How long does it take?',               a: 'Most sites are live within 2–4 weeks of our first meeting. Rush delivery in 2 weeks is available as an add-on.' },
  { q: 'Do I own my website?',                 a: 'Yes. The site is yours. If you ever stop the monthly plan, you keep everything — we\'ll hand over the files.' },
  { q: 'What if I need changes after launch?', a: 'Minor content updates are included in the monthly fee. Bigger changes like new pages are quoted separately at a fair flat rate.' },
  { q: "What's included in the monthly fee?",  a: 'Hosting, SSL certificate, security updates, daily backups, and basic support. No surprise bills.' },
  { q: 'Do I need to provide photos?',         a: 'No. We come to your business and shoot them. That\'s part of what makes us different from agencies that rely on stock photos.' },
  { q: 'Can you work with my existing domain?', a: "Yes — we'll point your domain to the new site or transfer it over, no extra charge." },
]

const ADDONS = [
  { title: 'Extra photo shoot',              price: '$125',    body: 'Seasonal refresh or a new product/service to feature.' },
  { title: 'Logo & branding kit',            price: '$175',    body: 'Logo, color palette, and fonts delivered as ready-to-use files.' },
  { title: 'Professional email setup',       price: '$11/mo',  body: 'Custom @yourbusiness.com inbox, set up and ready to use.' },
  { title: 'Additional page',                price: '$75',     body: "Add a page beyond your package's included page count." },
  { title: 'Monthly SEO reporting',          price: '$28/mo',  body: 'Plain-English report on traffic, rankings, and map views.' },
  { title: 'Rush build (2 weeks)',           price: '$150',    body: 'Move your project to the front of the queue.' },
  { title: 'E-commerce / online ordering',  price: 'from $300', body: 'Sell products or take orders directly from your site.' },
  { title: 'Additional map/listing sync',   price: '$38',     body: 'Bing, Yelp, and other directories kept consistent with your info.' },
]

export default function Home() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section style={{
        background: 'radial-gradient(1100px 500px at 20% -10%, #1d3a5f 0%, var(--navy) 55%, var(--navy-2) 100%)',
        color: '#fff', padding: '96px 0 110px', position: 'relative', overflow: 'hidden',
      }} id="top">
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
              We&apos;re not a call center in another time zone. Denver Web Crew meets Denver business owners face to face — we shoot your storefront, build your site, and get you found on Google and Apple Maps.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
              <a href="#pricing" className="btn btn-primary">See Package Pricing</a>
              <a href="#contact" className="btn btn-outline">Schedule a Free Site Visit</a>
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
            <div style={{
              aspectRatio: '4/3', borderRadius: '14px',
              background: 'linear-gradient(160deg,#2b4a72,#16283f 70%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#8fa6c4', fontSize: '13px', fontWeight: 600,
              border: '1px dashed rgba(255,255,255,.25)', textAlign: 'center', padding: '20px',
            }}>
              📸 Real photos of your business<br />shot on-site by us
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', fontSize: '13px', color: '#a9b9cf' }}>
              <span>Storefront &amp; interior shoot</span>
              <span>Included in Growth &amp; Premium</span>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div style={{ background: 'var(--navy-2)', color: '#9fb3cc', padding: '16px 0' }}>
        <div className="wrap" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '13px', fontWeight: 600, letterSpacing: '.03em', textTransform: 'uppercase' }}>
          <span>In-Person Consultations</span>
          <span>Professional Photography</span>
          <span>Google &amp; Apple Maps Setup</span>
          <span>Local SEO</span>
          <span>Ongoing Hosting &amp; Care</span>
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ padding: '88px 0' }} id="services">
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">What We Do</div>
            <h2>Everything a local business needs to be found — handled in person</h2>
            <p>We build the website, then make sure real customers can actually find it. Every project starts with a face-to-face visit to your business, not a form on the internet.</p>
          </div>
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
      <section style={{ padding: '88px 0', background: 'var(--white)' }} id="process">
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
      <section style={{ padding: '88px 0', background: 'var(--paper-2)' }} id="work">
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">Our Work</div>
            <h2>Sites we&apos;ve built for Denver businesses</h2>
            <p>Every site is custom-built around the business — their photos, their brand, their customers.</p>
          </div>
          <div className="grid-services">
            {PORTFOLIO.map((p, i) => (
              <div key={p.type} style={{
                borderRadius: 'var(--radius)', overflow: 'hidden',
                border: '1px solid var(--line)', background: 'var(--white)',
                boxShadow: 'var(--shadow)',
              }}>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/portfolio-${i + 1}.jpg`} alt={p.type} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

      {/* WHY LOCAL */}
      <section style={{ padding: '88px 0', background: 'linear-gradient(180deg, var(--paper), var(--paper-2))' }}>
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

      {/* ABOUT */}
      <section style={{ padding: '88px 0', background: 'var(--white)' }} id="about">
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
            <p style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '1rem' }}>
              We&apos;re not a big agency with account managers and offshore developers. Every project is handled by us, start to finish. You&apos;ll always know who to call.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75 }}>
              We work exclusively with Denver-area businesses — that means we actually know the neighborhoods, the market, and what local customers are searching for.
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {([['Denver', 'Based & operated'], ['In-person', 'Every project'], ['Fixed price', 'No surprises']] as [string,string][]).map(([num, label]) => (
                <div key={label} style={{ borderLeft: '3px solid var(--sunset)', paddingLeft: '1rem' }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--navy)' }}>{num}</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-soft)', marginTop: '2px' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: '88px 0', background: 'var(--navy)', color: '#fff' }} id="pricing">
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow" style={{ color: 'var(--sunset-2)' }}>Pricing</div>
            <h2 style={{ color: '#fff' }}>Simple, fixed-price packages</h2>
            <p style={{ color: '#aebdd2' }}>One clear price to build your site, plus a low monthly fee that covers hosting, security, and support. No hidden hours, no surprise invoices.</p>
          </div>
          <div className="plans">
            {/* STARTER */}
            <div className="plan">
              <h3>Starter</h3>
              <div className="tag">For a clean, simple online presence</div>
              <div className="price-row"><span className="price">$600</span><span className="price-sub">one-time</span></div>
              <div className="price-monthly">+ $45/mo hosting &amp; care</div>
              <ul>
                <li>Up to 5 pages</li>
                <li>In-person consultation</li>
                <li>Mobile-friendly custom design</li>
                <li>Google &amp; Apple Maps setup</li>
                <li>Basic on-page SEO</li>
                <li className="no">Photography shoot</li>
                <li className="no">Social profile setup</li>
              </ul>
              <a href="#contact" className="btn btn-navy" style={{ color: 'var(--navy)', borderColor: 'var(--navy)', background: '#fff', textDecoration: 'none' }}>Get Started</a>
            </div>
            {/* GROWTH */}
            <div className="plan featured">
              <h3>Growth</h3>
              <div className="tag">Our most popular package</div>
              <div className="price-row"><span className="price">$1,200</span><span className="price-sub">one-time</span></div>
              <div className="price-monthly">+ $88/mo hosting &amp; care</div>
              <ul>
                <li>Up to 8 pages</li>
                <li>In-person consultation &amp; shoot day</li>
                <li>Professional photo &amp; video shoot</li>
                <li>Google &amp; Apple Maps setup</li>
                <li>Full on-page &amp; local SEO</li>
                <li>Social profile setup (FB/IG)</li>
                <li>Review-generation QR system</li>
              </ul>
              <a href="#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Get Started</a>
            </div>
            {/* PREMIUM */}
            <div className="plan">
              <h3>Premium</h3>
              <div className="tag">For multi-location or growth-focused businesses</div>
              <div className="price-row"><span className="price">$1,900</span><span className="price-sub">one-time</span></div>
              <div className="price-monthly">+ $139/mo hosting &amp; care</div>
              <ul>
                <li>Unlimited pages</li>
                <li>Everything in Growth</li>
                <li>Logo &amp; basic branding kit</li>
                <li>Professional business email</li>
                <li>Monthly SEO &amp; traffic reporting</li>
                <li>Priority / same-day support</li>
                <li>Quarterly photo &amp; content refresh</li>
              </ul>
              <a href="#contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>Get Started</a>
            </div>
          </div>
          <p className="price-note">Prices shown are starting rates for a typical single-location Denver business — final quote confirmed after your free in-person consultation. Monthly fee covers hosting, security updates, backups, and basic support; cancel anytime.</p>
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

      {/* TESTIMONIALS */}
      <section style={{ padding: '88px 0' }}>
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">What Clients Say</div>
            <h2>Real results for Denver businesses</h2>
          </div>
          <div className="grid-services">
            {[
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
            ].map(t => (
              <div key={t.who} style={{
                background: 'var(--paper-2)', borderRadius: 'var(--radius)', padding: '32px',
                display: 'flex', flexDirection: 'column', gap: '16px',
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
          <a href="#contact" className="btn btn-primary" style={{ background: 'var(--navy)', boxShadow: '0 8px 20px rgba(18,35,59,.35)' }}>
            Schedule a Free Site Visit
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '88px 0', background: 'var(--white)' }} id="faq">
        <div className="wrap">
          <div className="services-head">
            <div className="eyebrow">FAQ</div>
            <h2>Common questions</h2>
            <p>Still wondering about something? <a href="#contact" style={{ color: 'var(--sky-deep)', fontWeight: 600 }}>Just ask us directly.</a></p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="faq-grid">
            {FAQS.map(f => (
              <div key={f.q} style={{ padding: '24px', border: '1px solid var(--line)', borderRadius: 'var(--radius)', background: 'var(--paper)' }}>
                <h4 style={{ fontSize: '15px', color: 'var(--navy)', marginBottom: '8px' }}>{f.q}</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '88px 0' }} id="contact">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Get In Touch</div>
            <h2>Tell us about your business</h2>
            <p>We&apos;ll follow up to schedule a free in-person visit — usually within one business day.</p>
            <div className="info-item">
              <div className="ic">📞</div>
              <div><h4>Phone</h4><p>(303) 949-7775</p></div>
            </div>
            <div className="info-item">
              <div className="ic">✉️</div>
              <div><h4>Email</h4><p>denverwebcrew@gmail.com</p></div>
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

      {/* FOOTER */}
      <footer style={{ background: 'var(--navy-2)', color: '#8fa6c4', padding: '48px 0 28px' }}>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/denver-web-crew-lockup-dark.png" alt="Denver Web Crew" style={{ height: '36px', width: 'auto', display: 'block' }} />
            </div>
            <div className="foot-links">
              <a href="#services">Services</a>
              <a href="#process">How It Works</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="foot-bottom" style={{ color: '#8fa6c4' }}>
            <span>&copy; 2026 Denver Web Crew &middot; Denver, Colorado</span>
            <span>Built in person, hosted with care.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
