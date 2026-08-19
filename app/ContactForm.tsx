'use client'
import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>We&apos;ll be in touch!</h3>
        <p>Thanks for reaching out. We&apos;ll follow up within one business day to schedule your free site visit.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="business">Business Name</label>
        <input id="business" name="business" type="text" placeholder="e.g. Mile High Coffee Co." required />
      </div>
      <div className="field">
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" placeholder="Full name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@business.com" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" placeholder="(720) 000-0000" />
      </div>
      <div className="field">
        <label htmlFor="package">Interested Package</label>
        <select id="package" name="package">
          <option>Not sure yet</option>
          <option>Starter</option>
          <option>Growth</option>
          <option>Premium</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us about your business</label>
        <textarea id="message" name="message" placeholder="What do you do, and what are you hoping for from a new site?" />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        disabled={status === 'sending'}
        style={{ width: '100%', marginTop: '6px', opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? 'Sending…' : 'Request a Free Site Visit'}
      </button>
      {status === 'error' && (
        <p style={{ color: '#cc3300', fontSize: '13px', marginTop: '8px', textAlign: 'center' }}>
          Something went wrong. Please email us directly at hello@denverwebcrew.com
        </p>
      )}
    </form>
  )
}
