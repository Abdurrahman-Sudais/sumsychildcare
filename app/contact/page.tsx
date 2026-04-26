'use client'

import { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageCircle,
  User,
  MessageSquare,
} from 'lucide-react'

const officeHours = [
  { day: 'Monday – Friday', hours: '7:00 AM – 9:00 PM', open: true },
  { day: 'Saturday', hours: '10:00 AM – 8:00 PM', open: true },
  { day: 'Sunday', hours: '11:00 AM – 6:00 PM', open: true },
]

const contactCards = [
  {
    icon: Phone,
    label: 'Call or WhatsApp',
    value: '+44 7448 364115',
    sub: 'Available during opening hours',
    href: 'tel:+447448364115',
    color: 'from-[#4AB8E8] to-[#2D9FD4]',
    bg: 'bg-sky-50',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'Sumsychildcareltd@myyahoo.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:Sumsychildcareltd@myyahoo.com',
    color: 'from-[#6DD5A3] to-[#50C490]',
    bg: 'bg-green-50',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '74 Footcray Road',
    sub: 'Eltham, London SE9 2SU',
    href: 'https://maps.google.com/?q=74+Footcray+Road+Eltham+London+SE9+2SU',
    color: 'from-[#FFD166] to-[#F59E0B]',
    bg: 'bg-yellow-50',
  },
]

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}
interface FormErrors { [key: string]: string }

function validate(data: ContactForm): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Your name is required.'
  if (!data.email.trim()) errors.email = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Please enter a valid email.'
  if (!data.subject.trim()) errors.subject = 'Please select a subject.'
  if (!data.message.trim()) errors.message = 'Message cannot be empty.'
  else if (data.message.trim().length < 10)
    errors.message = 'Please write at least 10 characters.'
  return errors
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...formData, [name]: value })
      setErrors(prev => ({ ...prev, [name]: newErrors[name] || '' }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const newErrors = validate(formData)
    setErrors(prev => ({ ...prev, [name]: newErrors[name] || '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, subject: true, message: true })
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData?.error || 'Failed to submit the form.')
      }

      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or contact us directly.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass = (name: string) =>
    `form-input ${touched[name] && errors[name]
      ? 'border-red-400'
      : touched[name] && !errors[name]
      ? 'border-[#6DD5A3]'
      : ''}`

  const whatsappUrl = `https://wa.me/447448364115?text=${encodeURIComponent("Hi Sumsy Childcare! I'd like to find out more about your childcare services.")}`

  return (
    <>
      {/* HERO */}
      <section className="hero-pattern pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4AB8E8]/10 text-[#2D4A8A] px-4 py-1.5 rounded-full text-sm font-bold mb-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}>
            <MessageCircle className="w-4 h-4 text-[#4AB8E8]" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D4A8A] mb-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}>
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Whether you have questions, want to arrange a visit, or are ready to discuss
            care for your child — we are here and happy to help.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-4">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <a key={card.label} href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="reveal card border border-gray-100 hover:-translate-y-1 flex items-start gap-4 group no-underline">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider mb-0.5"
                      style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {card.label}
                    </p>
                    <p className="font-bold text-[#2D4A8A] text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {card.value}
                    </p>
                    <p className="text-xs text-[#6B7280]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                      {card.sub}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* WhatsApp banner */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="reveal flex items-center justify-between gap-4 bg-[#25D366] hover:bg-[#1FB855] text-white rounded-3xl px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Chat With Us on WhatsApp
                </p>
                <p className="text-white/80 text-sm" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  +44 7448 364115 · Quick replies during opening hours
                </p>
              </div>
            </div>
            <svg className="w-6 h-6 text-white/70 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="bg-[#F8FBFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="reveal-left">
              {isSubmitted ? (
                <div className="card border border-green-100 text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6DD5A3] to-[#50C490] rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#2D4A8A] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Message Sent! 🎉
                  </h3>
                  <p className="text-[#4B5563] mb-6" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    Thanks <strong>{formData.name}</strong>! We have received your message and
                    will get back to you at <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); setTouched({}) }}
                    className="btn-secondary text-sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="card border border-gray-100 space-y-5">
                  <h2 className="text-xl font-extrabold text-[#2D4A8A] pb-4 border-b border-gray-100"
                    style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Send Us a Message
                  </h2>

                  <div>
                    <label className="form-label" htmlFor="name">
                      <User className="w-3.5 h-3.5 inline mr-1 text-[#4AB8E8]" />
                      Your Name *
                    </label>
                    <input id="name" name="name" type="text" className={fieldClass('name')}
                      placeholder="Jane Smith" value={formData.name}
                      onChange={handleChange} onBlur={handleBlur} />
                    {touched.name && errors.name && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                        style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label" htmlFor="email">
                        <Mail className="w-3.5 h-3.5 inline mr-1 text-[#6DD5A3]" />
                        Email Address *
                      </label>
                      <input id="email" name="email" type="email" className={fieldClass('email')}
                        placeholder="you@example.com" value={formData.email}
                        onChange={handleChange} onBlur={handleBlur} />
                      {touched.email && errors.email && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                          style={{ fontFamily: 'Quicksand, sans-serif' }}>
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="phone">
                        <Phone className="w-3.5 h-3.5 inline mr-1 text-[#FFD166]" />
                        Phone <span className="text-[#9CA3AF] font-normal">(optional)</span>
                      </label>
                      <input id="phone" name="phone" type="tel" className="form-input"
                        placeholder="+44 7000 000000" value={formData.phone}
                        onChange={handleChange} onBlur={handleBlur} />
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="subject">Subject *</label>
                    <select id="subject" name="subject" className={fieldClass('subject')}
                      value={formData.subject} onChange={handleChange} onBlur={handleBlur}>
                      <option value="">Select a topic…</option>
                      <option value="after-school">After-School Care Enquiry</option>
                      <option value="before-school">Before-School Care Enquiry</option>
                      <option value="holiday">Holiday Cover Enquiry</option>
                      <option value="weekend">Weekend / Flexible Care</option>
                      <option value="visit">Book a Facility Visit</option>
                      <option value="fees">Fees & Pricing</option>
                      <option value="other">Other</option>
                    </select>
                    {touched.subject && errors.subject && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                        style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="form-label" htmlFor="message">
                      <MessageSquare className="w-3.5 h-3.5 inline mr-1 text-[#B5A4E8]" />
                      Message *
                    </label>
                    <textarea id="message" name="message" rows={5}
                      className={`${fieldClass('message')} resize-none`}
                      placeholder="Tell us about your child and what care you need…"
                      value={formData.message} onChange={handleChange} onBlur={handleBlur} />
                    {touched.message && errors.message && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                        style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-500" style={{ fontFamily: 'Quicksand, sans-serif' }}>{submitError}</p>
                  )}

                  <button type="submit" disabled={isSubmitting}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70">
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                    ) : (
                      <><Send className="w-5 h-5" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map + Hours */}
            <div className="reveal-right space-y-6">
              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-gray-100 h-72 relative bg-[#E8F4FD]">
                <iframe
                  title="Sumsy Childcare Limited Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.610932349257!2d0.05991177609561164!3d51.44693871511901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a96c26c06bad%3A0xafee66d734cc5588!2s74B%20Footscray%20Rd%2C%20London%20SE9%202SU%2C%20UK!5e0!3m2!1sen!2sng!4v1777161223964!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%]"
                />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#4AB8E8]" />
                    <span className="text-xs font-bold text-[#2D4A8A]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      74 Footcray Road, Eltham SE9 2SU
                    </span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="card border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#4AB8E8]/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#4AB8E8]" />
                  </div>
                  <h3 className="font-extrabold text-[#2D4A8A] text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((oh) => (
                    <div key={oh.day} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <span className="text-sm font-semibold text-[#374151]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        {oh.day}
                      </span>
                      <span className="text-sm font-bold px-3 py-0.5 rounded-full bg-green-50 text-green-600"
                        style={{ fontFamily: 'Nunito, sans-serif' }}>
                        {oh.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-[#2D4A8A] to-[#1E3A6E] rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-lg mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Prefer to Talk?
                </h3>
                <p className="text-white/75 text-sm mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  Call or WhatsApp us on <strong>+44 7448 364115</strong> — we are happy to answer any questions.
                </p>
                <a href="https://wa.me/447448364115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1FB855] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200"
                  style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
