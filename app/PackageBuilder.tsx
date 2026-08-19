'use client'
import { useState } from 'react'

type AddOn = {
  id: string
  label: string
  desc: string
  oneTime: number
  monthly: number
}

type Feature = { label: string; yes: boolean }

type Package = {
  id: string
  name: string
  tag: string
  featured?: boolean
  basePrice: number
  baseMonthly: number
  features: Feature[]
  included: string[]
  addons: AddOn[]
}

const PACKAGES: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    tag: 'For a clean, simple online presence',
    basePrice: 600,
    baseMonthly: 45,
    features: [
      { label: 'Up to 5 pages',                  yes: true  },
      { label: 'In-person consultation',          yes: true  },
      { label: 'Mobile-friendly custom design',   yes: true  },
      { label: 'Professional photography',        yes: true  },
      { label: 'Drone footage',                   yes: true  },
      { label: 'Google Business Profile',         yes: true  },
      { label: 'Local SEO',                       yes: true  },
      { label: 'Social media setup',              yes: false },
      { label: 'Review system setup',             yes: false },
      { label: 'Branding & logo design',          yes: false },
      { label: 'Online booking system',           yes: false },
      { label: 'Print materials',                 yes: false },
      { label: 'Monthly SEO reporting',           yes: false },
      { label: 'Priority support',                yes: false },
    ],
    included: [
      'Up to 5 pages',
      'In-person consultation',
      'Mobile-friendly custom design',
      'Professional photography shoot',
      'Drone footage of your location',
      'Google Business Profile setup',
      'Basic local SEO',
    ],
    addons: [
      { id: 'social',   label: 'Social Media Setup (FB/IG)', desc: 'Profiles created and optimized with initial content.',           oneTime: 200, monthly: 0 },
      { id: 'tiktok',   label: 'TikTok Setup',             desc: 'Business profile with initial short-form video content.',          oneTime: 100, monthly: 0 },
      { id: 'branding', label: 'Logo & Branding Kit',      desc: 'Logo, color palette, and fonts as ready-to-use files.',           oneTime: 175, monthly: 0 },
      { id: 'booking',  label: 'Online Booking System',    desc: 'Customers can schedule appointments directly on your site.',       oneTime: 125, monthly: 0 },
      { id: 'print',    label: 'Print Materials',          desc: 'Business cards, flyers, or menu design.',                          oneTime: 75,  monthly: 0 },
      { id: 'reviews',  label: 'Review System Setup',      desc: 'QR codes and a system to collect Google reviews.',                oneTime: 100, monthly: 0 },
      { id: 'seo',      label: 'Monthly SEO Reporting',    desc: 'Plain-English report on traffic and rankings every month.',        oneTime: 0,   monthly: 28 },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tag: 'Our most popular package',
    featured: true,
    basePrice: 1200,
    baseMonthly: 88,
    features: [
      { label: 'Up to 8 pages',                  yes: true  },
      { label: 'In-person consultation',          yes: true  },
      { label: 'Mobile-friendly custom design',   yes: true  },
      { label: 'Professional photography',        yes: true  },
      { label: 'Drone footage',                   yes: true  },
      { label: 'Google Business Profile',         yes: true  },
      { label: 'Full local SEO',                  yes: true  },
      { label: 'Social media setup (FB/IG)',      yes: true  },
      { label: 'Review system setup',             yes: true  },
      { label: 'Branding & logo design',          yes: false },
      { label: 'Online booking system',           yes: false },
      { label: 'Print materials',                 yes: false },
      { label: 'Monthly SEO reporting',           yes: false },
      { label: 'Priority support',                yes: false },
    ],
    included: [
      'Up to 8 pages',
      'In-person consultation & shoot day',
      'Professional photography shoot',
      'Drone footage of your location',
      'Google Business Profile & Maps',
      'Full local SEO',
      'Social media setup (FB/IG)',
      'Review system setup',
    ],
    addons: [
      { id: 'tiktok',   label: 'TikTok Setup',               desc: 'Business profile with initial short-form video content.', oneTime: 100, monthly: 0 },
      { id: 'linkedin', label: 'LinkedIn Setup',             desc: 'Professional LinkedIn business page with initial content.', oneTime: 100, monthly: 0 },
      { id: 'branding', label: 'Logo & Branding Kit',        desc: 'Logo, color palette, and fonts as ready-to-use files.',   oneTime: 175, monthly: 0 },
      { id: 'booking',  label: 'Online Booking System',      desc: 'Customers can schedule appointments directly on your site.', oneTime: 125, monthly: 0 },
      { id: 'print',    label: 'Print Materials',            desc: 'Business cards, flyers, or menu design.',                  oneTime: 75,  monthly: 0 },
      { id: 'ecom',     label: 'E-commerce / Online Orders', desc: 'Sell products or take orders directly from your site.',    oneTime: 300, monthly: 0 },
      { id: 'seo',      label: 'Monthly SEO Reporting',      desc: 'Plain-English report on traffic and rankings every month.', oneTime: 0,  monthly: 28 },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tag: 'For multi-location or growth-focused businesses',
    basePrice: 1900,
    baseMonthly: 139,
    features: [
      { label: 'Unlimited pages',                yes: true },
      { label: 'In-person consultation',         yes: true },
      { label: 'Mobile-friendly custom design',  yes: true },
      { label: 'Professional photography',       yes: true },
      { label: 'Drone footage',                  yes: true },
      { label: 'Google Business Profile',        yes: true },
      { label: 'Full local SEO',                 yes: true },
      { label: 'Social media setup (FB/IG)',     yes: true },
      { label: 'Review system setup',            yes: true },
      { label: 'Branding & logo design',         yes: true },
      { label: 'Online booking system',          yes: true },
      { label: 'Print materials',                yes: true },
      { label: 'Monthly SEO reporting',          yes: true },
      { label: 'Priority support',               yes: true },
    ],
    included: [
      'Unlimited pages',
      'Everything in Growth',
      'Professional photography shoot',
      'Drone footage of your location',
      'Full branding & logo design',
      'Online booking & scheduling setup',
      'Print & promotional materials',
      'Monthly SEO & reputation reporting',
      'Priority support & quarterly refresh',
    ],
    addons: [
      { id: 'drone2',   label: 'Extra Drone Shoot',          desc: 'Additional aerial shoot for a new season or location.',      oneTime: 125, monthly: 0 },
      { id: 'ecom',     label: 'E-commerce / Online Orders', desc: 'Sell products or take orders directly from your site.',      oneTime: 300, monthly: 0 },
      { id: 'content',  label: 'Social Content Pack (10 posts)', desc: '10 professionally designed posts ready to publish.',     oneTime: 150, monthly: 0 },
      { id: 'rush',     label: 'Rush Build (2 weeks)',        desc: 'Move your project to the front of the queue.',              oneTime: 150, monthly: 0 },
      { id: 'extra_loc',label: 'Additional Location Setup',  desc: 'Google Profile, Maps, and SEO setup for a second location.', oneTime: 200, monthly: 0 },
    ],
  },
]

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

function Modal({ pkg, onClose }: { pkg: Package; onClose: () => void }) {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  function toggle(id: string) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const totalOneTime = pkg.basePrice + pkg.addons.filter(a => selected.has(a.id)).reduce((s, a) => s + a.oneTime, 0)
  const totalMonthly = pkg.baseMonthly + pkg.addons.filter(a => selected.has(a.id)).reduce((s, a) => s + a.monthly, 0)

  const summary = [
    pkg.name,
    ...pkg.addons.filter(a => selected.has(a.id)).map(a => a.label),
  ].join(', ')

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      {/* Overlay */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(12,26,44,0.6)', backdropFilter: 'blur(4px)' }} />

      {/* Modal */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: '#fff', borderRadius: '20px',
        width: '100%', maxWidth: '560px', maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 24px 60px rgba(12,26,44,.3)',
      }}>
        {/* Header */}
        <div style={{ padding: '28px 28px 0', position: 'sticky', top: 0, background: '#fff', zIndex: 2, borderBottom: '1px solid var(--line)', paddingBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--sky-deep)', marginBottom: '4px' }}>{pkg.tag}</div>
              <h3 style={{ fontSize: '22px', color: 'var(--navy)', margin: 0 }}>{pkg.name} Package</h3>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: 'var(--ink-soft)', lineHeight: 1, padding: '4px' }}>✕</button>
          </div>
          {/* Live price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Fraunces, serif', fontSize: '36px', fontWeight: 600, color: 'var(--navy)' }}>{fmt(totalOneTime)}</span>
            <span style={{ fontSize: '13px', color: 'var(--ink-soft)' }}>one-time</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--sunset)', marginLeft: '4px' }}>+ {fmt(totalMonthly)}/mo</span>
          </div>
        </div>

        <div style={{ padding: '24px 28px' }}>
          {/* Included */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '12px' }}>Included in {pkg.name}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {pkg.included.map(item => (
                <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--sky)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Add-ons */}
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '12px' }}>Add to your package</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {pkg.addons.map(addon => {
              const checked = selected.has(addon.id)
              return (
                <label key={addon.id} style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  padding: '14px 16px', borderRadius: '12px', cursor: 'pointer',
                  border: `1px solid ${checked ? 'var(--sky)' : 'var(--line)'}`,
                  background: checked ? 'rgba(58,134,255,.05)' : 'var(--paper)',
                  transition: 'border-color .15s, background .15s',
                }}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(addon.id)}
                    style={{ marginTop: '2px', accentColor: 'var(--sky)', width: '16px', height: '16px', flexShrink: 0, cursor: 'pointer' }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                      <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)' }}>{addon.label}</span>
                      <span style={{ fontWeight: 800, fontSize: '13px', color: 'var(--sky-deep)', whiteSpace: 'nowrap' }}>
                        {addon.oneTime > 0 ? `+${fmt(addon.oneTime)}` : ''}{addon.monthly > 0 ? `+${fmt(addon.monthly)}/mo` : ''}
                      </span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: 0 }}>{addon.desc}</p>
                  </div>
                </label>
              )
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{ padding: '20px 28px 28px', borderTop: '1px solid var(--line)', position: 'sticky', bottom: 0, background: '#fff' }}>
          <a
            href={`#contact?package=${encodeURIComponent(summary)}`}
            onClick={onClose}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
          >
            Request This Quote — {fmt(totalOneTime)} + {fmt(totalMonthly)}/mo
          </a>
          <p style={{ fontSize: '12px', color: 'var(--ink-soft)', textAlign: 'center', margin: '10px 0 0' }}>No commitment — we&apos;ll confirm everything at your free site visit.</p>
        </div>
      </div>
    </div>
  )
}

export default function PackageBuilder() {
  const [open, setOpen] = useState<string | null>(null)
  const activePkg = PACKAGES.find(p => p.id === open) ?? null

  return (
    <>
      <div className="plans">
        {PACKAGES.map(pkg => (
          <div key={pkg.id} className={`plan${pkg.featured ? ' featured' : ''}`}>
            <h3>{pkg.name}</h3>
            <div className="tag">{pkg.tag}</div>
            <div className="price-row">
              <span style={{ fontSize: '13px', color: '#9fb3cc', marginBottom: '2px' }}>Starting at</span>
            </div>
            <div className="price-row">
              <span className="price">{fmt(pkg.basePrice)}</span>
              <span className="price-sub">one-time</span>
            </div>
            <div className="price-monthly">+ {fmt(pkg.baseMonthly)}/mo hosting &amp; care</div>
            <ul style={{ flex: 1, listStyle: 'none', margin: '0 0 24px', padding: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {pkg.features.map(f => (
                <li key={f.label} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '13.5px', color: f.yes ? '#dbe3ee' : 'rgba(219,227,238,.35)', opacity: f.yes ? 1 : 0.5 }}>
                  <span style={{ fontWeight: 800, flexShrink: 0, fontSize: '13px', color: f.yes ? 'var(--sky)' : 'rgba(122,138,160,.6)' }}>
                    {f.yes ? '✓' : '✕'}
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpen(pkg.id)}
              className={`btn ${pkg.featured ? 'btn-primary' : pkg.id === 'premium' ? 'btn-outline' : 'btn-navy'}`}
              style={{
                width: '100%',
                ...(pkg.id === 'starter' ? { color: 'var(--navy)', borderColor: 'var(--navy)', background: '#fff' } : {}),
              }}
            >
              Customize Package
            </button>
          </div>
        ))}
      </div>
      <p className="price-note">Prices shown are starting rates — final quote confirmed after your free in-person consultation. Monthly fee covers hosting, security, backups, and support; cancel anytime.</p>

      {activePkg && <Modal pkg={activePkg} onClose={() => setOpen(null)} />}
    </>
  )
}
