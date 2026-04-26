import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  FavouriteIcon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  SparklesIcon,
  HealtcareIcon,
  BadgeDollarSignIcon,
  UserGroupIcon,
  SmileIcon,
  Shield01Icon,
  CheckmarkCircle01Icon,
  QuoteUpIcon,
  ChevronRight,
  CircleUser
} from '@hugeicons/core-free-icons'

export const metadata: Metadata = {
  title: 'Home | Sumsy Childcare Limited',
  description:
    'Sumsy Childcare Limited: Ofsted-registered, professional childcare for children aged 5–16. Safe, stimulating environment in Eltham, SE9. Flexible hours 7 days a week.',
}

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent, Eltham',
    quote: 'Sumsy Childcare has been a lifesaver for our family. My children are always happy and well looked-after. It feels personal — not like a big institution.',
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'James & Priya P.',
    role: 'Parents of Asha, age 8',
    quote: 'The personal touch made all the difference. Asha settled in immediately and genuinely looks forward to going every week. Communication is always excellent.',
    rating: 5,
    avatar: 'JP',
  },
]

const facilityImages = [
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80', alt: 'Bright classroom space' },
  { src: 'https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=400&q=80', alt: 'Colourful facility interior' },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', alt: 'Safe and welcoming entrance' },
]

export default function HomePage() {
  return (
    <>
      {/* NEW HERO SECTION matching the "Mini Care" UI */}
      <section className="min-h-screen pt-36 pb-20 relative overflow-hidden bg-sc-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 w-full h-full relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-12 items-center h-full">

            {/* Left Content */}
            <div className="animate-fade-up max-w-2xl pt-10 lg:pt-0">
              <div className="text-sc-steel font-bold tracking-widest text-sm mb-6 uppercase">
                [ Ofsted Registered ]
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-[72px] font-bold text-sc-navy tracking-tight mb-8">
                Your Trusted Caregivers for Lovely little ones
              </h1>
              <p className="text-md leading-7 text-sc-steel mb-10 max-w-lg">
                Discover peace of mind with our trusted caregivers,
                dedicated to providing expert care for your little ones.
                From safety to joyous learning.
              </p>
              <div className="flex flex-row justify-between mb-12 max-w-[300px]">
                <Link href="/contact" className="btn-primary px-6 py-3 text-base">
                  Enroll Now
                </Link>
                
                <span className='flex items-center'>or</span>

                <Link href="/about" className="flex items-center justify-center text-sc-navy font-bold text-[17px] underline decoration-2 underline-offset-4 hover:decoration-sc-terracotta transition-colors">
                  meet Our carer
                </Link>
              </div>
            </div>

            {/* Right Content - Image composition */}
            <div className="relative animate-fade-up w-[88%] xs:w-[85%] md:w-full min-w-[200px] max-w-[320px] md:max-w-[440px] mx-auto lg:ml-auto aspect-[4/4.5] md:-mt-4">               
              
              {/* Main Decorative Outline */}
              <div className="absolute inset-0 border-[1.5px] border-sc-navy rounded-[40px] pointer-events-none"></div>

              {/* Main Image Container */}
              <div className="absolute inset-[16px] sm:inset-[24px] bg-sc-peach rounded-[32px] shadow-sm overflow-hidden z-10">
                <Image
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=85"
                  alt="Caregiver and child"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* The Pink Triangle (Bottom Left) - Scaled for mobile */}
              <div className="absolute bottom-1 left-1 w-24 h-24 sm:w-36 sm:h-36 z-20 pointer-events-none">
                <svg viewBox="-12 -12 124 124" className="w-full h-full drop-shadow-md">
                  <path 
                    d="M 0,20 Q 0,0 20,20 L 80,80 Q 100,100 80,100 L 20,100 Q 0,100 0,80 Z" 
                    fill="#E8643A" 
                    stroke="#F9F5F0" 
                    strokeWidth="16" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Top-left Badge Assembly - Adjusted positioning for wrap */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center z-20 pointer-events-none">
                <div className="absolute inset-2 bg-sc-cream rounded-[24px] sm:rounded-[32px]"></div>
                <div className="absolute inset-0 border-[1.5px] border-sc-navy rounded-[24px] sm:rounded-[32px]"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 sm:w-6 sm:h-6 bg-sc-cream border-b-[1.5px] border-r-[1.5px] border-sc-navy rotate-45 translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                <div className="absolute inset-[1.5px] bg-sc-cream rounded-[22px] sm:rounded-[30.5px]"></div>
                
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-sc-navy rounded-[16px] sm:rounded-[20px] flex items-center justify-center shadow-lg pointer-events-auto">
                  <HugeiconsIcon icon={FavouriteIcon} className="w-5 h-5 sm:w-7 sm:h-7 text-white fill-white" />
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Bottom-right Badge Assembly - Adjusted positioning for wrap */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center z-20 pointer-events-none">
                <div className="absolute inset-3 sm:inset-4 bg-sc-cream rounded-[30px] sm:rounded-[40px]"></div>
                <div className="absolute inset-0 border-[1.5px] border-sc-navy rounded-[30px] sm:rounded-[40px]"></div>
                <div className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 w-6 h-6 sm:w-8 sm:h-8 bg-sc-cream border-t-[1.5px] border-l-[1.5px] border-sc-navy rotate-45 -translate-x-1.5 -translate-y-1.5 sm:-translate-x-2 sm:-translate-y-2" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
                <div className="absolute inset-[1.5px] bg-sc-cream rounded-[28px] sm:rounded-[38.5px]"></div>
                
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-[20px] sm:rounded-[28px] shadow-xl overflow-hidden border-[1.5px] border-sc-navy/5 pointer-events-auto bg-sc-peach">
                  <Image src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=85" fill className="object-cover object-[70%_70%]" alt="Detail" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-11 sm:h-11 bg-sc-cream rounded-tl-[15px] sm:rounded-tl-[20px] flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-sc-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 12a5 5 0 0 1 10 0" />
                      <circle cx="12" cy="7" r="3" />
                      <path d="M12 17v4" />
                      <path d="M9 21h6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW BOTTOM CARDS matching the UI */}
      <section className="pb-24 pt-10 bg-sc-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-6">

            {/* Card 1 */}
            <div className="bg-transparent border-[1.5px] border-sc-navy rounded-[17px] px-6 py-4 relative rounded-tr-[80px] bg-white">
              <div className="w-12 h-12 rounded-full border border-sc-peach flex items-center justify-center mb-2">
                <HugeiconsIcon icon={HealtcareIcon} className="w-6 h-6 text-sc-terracotta" />
              </div>
              <h3 className="text-2xl font-bold text-sc-navy mb-4">
                Professional Care
              </h3>
              <p className="text-sc-steel text-sm leading-relaxed max-w-[70%]">
                We understand the importance of entrusting your children&apos;s well-being to capable and caring hands.
              </p>
              <div className="absolute top-7 right-7 bg-sc-navy w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-sc-terracotta transition-colors">
                <HugeiconsIcon icon={ArrowUpRight01Icon} className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Card 2 & 3 Combined */}
            <div className="border-[1.5px] border-sc-navy rounded-[17px] pe-8 flex flex-col sm:flex-row gap-8 items-center bg-white">
              <div className="border-e-[1.5px] border-e-sc-navy rounded-[17px] px-6 py-4 flex flex-col sm:flex-row gap-8 items-center bg-white">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-full border border-sc-peach flex items-center justify-center mb-2">
                    <HugeiconsIcon icon={BadgeDollarSignIcon} className="w-6 h-6 text-sc-terracotta" />
                  </div>
                  <h3 className="text-2xl font-bold text-sc-navy mb-4">
                    Low Cost Service
                  </h3>
                  <p className="text-sc-steel text-sm leading-relaxed max-w-[70%]">
                    We believe that every child deserves exceptional care, regardless of budget constraints.
                  </p>
                </div>

                {/* Right inner section */}
                <div className="sm:w-[200px] flex flex-col justify-between h-full shrink-0 py-3">
                  <h4 className="text-[26px] font-bold text-sc-navy italic leading-8">
                    More Than 50 Caregivers
                  </h4>
                  <div className="flex -space-x-3 ">
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="avatar 1" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="avatar 2" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="avatar 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADAPTED ABOUT SECTION */}
      <section className="bg-white py-24 rounded-t-[3rem] border-t border-sc-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left relative">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
                alt="Sumsy Childcare facility"
                width={600}
                height={420}
                className="rounded-[32px] object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-sc-terracotta rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <HugeiconsIcon icon={Shield01Icon} className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">Ofsted Registered</p>
                  <p className="text-sm opacity-90">Eltham, SE9</p>
                </div>
              </div>
            </div>
            <div className="reveal-right">
              <h2 className="section-title mb-6">Dedicated, Personal Care for Every Child</h2>
              <p className="text-sc-steel text-lg leading-relaxed mb-6">
                Sumsy Childcare Limited is an owner-operated childcare
                service based in Eltham, SE9. We specialise in safe, reliable, and nurturing
                care for children aged 5 to 16 — with flexible hours that genuinely work for
                busy families.
              </p>
              <ul className="space-y-4 mb-8">
                {['Consistent, personal attention from the owner', 'Flexible hours including evenings and weekends', 'Quick response via phone or WhatsApp'].map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sc-steel">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-6 h-6 text-sc-teal flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ADAPTED TESTIMONIALS */}
      <section className="bg-sc-sand py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="section-title">What Families Are Saying</h2>
            <p className="section-subtitle mx-auto">Hear from parents across SE9 who trust us with their most precious ones.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={t.name} className="reveal bg-white border border-sc-navy/10 rounded-[32px] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <HugeiconsIcon icon={QuoteUpIcon} className="w-8 h-8 text-sc-terracotta mb-6" />
                <p className="text-sc-navy text-lg leading-relaxed mb-8 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sc-terracotta/10 text-sc-terracotta flex items-center justify-center font-bold text-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sc-navy">{t.name}</p>
                    <p className="text-sm text-sc-steel">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-sc-navy py-24 relative overflow-hidden text-center text-white">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Ready to Find Great Childcare?
          </h2>
          <p className="text-sc-sand text-lg mb-10">
            Get in touch today — by phone, WhatsApp, or email. We would love
            to hear about your child and find a care arrangement that works for your family.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us Now
            </Link>
            <a
              href="https://wa.me/447448364115?text=Hi%20Sumsy%20Childcare!%20I'd%20like%20to%20enquire%20about%20childcare."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-sc-navy transition-all duration-300"
            >
              WhatsApp Us
              <HugeiconsIcon icon={ChevronRight} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
