'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Sun01Icon, Call02Icon, Mail01Icon, MapPinIcon, CheckmarkCircle01Icon,
  Shield01Icon, Award01Icon, UserGroupIcon, Clock01Icon, ArrowRight01Icon,
  QuoteUpIcon, ChevronDown, FavouriteIcon, SparklesIcon
} from '@hugeicons/core-free-icons';
import logo from "@/app/Assets/SunsyChildCare.png"

const faqs = [
  { q: 'What are your opening hours?', a: 'Monday–Friday 7:00 AM–9:00 PM, Saturday 10:00 AM–8:00 PM, Sunday 11:00 AM–6:00 PM. We are open 7 days a week including most school holidays.' },
  { q: 'What ages do you care for?', a: 'We provide care for children aged 5 to 16 years old. This covers before-school, after-school, holiday, and flexible weekend sessions.' },
  { q: 'Are you Ofsted registered?', a: 'Yes — Sumsy Childcare Limited is a fully Ofsted-registered childcare provider. Our registration details are available on request.' },
  { q: 'Is the carer DBS checked?', a: 'Absolutely. The owner and sole carer is fully DBS (Disclosure and Barring Service) checked and verified, with copies available to view.' },
  { q: 'What is your health and illness policy?', a: 'Children who are unwell should not attend. We follow all NHS guidance on exclusion periods. Parents are notified immediately of any health concerns during the session.' },
  { q: 'How do I book or find out about fees?', a: 'Simply fill in the form on this page or call/WhatsApp us on +44 7448 364115. We will respond within a few hours to discuss availability and pricing for your specific needs.' },
]

const benefits = [
  { icon: Shield01Icon, title: 'Fully DBS Checked', desc: 'Background-verified sole carer you can trust completely.' },
  { icon: Award01Icon, title: 'Ofsted Registered', desc: 'Regulated, inspected, and meeting national standards.' },
  { icon: UserGroupIcon, title: 'Ages 5–16', desc: 'Specialist care for school-age children across all year groups.' },
  { icon: Clock01Icon, title: '7 Days a Week', desc: 'Flexible hours that work around your real family life.' },
  { icon: MapPinIcon, title: 'Eltham, SE9', desc: '74 Footcray Road — safe, accessible local facility.' },
  { icon: SparklesIcon, title: 'Personal Care', desc: 'Same carer every time. No rotating staff. No strangers.' },
]

const testimonials = [
  { name: 'Sarah M.', role: 'Parent, Eltham', avatar: 'SM', quote: 'Sumsy Childcare has been a lifesaver for our family. My children are always happy and well looked-after. It feels personal — not like a big institution.' },
  { name: 'James & Priya P.', role: 'Parents of Asha, age 8', avatar: 'JP', quote: 'The personal touch made all the difference. Asha settled in immediately and genuinely looks forward to going every week. Communication is always excellent.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-sc-navy/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-bold text-sc-navy text-base leading-snug group-hover:text-sc-terracotta transition-colors">{q}</span>
        <HugeiconsIcon
          icon={ChevronDown}
          className={`w-5 h-5 text-sc-terracotta flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="text-sc-steel text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

export default function EnrolPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1200))
    setSubmitted(true)
    setSubmitting(false)
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-2xl border-[1.5px] text-sc-navy font-bold text-sm bg-white outline-none transition-colors placeholder:text-sc-steel/40 ${errors[field] ? 'border-red-400' : 'border-sc-navy/15 focus:border-sc-terracotta'}`

  return (
    <div className="bg-sc-cream min-h-screen">

      {/* ── STICKY MINI HEADER ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-sc-navy/8 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src={logo}
                alt="Sumsy Childcare"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sc-navy font-bold text-sm leading-tight">Sumsy <span className="text-sc-terracotta">Childcare</span></p>
              <p className="text-sc-steel text-[10px] font-bold tracking-wide">Limited · Eltham SE9</p>
            </div>
          </Link>
          <a href="tel:+447448364115" className="flex items-center gap-2 text-sc-terracotta font-bold text-sm hover:text-sc-navy transition-colors">
            <HugeiconsIcon icon={Call02Icon} className="w-4 h-4" />
            <span className="hidden sm:inline">+44 7448 364115</span>
            <span className="sm:hidden">Call Us</span>
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-sc-terracotta/10 text-sc-terracotta px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-sc-terracotta/20">
                <HugeiconsIcon icon={Award01Icon} className="w-3.5 h-3.5" />
                Ofsted Registered · Eltham SE9
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-sc-navy leading-[1.1] mb-5">
                Trusted Childcare<br />
                <span className="text-sc-terracotta">Your Child Will Love</span>
              </h1>
              <p className="text-sc-steel text-lg leading-relaxed mb-8 max-w-lg">
                Professional, Ofsted-registered care for children aged 5–16 in Eltham. Before school, after school, holidays and weekends — seven days a week.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#enquire" className="inline-flex items-center gap-2 bg-sc-terracotta text-white px-7 py-4 rounded-2xl font-bold text-sm hover:bg-sc-navy transition-colors shadow-lg shadow-sc-terracotta/25">
                  <HugeiconsIcon icon={FavouriteIcon} className="w-4 h-4" />
                  Enrol Now — It's Free
                </a>
                <Link href="/about" className="inline-flex items-center gap-2 bg-white text-sc-navy px-7 py-4 rounded-2xl font-bold text-sm border-[1.5px] border-sc-navy/15 hover:border-sc-terracotta hover:text-sc-terracotta transition-colors">
                  Meet Our Carer
                  <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
                </Link>
              </div>
              {/* Trust chips */}
              <div className="flex flex-wrap gap-3">
                {['✅ DBS Checked', '🏅 Ofsted Registered', '🩺 First Aid Certified', '7 Days a Week'].map(t => (
                  <span key={t} className="bg-white text-sc-navy text-xs font-bold px-3 py-1.5 rounded-full border border-sc-navy/10 shadow-sm">{t}</span>
                ))}
              </div>
            </div>

            {/* Right — Lead Capture Form */}
            <div id="enquire" className="bg-white rounded-3xl p-8 shadow-xl border border-sc-navy/8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-sc-cream rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-8 h-8 text-sc-terracotta" />
                  </div>
                  <h3 className="text-2xl font-bold text-sc-navy mb-2">Enquiry Sent! 🎉</h3>
                  <p className="text-sc-steel text-sm leading-relaxed">
                    Thanks <strong>{form.name}</strong>! We'll be in touch at <strong>{form.email}</strong> within a few hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-sc-navy mb-1">Get Started Today</h2>
                    <p className="text-sc-steel text-sm">Free enquiry — no commitment. We respond within hours.</p>
                  </div>
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-sc-navy mb-1.5 uppercase tracking-wide" htmlFor="lp-name">Your Name *</label>
                      <input id="lp-name" type="text" placeholder="Jane Smith"
                        className={inputClass('name')}
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-sc-navy mb-1.5 uppercase tracking-wide" htmlFor="lp-email">Email Address *</label>
                      <input id="lp-email" type="email" placeholder="you@example.com"
                        className={inputClass('email')}
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-sc-navy mb-1.5 uppercase tracking-wide" htmlFor="lp-phone">Phone Number *</label>
                      <input id="lp-phone" type="tel" placeholder="+44 7000 000000"
                        className={inputClass('phone')}
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-sc-navy mb-1.5 uppercase tracking-wide" htmlFor="lp-msg">Tell Us About Your Child <span className="text-sc-steel/50 font-normal normal-case">(optional)</span></label>
                      <textarea id="lp-msg" rows={3} placeholder="Ages, days needed, any questions…"
                        className={`${inputClass('message')} resize-none`}
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      />
                    </div>
                    <button type="submit" disabled={submitting}
                      className="w-full bg-sc-terracotta text-white py-4 rounded-2xl font-bold text-sm hover:bg-sc-navy transition-colors disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-sc-terracotta/20">
                      {submitting ? 'Sending…' : (
                        <><HugeiconsIcon icon={FavouriteIcon} className="w-4 h-4" /> Send Free Enquiry</>
                      )}
                    </button>
                    <p className="text-center text-xs text-sc-steel/60">We never share your details. Privacy guaranteed.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS BAR ── */}
      <section className="bg-sc-navy py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Award01Icon, label: 'Ofsted Registered', sub: 'National childcare standard' },
              { icon: Shield01Icon, label: 'DBS Cleared', sub: 'Fully background-checked carer' },
              { icon: CheckmarkCircle01Icon, label: 'CPR & First Aid', sub: 'Certified & annually renewed' },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-sc-terracotta rounded-2xl flex items-center justify-center mb-1">
                  <HugeiconsIcon icon={icon} className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-bold text-sm">{label}</p>
                <p className="text-sc-sand/70 text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sc-terracotta font-bold text-xs tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-sc-navy">Everything Parents Actually Care About</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-6 rounded-2xl border-[1.5px] border-sc-navy/8 hover:border-sc-terracotta/40 hover:bg-sc-cream/50 transition-all group">
                <div className="w-11 h-11 bg-sc-cream rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sc-terracotta/10 transition-colors">
                  <HugeiconsIcon icon={icon} className="w-5 h-5 text-sc-terracotta" />
                </div>
                <div>
                  <p className="font-bold text-sc-navy text-sm mb-1">{title}</p>
                  <p className="text-sc-steel text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-4 sm:px-6 bg-sc-sand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sc-terracotta font-bold text-xs tracking-widest uppercase mb-3">Parent Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-sc-navy">What Families Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-3xl p-8 border border-sc-navy/8 shadow-sm">
                <HugeiconsIcon icon={QuoteUpIcon} className="w-7 h-7 text-sc-terracotta mb-4" />
                <p className="text-sc-steel leading-relaxed mb-6 text-sm">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sc-terracotta/10 rounded-full flex items-center justify-center">
                    <span className="text-sc-terracotta font-bold text-xs">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-bold text-sc-navy text-sm">{t.name}</p>
                    <p className="text-sc-steel text-xs">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-sc-peach text-base">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sc-terracotta font-bold text-xs tracking-widest uppercase mb-3">Common Questions</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-sc-navy">Everything You Need to Know</h2>
          </div>
          <div className="bg-sc-cream rounded-3xl p-6 sm:p-8 border border-sc-navy/8">
            {faqs.map(faq => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT BAR ── */}
      <section className="py-16 px-4 sm:px-6 bg-sc-sand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-sc-navy">Get in Touch — We'd Love to Help</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Call02Icon, label: 'Call or WhatsApp', value: '+44 7448 364115', href: 'tel:+447448364115' },
              { icon: Mail01Icon, label: 'Email Us', value: 'Sumsychildcareltd@myyahoo.com', href: 'mailto:Sumsychildcareltd@myyahoo.com' },
              { icon: MapPinIcon, label: 'Visit Us', value: '74 Footcray Road, Eltham SE9 2SU', href: 'https://maps.google.com/?q=74+Footcray+Road+Eltham+London+SE9+2SU' },
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-sc-navy/8 hover:border-sc-terracotta/50 transition-all group no-underline">
                <div className="w-11 h-11 bg-sc-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sc-terracotta/20 transition-colors">
                  <HugeiconsIcon icon={icon} className="w-5 h-5 text-sc-terracotta" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-sc-steel/60 uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="font-bold text-sc-navy text-sm break-all leading-snug">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-4 sm:px-6 bg-sc-terracotta text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Enrol?</h2>
          <p className="text-white/80 text-lg mb-8">Send a free enquiry and we will get back to you within a few hours.</p>
          <a href="#enquire" className="inline-flex items-center gap-2 bg-white text-sc-terracotta px-8 py-4 rounded-2xl font-bold text-sm hover:bg-sc-cream transition-colors shadow-lg">
            <HugeiconsIcon icon={FavouriteIcon} className="w-4 h-4" />
            Enquire Now — It's Free
          </a>
        </div>
      </section>

      {/* ── MINIMAL FOOTER ── */}
      <footer className="bg-sc-navy py-6 px-4 text-center">
        <p className="text-sc-sand/60 text-xs">
          © {new Date().getFullYear()} Sumsy Childcare Limited. All rights reserved. ·{' '}
          <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
        </p>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white border-t border-sc-navy/10 px-4 py-3 flex gap-3">
        <a href="tel:+447448364115"
          className="flex-1 flex items-center justify-center gap-2 bg-sc-navy text-white py-3 rounded-xl font-bold text-sm">
          <HugeiconsIcon icon={Call02Icon} className="w-4 h-4" /> Call Us
        </a>
        <a href="#enquire"
          className="flex-1 flex items-center justify-center gap-2 bg-sc-terracotta text-white py-3 rounded-xl font-bold text-sm">
          <HugeiconsIcon icon={FavouriteIcon} className="w-4 h-4" /> Enrol Now
        </a>
      </div>
    </div>
  )
}
