'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Mail01Icon,
  CallIcon,
  Location01Icon,
  Clock01Icon,
  ArrowRight01Icon,
  Shield01Icon,
  Message01Icon,
} from '@hugeicons/core-free-icons'
import AnimateIn from '@/components/AnimateIn'
import Magnetic from '@/components/Magnetic'

const officeHours = [
  { day: 'Monday – Friday', hours: '7:00 AM – 9:00 PM', open: true },
  { day: 'Saturday', hours: '10:00 AM – 8:00 PM', open: true },
  { day: 'Sunday', hours: '11:00 AM – 6:00 PM', open: true },
]

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/447448364115"

  return (
    <main className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 bg-sc-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold text-sc-navy tracking-tight mb-6">
              Get in <span className="text-sc-terracotta">Touch</span>
            </h1>
            <p className="text-xl text-sc-steel max-w-2xl leading-relaxed">
              Have questions? We&apos;d love to hear from you. Contact us today to learn 
              more about our childcare services in Eltham.
            </p>
          </AnimateIn>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              { icon: CallIcon, label: 'Call Us', value: '07448 364115', sub: 'Mon-Sun, 7am-9pm', href: 'tel:+447448364115' },
              { icon: Mail01Icon, label: 'Email Us', value: 'Sumsychildcareltd@myyahoo.com', sub: 'We reply within 24h', href: 'mailto:Sumsychildcareltd@myyahoo.com' },
              { icon: Location01Icon, label: 'Visit Us', value: 'Eltham, SE9', sub: 'Professional Home Setting', href: 'https://maps.google.com' },
            ].map((card, i) => (
              <AnimateIn key={card.label} delay={i * 0.1} direction="up" distance={20}>
                <a href={card.href} className="block group h-full p-8 bg-white rounded-[32px] border-[1.5px] border-sc-navy/5 hover:border-sc-terracotta transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="w-14 h-14 bg-sc-cream rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <HugeiconsIcon icon={card.icon} className="w-7 h-7 text-sc-terracotta" />
                  </div>
                  <h3 className="text-sc-steel text-sm font-bold uppercase tracking-widest mb-2">{card.label}</h3>
                  <p className="text-xl font-bold text-sc-navy mb-1">{card.value}</p>
                  <p className="text-sc-steel text-sm">{card.sub}</p>
                </a>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimateIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold text-sc-navy mb-8 tracking-tighter">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-sc-steel uppercase tracking-wider">Your Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-sc-cream border border-sc-navy/10 focus:outline-none focus:border-sc-terracotta transition-colors" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-sc-steel uppercase tracking-wider">Phone Number</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-sc-cream border border-sc-navy/10 focus:outline-none focus:border-sc-terracotta transition-colors" placeholder="07123 456789" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-sc-steel uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-sc-cream border border-sc-navy/10 focus:outline-none focus:border-sc-terracotta transition-colors" placeholder="hello@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-sc-steel uppercase tracking-wider">Message</label>
                  <textarea rows={6} className="w-full px-6 py-4 rounded-2xl bg-sc-cream border border-sc-navy/10 focus:outline-none focus:border-sc-terracotta transition-colors" placeholder="How can we help?"></textarea>
                </div>
                <Magnetic>
                  <button className="btn-primary w-full py-5 text-xl shadow-xl">
                    Send Message
                  </button>
                </Magnetic>
              </form>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.2} className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-sc-navy mb-6">Our Hours</h3>
                <div className="space-y-4">
                  {officeHours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between p-6 bg-sc-cream rounded-2xl border border-sc-navy/5">
                      <div className="flex items-center gap-4">
                        <HugeiconsIcon icon={Clock01Icon} className="w-5 h-5 text-sc-terracotta" />
                        <span className="font-bold text-sc-navy">{item.day}</span>
                      </div>
                      <span className="text-sc-steel">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sc-navy text-white p-10 rounded-[40px] relative overflow-hidden">
                <HugeiconsIcon icon={Shield01Icon} className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Quick Response</h3>
                <p className="text-sc-sand mb-8 relative z-10 leading-relaxed">
                  Need a faster answer? Our WhatsApp line is open for quick enquiries 
                  regarding availability and session times.
                </p>
                <Magnetic>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 bg-sc-terracotta text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-sc-navy transition-all shadow-lg">
                    Chat on WhatsApp
                    <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5" />
                  </a>
                </Magnetic>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  )
}
