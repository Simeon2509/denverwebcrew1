import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-2)', color: '#8fa6c4', padding: '48px 0 28px' }}>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/denver-web-crew-lockup-dark.png" alt="Denver Web Crew" style={{ height: '36px', width: 'auto', display: 'block' }} />
          </div>
          <div className="foot-links">
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="foot-bottom" style={{ color: '#8fa6c4' }}>
          <span>&copy; 2026 Denver Web Crew &middot; Denver, Colorado</span>
          <span>Built in person, hosted with care.</span>
        </div>
      </div>
    </footer>
  )
}
