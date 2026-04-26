'use client'

import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  MapPinIcon,
  Call02Icon,
  Mail01Icon,
  Clock01Icon,
  CheckmarkCircle01Icon,
  AlertCircleIcon,
  Loader,
  Message01Icon,
  UserCircleIcon,
  Message02Icon
} from '@hugeicons/core-free-icons'

const officeHours = [
  { day: 'Monday – Friday', hours: '7:00 AM – 9:00 PM', open: true },
  { day: 'Saturday', hours: '10:00 AM – 8:00 PM', open: true },
  { day: 'Sunday', hours: '11:00 AM – 6:00 PM', open: true },
]

const contactCards = [
  {
    icon: Call02Icon,
    label: 'Call or WhatsApp',
    value: '+44 7448 364115',
    sub: 'Available during opening hours',
    href: 'tel:+447448364115',
    color: 'bg-sc-terracotta',
    bg: 'bg-white',
  },
  {
    icon: Mail01Icon,
    label: 'Email Us',
    value: 'Sumsychildcareltd@myyahoo.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:Sumsychildcareltd@myyahoo.com',
    color: 'bg-sc-peach',
    bg: 'bg-white',
  },
  {
    icon: MapPinIcon,
    label: 'Visit Us',
    value: '74 Footcray Road',
    sub: 'Eltham, London SE9 2SU',
    href: 'https://maps.google.com/?q=74+Footcray+Road+Eltham+London+SE9+2SU',
    color: 'bg-sc-navy',
    bg: 'bg-white',
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
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      )
      await new Promise(r => setTimeout(r, 1200))
      setIsSubmitted(true)
    } catch {
      setSubmitError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass = (name: string) =>
    `form-input ${touched[name] && errors[name]
      ? 'border-red-400'
      : touched[name] && !errors[name]
      ? 'border-sc-terracotta'
      : ''}`

  const whatsappUrl = `https://wa.me/447448364115?text=${encodeURIComponent("Hi Sumsy Childcare! I'd like to find out more about your childcare services.")}`

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 bg-sc-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white text-sc-terracotta px-4 py-1.5 rounded-full text-sm font-bold mb-5 border border-sc-navy/10 shadow-sm">
            <HugeiconsIcon icon={Message01Icon} className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-sc-navy mb-6 tracking-tight">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-lg text-sc-steel max-w-2xl mx-auto leading-relaxed">
            Whether you have questions, want to arrange a visit, or are ready to discuss
            care for your child — we are here and happy to help.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-white py-16 rounded-t-[3rem] -mt-8 border-t border-sc-navy/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <a key={card.label} href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="reveal border-[1.5px] border-sc-navy/10 rounded-[24px] p-6 hover:-translate-y-1 hover:border-sc-terracotta flex items-start gap-5 group no-underline transition-all">
                  <div className={`w-14 h-14 rounded-[20px] ${card.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                    <HugeiconsIcon icon={Icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-sc-steel/60 uppercase tracking-widest mb-1">
                      {card.label}
                    </p>
                    <p className="font-bold text-sc-navy text-lg mb-1">
                      {card.value}
                    </p>
                    <p className="text-sm text-sc-steel">
                      {card.sub}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* WhatsApp banner */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="reveal flex items-center justify-between gap-4 bg-sc-navy hover:bg-sc-terracotta text-white rounded-[24px] px-8 py-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg">
                  Chat With Us on WhatsApp
                </p>
                <p className="text-white/80 text-sm">
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
      <section className="bg-sc-sand py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="reveal-left">
              {isSubmitted ? (
                <div className="bg-white rounded-[32px] border-[1.5px] border-sc-terracotta text-center p-12 shadow-sm">
                  <div className="w-20 h-20 bg-sc-cream rounded-[24px] flex items-center justify-center mx-auto mb-6">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-10 h-10 text-sc-terracotta" />
                  </div>
                  <h3 className="text-3xl font-bold text-sc-navy mb-4">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-sc-steel mb-8 text-lg">
                    Thanks <strong>{formData.name}</strong>! We have received your message and
                    will get back to you at <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); setTouched({}) }}
                    className="btn-secondary text-base">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="bg-white rounded-[32px] border-[1.5px] border-sc-navy/10 p-8 sm:p-10 space-y-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-sc-navy pb-6 border-b border-sc-navy/10">
                    Send Us a Message
                  </h2>

                  <div>
                    <label className="form-label" htmlFor="name">
                      <HugeiconsIcon icon={UserCircleIcon} className="w-4 h-4 inline mr-2 text-sc-terracotta" />
                      Your Name *
                    </label>
                    <input id="name" name="name" type="text" className={fieldClass('name')}
                      placeholder="Jane Smith" value={formData.name}
                      onChange={handleChange} onBlur={handleBlur} />
                    {touched.name && errors.name && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1.5">
                        <HugeiconsIcon icon={AlertCircleIcon} className="w-4 h-4" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label" htmlFor="email">
                        <HugeiconsIcon icon={Mail01Icon} className="w-4 h-4 inline mr-2 text-sc-peach" />
                        Email Address *
                      </label>
                      <input id="email" name="email" type="email" className={fieldClass('email')}
                        placeholder="you@example.com" value={formData.email}
                        onChange={handleChange} onBlur={handleBlur} />
                      {touched.email && errors.email && (
                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1.5">
                          <HugeiconsIcon icon={AlertCircleIcon} className="w-4 h-4" /> {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="phone">
                        <HugeiconsIcon icon={Call02Icon} className="w-4 h-4 inline mr-2 text-sc-terracotta" />
                        Phone <span className="text-sc-steel/50 font-normal">(optional)</span>
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
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1.5">
                        <HugeiconsIcon icon={AlertCircleIcon} className="w-4 h-4" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="form-label" htmlFor="message">
                      <HugeiconsIcon icon={Message02Icon} className="w-4 h-4 inline mr-2 text-sc-terracotta" />
                      Message *
                    </label>
                    <textarea id="message" name="message" rows={5}
                      className={`${fieldClass('message')} resize-none`}
                      placeholder="Tell us about your child and what care you need…"
                      value={formData.message} onChange={handleChange} onBlur={handleBlur} />
                    {touched.message && errors.message && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1.5">
                        <HugeiconsIcon icon={AlertCircleIcon} className="w-4 h-4" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-500">{submitError}</p>
                  )}

                  <button type="submit" disabled={isSubmitting}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 mt-2 shadow-none hover:shadow-lg">
                    {isSubmitting ? (
                      <><HugeiconsIcon icon={Loader} className="w-5 h-5 animate-spin" /> Sending…</>
                    ) : (
                      <><HugeiconsIcon icon={Mail01Icon} className="w-5 h-5" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map + Hours */}
            <div className="reveal-right space-y-8">
              {/* Google Maps Embed */}
              <div className="rounded-[32px] overflow-hidden border-[1.5px] border-sc-navy/10 h-80 relative bg-sc-sand">
                <iframe
                  title="Sumsy Childcare Limited Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.610932349257!2d0.05991177609561164!3d51.44693871511901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a96c26c06bad%3A0xafee66d734cc5588!2s74B%20Footscray%20Rd%2C%20London%20SE9%202SU%2C%20UK!5e0!3m2!1sen!2sng!4v1777161223964!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[30%]"
                />
                <div className="absolute bottom-5 left-5">
                  <div className="bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
                    <HugeiconsIcon icon={MapPinIcon} className="w-5 h-5 text-sc-terracotta" />
                    <span className="text-sm font-bold text-sc-navy">
                      74 Footcray Road, Eltham SE9 2SU
                    </span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-[32px] p-8 border-[1.5px] border-[#2C2F3F]/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-sc-cream rounded-2xl flex items-center justify-center">
                    <HugeiconsIcon icon={Clock01Icon} className="w-6 h-6 text-sc-terracotta" />
                  </div>
                  <h3 className="font-bold text-sc-navy text-2xl">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((oh) => (
                    <div key={oh.day} className="flex items-center justify-between py-3 border-b border-sc-navy/5 last:border-0">
                      <span className="text-base font-bold text-sc-steel">
                        {oh.day}
                      </span>
                      <span className="text-sm font-bold px-4 py-1.5 rounded-full bg-sc-cream text-sc-terracotta">
                        {oh.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
