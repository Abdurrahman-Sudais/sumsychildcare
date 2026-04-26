import type { Metadata } from 'next'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Sun01Icon,
  Calendar01Icon,
  CheckmarkCircle01Icon,
  Clock01Icon,
  UserGroupIcon,
  ArrowRight01Icon,
  FavouriteIcon,
  StarIcon,
  BookOpen01Icon,
  Coffee01Icon,
  Airplane01Icon
} from '@hugeicons/core-free-icons'

export const metadata: Metadata = {
  title: 'Our Services | Sumsy Childcare Limited',
  description:
    'Explore Sumsy Childcare Limited\'s childcare services for ages 5–16 in Eltham, SE9: after-school care, before-school care, holiday cover, and flexible ad hoc sessions.',
}

const services = [
  {
    id: 'afterschool',
    icon: Sun01Icon,
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
  },
  {
    id: 'beforeschool',
    icon: Coffee01Icon,
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
  },
  {
    id: 'holiday',
    icon: Airplane01Icon,
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
  },
  {
    id: 'flexible',
    icon: Calendar01Icon,
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
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white text-sc-terracotta px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-sc-navy/10 shadow-sm">
            <HugeiconsIcon icon={BookOpen01Icon} className="w-4 h-4" />
            Our Services
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-sc-navy mb-6 tracking-tight">
            Childcare for Ages 5–16 <br className="hidden md:block" /> in Eltham
          </h1>
          <p className="text-lg text-sc-steel max-w-2xl mx-auto leading-relaxed">
            Flexible, Ofsted-registered care before school, after school, during holidays
            and at weekends — designed around working families in SE9.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="bg-transparent py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((svc, i) => {
              const Icon = svc.icon
              return (
                <div key={svc.id} id={svc.id} className="reveal bg-white border-[1.5px] border-sc-navy rounded-[32px] overflow-hidden p-8 hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-5 mb-6">
                        <div className="w-16 h-16 rounded-[20px] bg-sc-terracotta flex items-center justify-center shadow-lg shadow-sc-terracotta/30 flex-shrink-0">
                          <HugeiconsIcon icon={Icon} className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-sc-navy mb-1">
                            {svc.title}
                          </h2>
                          <p className="text-sc-steel font-bold">
                            {svc.tagline}
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 text-sm font-bold px-4 py-1.5 rounded-full bg-sc-cream text-sc-terracotta self-start mb-6 border border-sc-terracotta/20">
                        <HugeiconsIcon icon={UserGroupIcon} className="w-4 h-4" />
                        Age: {svc.ageRange}
                      </div>
                      <p className="text-sc-steel leading-relaxed mb-8 text-lg">
                        {svc.description}
                      </p>
                      <div className="flex items-start gap-3 mb-8 bg-sc-sand/30 rounded-2xl p-4 border border-sc-sand/50">
                        <HugeiconsIcon icon={Clock01Icon} className="w-5 h-5 text-sc-navy mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-sc-navy">Schedule: </span>
                          <span className="text-sc-steel">{svc.schedule}</span>
                        </div>
                      </div>
                      <Link href="/contact" className="btn-primary self-start shadow-none border-[1.5px] border-transparent hover:border-sc-terracotta hover:bg-white hover:text-sc-terracotta">
                        <HugeiconsIcon icon={FavouriteIcon} className="w-5 h-5" />
                        Enquire About This Service
                      </Link>
                    </div>
                    
                    <div className="bg-sc-cream rounded-[24px] p-8 border border-sc-terracotta/10">
                      <h4 className="text-xl font-bold text-sc-navy mb-6 flex items-center gap-3">
                        <HugeiconsIcon icon={StarIcon} className="w-6 h-6 text-sc-peach fill-sc-peach" />
                        What&apos;s Included
                      </h4>
                      <ul className="space-y-4">
                        {svc.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-6 h-6 text-sc-teal flex-shrink-0" />
                            <span className="text-sc-navy font-bold leading-relaxed">
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
      <section className="bg-white py-24 rounded-t-[3rem] border-t border-sc-navy/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="section-title">Every Session Includes</h2>
            <p className="section-subtitle mx-auto">These standards apply across all our services, every single day.</p>
          </div>
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f} className="flex flex-col items-center text-center gap-4 bg-transparent rounded-[24px] p-6 border-[1.5px] border-sc-navy/10 hover:border-sc-terracotta transition-colors">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-8 h-8 text-sc-teal" />
                <span className="font-bold text-sc-navy text-sm leading-relaxed">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sc-navy py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Not Sure Which Option Is Right?
            </h2>
            <p className="text-sc-sand text-lg mb-10">
              Get in touch and we will find the best care arrangement for your child and your schedule.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href="https://wa.me/447448364115?text=Hi%20Sumsy%20Childcare!%20I'd%20like%20to%20find%20out%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-sc-navy transition-all duration-300"
              >
                WhatsApp Us
                <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
