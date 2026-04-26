import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheck,
  Clock,
  Star,
  Award,
  Heart,
  ArrowRight,
  Users,
  Smile,
  Sun,
  CheckCircle,
  Quote,
  ChevronRight,
  Sparkles,
  GraduationCap,
  UserCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home | Sumsy Childcare Limited',
  description:
    'Sumsy Childcare Limited: Ofsted-registered, professional childcare for children aged 5–16. Safe, stimulating environment in Eltham, SE9. Flexible hours 7 days a week.',
}

const trustCards = [
  {
    icon: Award,
    title: 'Ofsted Registered',
    desc: 'Fully registered with Ofsted — meeting the highest standards of childcare regulation and inspection.',
    color: 'bg-sky-50 text-[#4AB8E8]',
    border: 'border-sky-100',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Environment',
    desc: 'Secure, child-friendly facilities with strict safeguarding protocols and visitor controls.',
    color: 'bg-mint-50 text-[#6DD5A3]',
    border: 'border-green-100',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    desc: 'Open 7 days a week with extended hours — mornings, evenings and weekends to fit your schedule.',
    color: 'bg-yellow-50 text-[#F59E0B]',
    border: 'border-yellow-100',
  },
  {
    icon: GraduationCap,
    title: 'Ages 5–16',
    desc: 'Specialising in school-age children — after school, holidays and ad hoc care.',
    color: 'bg-purple-50 text-[#8B5CF6]',
    border: 'border-purple-100',
  },
]

const reasons = [
  'Ofsted registered — independently inspected and approved',
  'Dedicated sole proprietor giving your child personal, consistent care',
  'Flexible hours 7 days a week including evenings and weekends',
  'Safe, stimulating environment designed for ages 5–16',
  'Central Eltham location — easy access from SE9 and surrounding areas',
  'Quick response via phone, WhatsApp, or email',
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent, Eltham',
    quote:
      'Sumsy Childcare has been a lifesaver for our family. My children are always happy and well looked-after. It feels personal — not like a big institution.',
    rating: 5,
    avatar: 'SM',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    name: 'James & Priya P.',
    role: 'Parents of Asha, age 8',
    quote:
      'The personal touch made all the difference. Asha settled in immediately and genuinely looks forward to going every week. Communication is always excellent.',
    rating: 5,
    avatar: 'JP',
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'Danielle O.',
    role: 'Working mum, SE9',
    quote:
      'The flexible hours are exactly what I needed. I work late knowing my son is safe and happy. Quick responses every time I reach out — very reassuring.',
    rating: 5,
    avatar: 'DO',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    name: 'Marcus T.',
    role: 'Single dad, SE9',
    quote:
      'After trying a few options in the area, Sumsy stood out. The Ofsted registration gave me confidence, and the personal care has exceeded every expectation.',
    rating: 5,
    avatar: 'MT',
    color: 'bg-yellow-100 text-yellow-600',
  },
]

const stats = [
  { value: 'Ofsted', label: 'Registered' },
  { value: '5–16', label: 'Age Range' },
  { value: '7 Days', label: 'A Week' },
  { value: 'SE9', label: 'Eltham' },
]

const facilityImages = [
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80', alt: 'Bright classroom space' },
  { src: 'https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=400&q=80', alt: 'Colourful facility interior' },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', alt: 'Safe and welcoming entrance' },
  { src: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=80', alt: 'Activity and learning area' },
  { src: 'https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?w=400&q=80', alt: 'Outdoor play area' },
  { src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&q=80', alt: 'Social and recreation space' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pattern min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-24 right-10 w-72 h-72 bg-[#4AB8E8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6DD5A3]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-[#4AB8E8]/10 border border-[#4AB8E8]/20 text-[#2D4A8A] px-4 py-1.5 rounded-full text-sm font-bold mb-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                <Sparkles className="w-4 h-4 text-[#4AB8E8]" />
                Ofsted Registered · Eltham, SE9
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D4A8A] leading-tight mb-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                Professional Childcare{' '}
                <span className="gradient-text">You Can Trust</span>
              </h1>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed max-w-lg"
                style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Sumsy Childcare Limited provides safe, nurturing, and Ofsted-registered
                care for children aged 5–16 in Eltham. Flexible hours, 7 days a week —
                designed around working families.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="btn-primary text-base px-8 py-4">
                  <Heart className="w-5 h-5" />
                  Get In Touch
                </Link>
                <a
                  href="https://wa.me/447448364115?text=Hi%20Sumsy%20Childcare!%20I'd%20like%20to%20find%20out%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base px-8 py-4"
                >
                  WhatsApp Us
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-wrap gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-extrabold text-[#4AB8E8]"
                      style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#6B7280] font-medium"
                      style={{ fontFamily: 'Quicksand, sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-up hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=700&q=85"
                  alt="Children at Sumsy Childcare"
                  width={700}
                  height={520}
                  className="object-cover w-full h-[480px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A8A]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 bg-[#6DD5A3] rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2D4A8A]" style={{ fontFamily: 'Nunito, sans-serif' }}>Ofsted Registered</p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Quicksand, sans-serif' }}>Verified & Inspected</p>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3 animate-bounce-gentle">
                <div className="w-10 h-10 bg-[#FFD166] rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2D4A8A]" style={{ fontFamily: 'Nunito, sans-serif' }}>Ages 5–16</p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Quicksand, sans-serif' }}>School-Age Specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card, i) => {
              const Icon = card.icon
              return (
                <div key={card.title} className={`reveal card border ${card.border} hover:-translate-y-1`}
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-[#2D4A8A] mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    {card.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-[#F8FBFF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left relative">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
                alt="Sumsy Childcare facility"
                width={600}
                height={420}
                className="rounded-3xl object-cover w-full h-[400px] shadow-card"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-card px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#4AB8E8] rounded-xl flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2D4A8A]" style={{ fontFamily: 'Nunito, sans-serif' }}>Sole Proprietor</p>
                  <p className="text-xs text-gray-500">Personal, dedicated care</p>
                </div>
              </div>
            </div>
            <div className="reveal-right">
              <div className="inline-flex items-center gap-2 bg-[#6DD5A3]/15 text-[#2D6A4F] px-4 py-1.5 rounded-full text-sm font-bold mb-5"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                <Heart className="w-4 h-4" />
                About Sumsy Childcare Limited
              </div>
              <h2 className="section-title mb-5">Dedicated, Personal Care for Every Child</h2>
              <p className="text-[#4B5563] leading-relaxed mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Sumsy Childcare Limited is an Ofsted-registered, owner-operated childcare
                service based in Eltham, SE9. We specialise in safe, reliable, and nurturing
                care for children aged 5 to 16 — with flexible hours that genuinely work for
                busy families.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-8" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                As a sole proprietor, every child receives consistent, personal attention —
                not passed between unfamiliar faces. You deal directly with the person
                responsible for your child&apos;s care.
              </p>
              <Link href="/about" className="btn-primary">
                Meet the Carer
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-br from-[#2D4A8A] via-[#1E3A6E] to-[#2D4A8A] py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4AB8E8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6DD5A3]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 bg-[#4AB8E8]/20 text-[#7DD3FC] px-4 py-1.5 rounded-full text-sm font-bold mb-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                <Sparkles className="w-4 h-4" />
                Why Families Choose Sumsy
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                Childcare That Goes{' '}
                <span className="text-[#6DD5A3]">Above & Beyond</span>
              </h2>
              <p className="text-white/75 leading-relaxed mb-8" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                We do not just watch your children — we invest in them. Our approach
                combines safe, structured care with genuine warmth, creating an
                environment where school-age children truly flourish.
              </p>
              <ul className="space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    <CheckCircle className="w-5 h-5 text-[#6DD5A3] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-green">
                  <Heart className="w-5 h-5" />
                  Enquire Today
                </Link>
              </div>
            </div>
            <div className="reveal-right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, value: 'Ofsted', label: 'Registered', color: 'bg-[#4AB8E8]/20' },
                  { icon: Users, value: '5–16', label: 'Ages Catered', color: 'bg-[#6DD5A3]/20' },
                  { icon: Clock, value: '7 Days', label: 'Open Weekly', color: 'bg-[#FFD166]/20' },
                  { icon: Heart, value: 'SE9', label: 'Eltham Based', color: 'bg-[#FF8C74]/20' },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className={`${stat.color} rounded-3xl p-6 border border-white/10 text-center`}>
                      <Icon className="w-8 h-8 text-white/70 mx-auto mb-3" />
                      <div className="text-3xl font-extrabold text-white mb-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60 font-medium" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F8FBFF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-[#FFD166]/20 text-[#B45309] px-4 py-1.5 rounded-full text-sm font-bold mb-4"
              style={{ fontFamily: 'Nunito, sans-serif' }}>
              <Quote className="w-4 h-4" />
              Parent Stories
            </div>
            <h2 className="section-title">What Families Are Saying</h2>
            <p className="section-subtitle">Hear from parents across SE9 who trust us with their most precious ones.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="reveal testimonial-card rounded-3xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#FFD166] text-[#FFD166]" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-[#4AB8E8]/30 mb-3" />
                <p className="text-[#4B5563] text-sm leading-relaxed mb-5 italic" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-extrabold`}
                    style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#2D4A8A] text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>{t.name}</p>
                    <p className="text-xs text-[#9CA3AF]" style={{ fontFamily: 'Quicksand, sans-serif' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 bg-[#6DD5A3]/15 text-[#2D6A4F] px-4 py-1.5 rounded-full text-sm font-bold mb-4"
              style={{ fontFamily: 'Nunito, sans-serif' }}>
              <Smile className="w-4 h-4" />
              Our Space
            </div>
            <h2 className="section-title">A Glimpse Inside Our Facility</h2>
            <p className="section-subtitle">Safe, bright, and purpose-built for school-age children to thrive.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            {facilityImages.map((img, i) => (
              <div key={img.alt} className="reveal relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover group cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={280}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A8A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/gallery" className="btn-secondary">
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#4AB8E8] to-[#6DD5A3] py-20 relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-white/10 rounded-full" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="reveal">
            <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Nunito, sans-serif' }}>
              Ready to Find Great Childcare?
            </h2>
            <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Quicksand, sans-serif' }}>
              Get in touch today — by phone, WhatsApp, or email. We would love
              to hear about your child and find a care arrangement that works for your family.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#2D4A8A] font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-base"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                <Heart className="w-5 h-5 text-[#4AB8E8]" />
                Contact Us Now
              </Link>
              <a
                href="https://wa.me/447448364115?text=Hi%20Sumsy%20Childcare!%20I'd%20like%20to%20enquire%20about%20childcare."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-2xl border border-white/30 hover:-translate-y-0.5 transition-all duration-300 text-base"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                WhatsApp Us
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
