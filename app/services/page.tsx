import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Sun,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  Heart,
  Star,
  BookOpen,
  Home,
  Coffee,
  Plane,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | Sumsy Childcare Limited',
  description:
    'Explore Sumsy Childcare Limited\'s childcare services for ages 5–16 in Eltham, SE9: after-school care, before-school care, holiday cover, and flexible ad hoc sessions.',
}

const services = [
  {
    id: 'afterschool',
    icon: Sun,
    title: 'After-School Care',
    tagline: 'Safe, Supervised & Fun After the School Day',
    ageRange: '5–16 years',
    description:
      'Our after-school service gives working parents complete peace of mind. Children are collected or dropped off, given a healthy snack, and supported with homework, activities, and relaxed play until you\'re ready to pick up.',
    benefits: [
      'Available Monday to Friday during term time',
      'Homework support and quiet reading time',
      'Healthy snack provided each session',
      'Structured and free-choice activity time',
      'Safe, supervised environment throughout',
      'Flexible booking — regular or ad hoc',
    ],
    schedule: 'Monday – Friday, from 3:00 PM up to 9:00 PM',
    color: 'from-[#4AB8E8] to-[#2D9FD4]',
    bg: 'bg-sky-50',
    badge: 'bg-sky-100 text-sky-700',
    border: 'border-sky-100',
  },
  {
    id: 'beforeschool',
    icon: Coffee,
    title: 'Before-School Care',
    tagline: 'A Calm, Positive Start to the Day',
    ageRange: '5–16 years',
    description:
      'Early starts are no problem. We offer a safe, welcoming environment from 7 AM — giving children a calm, positive beginning to their school day while parents head to work with confidence.',
    benefits: [
      'Open from 7:00 AM Monday to Friday',
      'Light breakfast or snack available',
      'Calm, supervised morning environment',
      'Supports children arriving at school settled and ready',
      'Flexible — use only the mornings you need',
      'Easy drop-off, no fuss',
    ],
    schedule: 'Monday – Friday, 7:00 AM – school start time',
    color: 'from-[#6DD5A3] to-[#50C490]',
    bg: 'bg-green-50',
    badge: 'bg-green-100 text-green-700',
    border: 'border-green-100',
  },
  {
    id: 'holiday',
    icon: Plane,
    title: 'Holiday & School Break Cover',
    tagline: 'Continuous Care When School Is Out',
    ageRange: '5–16 years',
    description:
      'School holidays don\'t have to disrupt your work schedule. We provide full-day and half-day cover during half-terms, Easter, summer, and Christmas breaks — with engaging activities to keep children stimulated and happy.',
    benefits: [
      'Available during all major school holidays',
      'Full-day and half-day options',
      'Activity-based sessions — crafts, games, outdoor time',
      'Meals and snacks provided on full-day bookings',
      'Advance booking available from start of each term',
      'Consistent carer your child already knows',
    ],
    schedule: 'School holiday periods — 8:00 AM to 6:00 PM',
    color: 'from-[#FFD166] to-[#F59E0B]',
    bg: 'bg-yellow-50',
    badge: 'bg-yellow-100 text-yellow-700',
    border: 'border-yellow-100',
  },
  {
    id: 'flexible',
    icon: Calendar,
    title: 'Flexible & Weekend Care',
    tagline: 'Care When Life Is Unpredictable',
    ageRange: '5–16 years',
    description:
      'Modern family life is busy and unpredictable. Our flexible and weekend care options mean you can book sessions as you need them — no rigid contracts, no pressure. Saturday and Sunday availability sets us apart.',
    benefits: [
      'Saturday 10:00 AM – 8:00 PM',
      'Sunday 11:00 AM – 6:00 PM',
      'Drop-in sessions subject to availability',
      'Ad hoc bookings welcomed',
      'Same safe environment and standards as weekday care',
      'Contact us via WhatsApp for quick availability checks',
    ],
    schedule: 'Sat 10:00 AM–8:00 PM · Sun 11:00 AM–6:00 PM',
    color: 'from-[#B5A4E8] to-[#8B73D6]',
    bg: 'bg-purple-50',
    badge: 'bg-purple-100 text-purple-700',
    border: 'border-purple-100',
  },
]

const features = [
  'Ofsted registered provider',
  'DBS-checked sole proprietor',
  'Safe, licensed facility in Eltham',
  'CPR & First Aid certified',
  'Consistent, personal care — same carer every time',
  'Snacks and meals available',
  'Ages 5–16 catered for',
  'Open 7 days a week',
]

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pattern pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4AB8E8]/10 text-[#2D4A8A] px-4 py-1.5 rounded-full text-sm font-bold mb-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}>
            <BookOpen className="w-4 h-4 text-[#4AB8E8]" />
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D4A8A] mb-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}>
            Childcare for Ages 5–16 in Eltham
          </h1>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Flexible, Ofsted-registered care before school, after school, during holidays
            and at weekends — designed around working families in SE9.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((svc, i) => {
              const Icon = svc.icon
              return (
                <div key={svc.id} id={svc.id} className={`reveal card border ${svc.border} overflow-hidden`}>
                  <div className={`grid lg:grid-cols-2 gap-8`}>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-extrabold text-[#2D4A8A]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                            {svc.title}
                          </h2>
                          <p className="text-sm font-semibold text-[#6B7280]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            {svc.tagline}
                          </p>
                        </div>
                      </div>
                      <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${svc.badge} self-start mb-4`}>
                        <Users className="w-3 h-3" />
                        Age: {svc.ageRange}
                      </div>
                      <p className="text-[#4B5563] leading-relaxed mb-6" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        {svc.description}
                      </p>
                      <div className="flex items-start gap-2 mb-6 text-sm">
                        <Clock className="w-4 h-4 text-[#4AB8E8] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-[#2D4A8A]" style={{ fontFamily: 'Nunito, sans-serif' }}>Schedule: </span>
                          <span className="text-[#6B7280]" style={{ fontFamily: 'Quicksand, sans-serif' }}>{svc.schedule}</span>
                        </div>
                      </div>
                      <Link href="/contact" className="btn-primary self-start">
                        <Heart className="w-4 h-4" />
                        Enquire About This Service
                      </Link>
                    </div>
                    <div className={`${svc.bg} rounded-2xl p-6`}>
                      <h4 className="font-extrabold text-[#2D4A8A] mb-4 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        <Star className="w-4 h-4 text-[#FFD166]" />
                        What&apos;s Included
                      </h4>
                      <ul className="space-y-3">
                        {svc.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2.5">
                            <CheckCircle className="w-5 h-5 text-[#6DD5A3] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#374151]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ALWAYS INCLUDED */}
      <section className="bg-[#F8FBFF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title">Every Session Includes</h2>
            <p className="section-subtitle">These standards apply across all our services, every single day.</p>
          </div>
          <div className="reveal grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-soft border border-sky-50">
                <CheckCircle className="w-5 h-5 text-[#6DD5A3] flex-shrink-0" />
                <span className="font-semibold text-[#2D4A8A] text-sm" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2D4A8A] to-[#1E3A6E] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="reveal">
            <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Not Sure Which Option Is Right?
            </h2>
            <p className="text-white/80 text-lg mb-8" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              Get in touch and we will find the best care arrangement for your child and your schedule.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                <Heart className="w-5 h-5" />
                Contact Us
              </Link>
              <a
                href="https://wa.me/447448364115?text=Hi%20Sumsy%20Childcare!%20I'd%20like%20to%20find%20out%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3 rounded-2xl border border-white/20 transition-all duration-300"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                WhatsApp Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
