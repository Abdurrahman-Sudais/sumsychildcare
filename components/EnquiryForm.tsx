'use client'

import { useState, FormEvent } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { CheckmarkCircle02Icon, Alert01Icon } from '@hugeicons/core-free-icons'
import Magnetic from '@/components/Magnetic'

interface EnquiryFormProps {
  secondField: {
    name: string
    label: string
    placeholder: string
    type?: string
  }
  submitLabel: string
  className?: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function EnquiryForm({ secondField, submitLabel, className = '' }: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const result = await res.json().catch(() => ({}))
        throw new Error(result.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center text-center py-12 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-sc-terracotta/10 flex items-center justify-center mb-6">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} className="w-8 h-8 text-sc-terracotta" />
        </div>
        <h3 className="text-2xl font-bold text-sc-navy mb-3">Thank you!</h3>
        <p className="text-sc-steel leading-relaxed mb-8 max-w-sm">
          We&apos;ve received your enquiry and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sc-navy font-bold underline decoration-2 underline-offset-4 hover:decoration-sc-terracotta transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`} noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-sc-steel uppercase tracking-wider">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={status === 'submitting'}
            className="w-full px-6 py-4 rounded-2xl bg-sc-cream border border-sc-navy/10 focus:outline-none focus:border-sc-terracotta transition-colors disabled:opacity-60"
            placeholder="Full Name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={secondField.name} className="text-sm font-bold text-sc-steel uppercase tracking-wider">
            {secondField.label}
          </label>
          <input
            id={secondField.name}
            name={secondField.name}
            type={secondField.type || 'text'}
            disabled={status === 'submitting'}
            className="w-full px-6 py-4 rounded-2xl bg-sc-cream border border-sc-navy/10 focus:outline-none focus:border-sc-terracotta transition-colors disabled:opacity-60"
            placeholder={secondField.placeholder}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-bold text-sc-steel uppercase tracking-wider">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === 'submitting'}
          className="w-full px-6 py-4 rounded-2xl bg-sc-cream border border-sc-navy/10 focus:outline-none focus:border-sc-terracotta transition-colors disabled:opacity-60"
          placeholder="you@email.com"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-sc-steel uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={status === 'submitting'}
          className="w-full px-6 py-4 rounded-2xl bg-sc-cream border border-sc-navy/10 focus:outline-none focus:border-sc-terracotta transition-colors disabled:opacity-60"
          placeholder="How can we help?"
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-bold">
          <HugeiconsIcon icon={Alert01Icon} className="w-5 h-5 flex-shrink-0" />
          {errorMessage}
        </div>
      )}

      <Magnetic>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full btn-primary py-5 text-xl justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === 'submitting' ? 'Sending...' : submitLabel}
        </button>
      </Magnetic>
    </form>
  )
}
