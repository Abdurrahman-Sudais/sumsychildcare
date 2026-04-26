import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heart,
  Award,
  Target,
  Eye,
  ShieldCheck,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  UserCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Sumsy Childcare Limited',
  description:
    'Meet the owner and carer behind Sumsy Childcare Limited — an Ofsted-registered, sole-proprietor childcare service in Eltham, SE9, for children aged 5–16.',
}

const values = [
  {
    icon: Heart,
    title: 'Love & Warmth',
    desc: 'Every child is welcomed and celebrated. We create a genuine home-away-from-home.',
    color: 'bg-red-50 text-red-500',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Rigorous safeguarding protocols and a secure, child-friendly facility at all times.',
    color: 'bg-sky-50 text-[#4AB8E8]',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'Ofsted-registered and committed to the highest standards of care and professionalism.',
    color: 'bg-yellow-50 text-yellow-500',
  },
  {
    icon: UserCheck,
    title: 'Consistency',
    desc: 'As a sole proprietor, your child always has the same dedicated carer — no surprises.',
    color: 'bg-green-50 text-[#6DD5A3]',
  },
  {
    icon: Target,
    title: 'Purpose',
    desc: 'Care designed to support the specific developmental needs of school-age children.',
    color: 'bg-purple-50 text-purple-500',
  },
  {
    icon: Sparkles,
    title: 'Joy',
    desc: 'Every session should be something your child genuinely looks forward to.',
    color: 'bg-orange-50 text-orange-500',
  },
]

const certifications = [
  'Ofsted Registered Childcare Provider',
  'Licensed to care for children aged 5–16',
  'Fully DBS checked and verified',
  'CPR & First Aid Certified',
  'Committed to annual safeguarding training',
  'Health & safety compliant facility',
  'GDPR compliant — your data is always protected',
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pattern pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4AB8E8]/10 text-[#2D4A8A] px-4 py-1.5 rounded-full text-sm font-bold mb-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}>
            <Heart className="w-4 h-4 text-[#4AB8E8]" />
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D4A8A] mb-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}>
            About Sumsy Childcare Limited
          </h1>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}>
            An Ofsted-registered, owner-operated childcare service in Eltham, SE9 —
            providing personal, consistent, and professional care for children aged 5–16.
          </p>
        </div>
      </section>

      {/* MEET THE CARER */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="reveal-left flex flex-col items-center">
              <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-2xl mb-6">
                {/* Placeholder — replace src with client's actual photo */}
                <Image
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80"
                  alt="Owner and carer — Sumsy Childcare Limited"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A8A]/20 to-transparent" />
              </div>
              <div className="bg-[#F8FBFF] rounded-2xl px-6 py-4 text-center border border-sky-100">
                <p className="font-extrabold text-[#2D4A8A] text-lg mb-0.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Sumsy Childcare Limited
                </p>
                <p className="text-sm font-semibold text-[#4AB8E8] mb-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  Owner & Lead Carer
                </p>
                <p className="text-xs text-[#9CA3AF]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  🏅 Ofsted Registered · DBS Checked · First Aid Certified
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="reveal-right">
              <div className="inline-flex items-center gap-2 bg-[#6DD5A3]/15 text-[#2D6A4F] px-4 py-1.5 rounded-full text-sm font-bold mb-5"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                <UserCheck className="w-4 h-4" />
                The Person Behind the Care
              </div>
              <h2 className="section-title mb-5">Dedicated to Every Child in Our Care</h2>
              <div className="space-y-4 text-[#4B5563]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                <p className="leading-relaxed">
                  Sumsy Childcare Limited was founded with a single purpose: to give
                  working families in Eltham a childcare option they could genuinely
                  rely on. As a sole proprietor, the owner brings personal commitment
                  to every child — no rotating staff, no strangers, just consistent,
                  dedicated care.
                </p>
                <p className="leading-relaxed">
                  Ofsted registered and serving children aged 5–16, the service is
                  built around flexibility and trust. Whether you need before-school
                  cover, after-school care, or holiday support, the goal is always
                  the same: your child feels safe, happy, and at home.
                </p>
                <p className="leading-relaxed">
                  Located at 74 Footcray Road, Eltham — with flexible hours across
                  the full week — Sumsy Childcare is designed around real family life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#F8FBFF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal card border border-sky-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4AB8E8] to-[#2D9FD4] rounded-2xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#2D4A8A] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Our Mission
              </h3>
              <p className="text-[#4B5563] leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                To provide exceptional, personal childcare that gives working families in
                Eltham complete peace of mind — through safe environments, reliable hours,
                and the kind of consistent care that only a dedicated sole proprietor can offer.
              </p>
            </div>
            <div className="reveal card border border-green-100" style={{ transitionDelay: '100ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-[#6DD5A3] to-[#50C490] rounded-2xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#2D4A8A] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Our Vision
              </h3>
              <p className="text-[#4B5563] leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                A community where every family in SE9 has access to flexible, high-quality,
                school-age childcare — so children thrive after school and parents can
                work without worry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS + VALUES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 bg-[#FFD166]/20 text-[#B45309] px-4 py-1.5 rounded-full text-sm font-bold mb-5"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                <Award className="w-4 h-4" />
                Credentials
              </div>
              <h2 className="section-title mb-5">Our Certifications</h2>
              <p className="text-[#4B5563] leading-relaxed mb-8" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                We hold all required registrations, certifications, and clearances —
                so you never have to wonder about our qualifications or your child&apos;s safety.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    <CheckCircle className="w-5 h-5 text-[#6DD5A3] flex-shrink-0" />
                    <span className="text-[#4B5563] text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal-right">
              <h2 className="section-title mb-8">Our Core Values</h2>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => {
                  const Icon = v.icon
                  return (
                    <div key={v.title} className="card p-5 hover:-translate-y-0.5 border border-gray-50">
                      <div className={`w-10 h-10 rounded-xl ${v.color} flex items-center justify-center mb-3`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-extrabold text-[#2D4A8A] text-sm mb-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        {v.title}
                      </h4>
                      <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        {v.desc}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#4AB8E8] to-[#6DD5A3] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="reveal">
            <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Want to See the Facility?
            </h2>
            <p className="text-white/85 text-lg mb-8" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              Get in touch and arrange a visit — we would love to meet you and your child.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#2D4A8A] font-bold px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              style={{ fontFamily: 'Nunito, sans-serif' }}>
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
