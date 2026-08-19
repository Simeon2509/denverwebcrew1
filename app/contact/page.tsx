import type { Metadata } from 'next'
import Nav from '../Nav'
import Footer from '../Footer'
import ContactForm from '../ContactForm'

export const metadata: Metadata = {
  title: 'Contact Denver Web Crew | Free In-Person Site Visit — Denver CO',
  description: 'Contact Denver Web Crew to schedule your free in-person site visit. We serve Denver, Aurora, Lakewood, Littleton, Englewood, Arvada, Westminster, and across the Front Range. Call (303) 949-7775 or email us.',
  alternates: { canonical: 'https://denverwebcrew.com/contact' },
  openGraph: {
    title: 'Contact Denver Web Crew | Free In-Person Site Visit — Denver CO',
    description: 'Schedule your free in-person walkthrough with Denver Web Crew. Serving Denver, Aurora, Lakewood, Littleton, and all Front Range communities. (303) 949-7775.',
    url: 'https://denverwebcrew.com/contact',
  },
}

export default function Contact() {
  return (
    <main>
      <Nav />

      {/* HEADER */}
      <section style={{ padding: '80px 0 56px', background: 'var(--navy)', color: '#fff' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ color: 'var(--sunset-2)' }}>Get In Touch</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: '640px' }}>Tell us about your business</h1>
          <p style={{ color: '#c9d4e3', fontSize: '18px', maxWidth: '52ch', marginBottom: 0 }}>
            We&apos;ll follow up within one business day to schedule your free in-person site visit.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '88px 0' }}>
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Contact Info</div>
            <h2>Reach us directly</h2>
            <p>No forms required — feel free to call or email us directly. We&apos;re real people based in Denver.</p>
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

      <Footer />
    </main>
  )
}
