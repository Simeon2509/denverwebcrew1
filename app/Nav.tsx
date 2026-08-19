'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const LINKS: [string, string][] = [
  ['Services',    '#services'],
  ['How It Works','#process'],
  ['Pricing',     '#pricing'],
  ['Contact',     '#contact'],
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function close() { setMenuOpen(false) }

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(247,245,240,.88)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--line)',
      }}>
        <nav className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', paddingBottom: '16px' }}>
          <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontWeight: 600, fontSize: '19px', color: 'var(--navy)', textDecoration: 'none' }}>
            <span className="logo-mark" />
            Denver Web Crew
          </Link>

          {/* Desktop nav links */}
          <div className="nav-desktop-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {LINKS.map(([label, href]) => (
              <a key={label} href={href} style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--sky-deep)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
              >{label}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a href="tel:+13039497775" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>(303) 949-7775</a>
            <a href="#contact" className="btn btn-navy">Book a Visit</a>
          </div>

          {/* Hamburger */}
          <button
            className={`dwc-burger${menuOpen ? ' dwc-burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div onClick={close} style={{
          position: 'fixed', inset: 0, zIndex: 210,
          background: 'rgba(18,35,59,0.4)', backdropFilter: 'blur(2px)',
        }} />
      )}

      {/* Drawer */}
      <div className={`dwc-drawer${menuOpen ? ' dwc-drawer--open' : ''}`}>
        {LINKS.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={close}
            style={{
              display: 'block',
              fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
              color: 'var(--navy)',
              padding: '0.9rem 0',
              borderBottom: '1px solid var(--line)',
              textDecoration: 'none',
            }}
          >
            {label}
          </a>
        ))}
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a href="tel:+13039497775" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>(303) 949-7775</a>
          <a href="#contact" onClick={close} className="btn btn-navy" style={{ justifyContent: 'center' }}>Book a Visit</a>
        </div>
      </div>
    </>
  )
}
