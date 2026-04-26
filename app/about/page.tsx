import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  FavouriteIcon,
  Award01Icon,
  Target01Icon,
  EyeIcon,
  Shield01Icon,
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
  CircleUser
} from '@hugeicons/core-free-icons'

export const metadata: Metadata = {
  title: 'About | Sumsy Childcare Limited',
  description:
    'Meet the owner and carer behind Sumsy Childcare Limited — an Ofsted-registered, sole-proprietor childcare service in Eltham, SE9, for children aged 5–16.',
}

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
      <section className="pt-32 pb-16 bg-sc-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white text-sc-terracotta px-4 py-1.5 rounded-full text-sm font-bold mb-5 border border-sc-navy/10 shadow-sm">
            <HugeiconsIcon icon={FavouriteIcon} className="w-4 h-4" />
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-sc-navy mb-6 tracking-tight">
            About Sumsy Care
          </h1>
          <p className="text-lg text-sc-steel max-w-2xl mx-auto leading-relaxed">
            An Ofsted-registered, owner-operated childcare service in Eltham, SE9 —
            providing personal, consistent, and professional care for children aged 5–16.
          </p>
        </div>
      </section>

      {/* MEET THE CARER */}
      <section className="bg-white py-24 rounded-t-[3rem] -mt-8 border-t border-sc-navy/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="reveal-left flex flex-col items-center">
              <div className="relative w-80 h-80 rounded-[40px] overflow-hidden shadow-2xl mb-8 border-[1.5px] border-sc-navy">
                {/* Placeholder — replace src with client's actual photo */}
                <Image
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80"
                  alt="Owner and carer — Sumsy Childcare Limited"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-[#2C2F3F]/10 mix-blend-multiply pointer-events-none" />
              </div>
              <div className="bg-sc-cream rounded-[24px] px-8 py-5 text-center border border-sc-terracotta/20">
                <p className="font-bold text-sc-navy text-xl mb-1">
                  Sumsy Childcare Limited
                </p>
                <p className="text-sm font-bold text-sc-terracotta mb-2">
                  Owner & Lead Carer
                </p>
                <p className="text-xs text-sc-steel">
                  🏅 Ofsted Registered · DBS Checked · First Aid
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="reveal-right">
              <div className="inline-flex items-center gap-2 bg-sc-cream text-sc-terracotta px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-sc-terracotta/20">
                <HugeiconsIcon icon={CircleUser} className="w-4 h-4" />
                The Person Behind the Care
              </div>
              <h2 className="section-title mb-6">Dedicated to Every Child in Our Care</h2>
              <div className="space-y-6 text-sc-steel text-lg leading-relaxed">
                <p>
                  Sumsy Childcare Limited was founded with a single purpose: to give
                  working families in Eltham a childcare option they could genuinely
                  rely on. As a sole proprietor, the owner brings personal commitment
                  to every child — no rotating staff, no strangers, just consistent,
                  dedicated care.
                </p>
                <p>
                  Ofsted registered and serving children aged 5–16, the service is
                  built around flexibility and trust. Whether you need before-school
                  cover, after-school care, or holiday support, the goal is always
                  the same: your child feels safe, happy, and at home.
                </p>
                <p>
                  Located at 74 Footcray Road, Eltham — with flexible hours across
                  the full week — Sumsy Childcare is designed around real family life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-sc-sand py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal bg-white rounded-[32px] p-10 border-[1.5px] border-sc-navy/10 hover:border-sc-terracotta transition-all">
              <div className="w-16 h-16 bg-sc-terracotta rounded-[20px] flex items-center justify-center mb-6 shadow-lg shadow-sc-terracotta/30">
                <HugeiconsIcon icon={Target01Icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-sc-navy mb-4">
                Our Mission
              </h3>
              <p className="text-sc-steel text-lg leading-relaxed">
                To provide exceptional, personal childcare that gives working families in
                Eltham complete peace of mind — through safe environments, reliable hours,
                and the kind of consistent care that only a dedicated sole proprietor can offer.
              </p>
            </div>
            <div className="reveal bg-white rounded-[32px] p-10 border-[1.5px] border-sc-navy/10 hover:border-sc-peach transition-all" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-sc-peach rounded-[20px] flex items-center justify-center mb-6 shadow-lg shadow-sc-peach/30">
                <HugeiconsIcon icon={EyeIcon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-sc-navy mb-4">
                Our Vision
              </h3>
              <p className="text-sc-steel text-lg leading-relaxed">
                A community where every family in SE9 has access to flexible, high-quality,
                school-age childcare — so children thrive after school and parents can
                work without worry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sc-cream text-sc-terracotta px-4 py-1.5 rounded-full text-sm font-bold mb-5 border border-sc-terracotta/20">
              <HugeiconsIcon icon={Award01Icon} className="w-4 h-4" />
              Credentials
            </div>
            <h2 className="section-title mb-6">Our Certifications</h2>
            <p className="text-sc-steel text-lg leading-relaxed mb-8">
              We hold all required registrations, certifications, and clearances —
              so you never have to wonder about our qualifications or your child&apos;s safety.
            </p>
          </div>
          <div className="bg-sc-cream rounded-[32px] p-8 md:p-12 border border-sc-terracotta/20">
            <ul className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-4">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-6 h-6 text-sc-terracotta flex-shrink-0 mt-0.5" />
                  <span className="text-sc-navy font-bold text-lg leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sc-navy py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Want to See the Facility?
            </h2>
            <p className="text-sc-sand text-lg mb-10">
              Get in touch and arrange a visit — we would love to meet you and your child.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
              <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
