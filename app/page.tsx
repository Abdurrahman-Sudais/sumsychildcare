import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  StarIcon as FavouriteIcon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  SparklesIcon,
  Medicine01Icon as HealthcareIcon,
  BadgeDollarSignIcon,
  UserGroupIcon,
  SmileIcon,
  Shield01Icon,
  CheckmarkBadge01Icon as TickIcon,
  QuoteUpIcon,
  CallIcon,
  Mail01Icon,
  WhatsappIcon,
} from '@hugeicons/core-free-icons'
import heroImg from '@/app/Assets/SunsyCareHeroImage.png'
import logo from '@/app/Assets/SunsyChildCare.png'
import AnimateIn from '@/components/AnimateIn'
import Magnetic from '@/components/Magnetic'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Home | Sumsy Childcare Limited',
  description:
    'Sumsy Childcare Limited: Ofsted-registered, professional childcare for children aged 6–16. Safe, stimulating environment in Eltham, SE9. Flexible hours 7 days a week.',
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

const dailyRhythm = [
  { time: '08:00 AM', activity: 'Arrival & Free Play', icon: SmileIcon },
  { time: '10:00 AM', activity: 'Snack & Outdoor Play', icon: SparklesIcon },
  { time: '12:00 PM', activity: 'Nutritious Lunch', icon: HealthcareIcon },
  { time: '02:00 PM', activity: 'Quiet Time & Learning', icon: TickIcon },
  { time: '04:00 PM', activity: 'Afternoon Tea & Creative Arts', icon: FavouriteIcon },
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
              <AnimateIn direction="right" delay={0.1}>
                <h1 className="text-5xl xs:text-6xl md:text-7xl lg:text-[88px] font-bold text-sc-navy leading-[0.9] tracking-tighter mb-8">
                  Where <span className="text-sc-terracotta">Growth</span> <br />
                  Begins with <br />
                  Joyful Care.
                </h1>
              </AnimateIn>
              
              <AnimateIn direction="right" delay={0.2}>
                <p className="text-lg md:text-xl text-sc-steel max-w-[480px] mb-10 leading-relaxed font-medium">
                  Professional, Ofsted-registered childcare in Eltham, SE9.
                  From safety to joyous learning.
                </p>
              </AnimateIn>

              <AnimateIn direction="right" delay={0.3} className="flex flex-row items-center gap-6 mb-12 max-w-[400px]">
                <Magnetic>
                  <Link href="#enquire" className="btn-primary px-8 py-4 text-lg">
                    Enroll Now
                  </Link>
                </Magnetic>
                
                <span className='text-sc-steel font-medium'>or</span>

                <Magnetic>
                  <Link href="/about" className="group flex items-center text-sc-navy font-bold text-[17px] underline decoration-2 underline-offset-4 hover:decoration-sc-terracotta transition-colors">
                    Meet Our Carer
                  </Link>
                </Magnetic>
              </AnimateIn>
            </div>

            {/* Right Content - Image composition */}
            <div className="relative animate-fade-up w-[88%] xs:w-[85%] md:w-full min-w-[200px] max-w-[320px] md:max-w-[440px] mx-auto lg:ml-auto aspect-[4/4.5] md:-mt-4">               
              
              {/* Main Decorative Outline */}
              <div className="absolute inset-0 border-[1.5px] border-sc-navy rounded-[40px] pointer-events-none"></div>

              {/* Main Image Container */}
              <div className="absolute inset-[16px] sm:inset-[24px] bg-sc-peach rounded-[32px] shadow-sm overflow-hidden z-10">
                <Image
                  src={heroImg}
                  alt="Sumsy Childcare Hero"
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
                  <Image src={heroImg} fill className="object-cover object-[70%_70%]" alt="Detail" />
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

      {/* FLEXIBLE CARE SECTION (Replaced Programs) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="section-title">Flexible Care for Your Life</h2>
            <p className="section-subtitle mx-auto">Providing reliable support for children aged 6–16, seven days a week.</p>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: '7-Day Availability', 
                desc: 'We understand that work doesn\'t always happen 9-5. We offer care every day of the week, including weekends.',
                icon: SparklesIcon,
                delay: 0.1
              },
              { 
                title: 'School-Age Focus', 
                desc: 'Specifically designed for children aged 6–16, with a balance of homework support and recreational fun.',
                icon: UserGroupIcon,
                delay: 0.2
              },
              { 
                title: 'Personalized Attention', 
                desc: 'As an owner-operated service, your child receives consistent, high-quality care from the same dedicated professional.',
                icon: SmileIcon,
                delay: 0.3
              }
            ].map((item) => (
              <AnimateIn key={item.title} delay={item.delay} direction="up" distance={30}>
                <div className="h-full p-10 rounded-[40px] bg-sc-cream border-[1.5px] border-sc-navy/5 hover:border-sc-terracotta/20 transition-all duration-300 hover:shadow-xl group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-sc-navy/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <HugeiconsIcon icon={item.icon} className="w-7 h-7 text-sc-terracotta" />
                  </div>
                  <h3 className="text-2xl font-bold text-sc-navy mb-4">{item.title}</h3>
                  <p className="text-sc-steel leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & SAFETY SECTION */}
      <section className="bg-sc-navy py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="right">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Your Child&apos;s Safety is Our Absolute Priority</h2>
              <p className="text-sc-sand text-lg mb-10 leading-relaxed">
                We maintain the highest standards of safety and care, ensuring every child in our center is protected, nurtured, and respected.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Ofsted Registered', desc: 'Fully compliant with national standards.', icon: Shield01Icon },
                  { title: 'Safe Recruitment', desc: 'Rigorous enhanced DBS background checks.', icon: UserGroupIcon },
                  { title: 'First Aid Certified', desc: 'All staff trained in pediatric CPR & First Aid.', icon: HealthcareIcon },
                  { title: 'Secure Access', desc: 'Modern security systems and entry protocols.', icon: Shield01Icon },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <HugeiconsIcon icon={item.icon} className="w-6 h-6 text-sc-terracotta" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sc-sand text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.2} className="relative aspect-square max-w-[500px] mx-auto lg:ml-auto">
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80"
                alt="Safe and happy children"
                fill
                className="rounded-[40px] object-cover border-4 border-white/10 shadow-2xl"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* DAILY RHYTHM SECTION */}
      <section className="py-24 bg-sc-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="section-title">A Day in the Life</h2>
            <p className="section-subtitle mx-auto">Our daily rhythm provides the perfect balance of structure and spontaneous fun.</p>
          </div>
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[1.5px] bg-sc-navy/10"></div>
            
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-6">
              {dailyRhythm.map((item, idx) => (
                <div key={item.activity} className="relative z-10 flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
                  <div className="w-24 h-24 rounded-3xl bg-white border-[1.5px] border-sc-navy flex items-center justify-center mb-6 shadow-sm shrink-0 lg:group-hover:bg-sc-terracotta lg:transition-colors">
                    <HugeiconsIcon icon={item.icon} className="w-10 h-10 text-sc-terracotta" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-sc-terracotta text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {item.time}
                    </span>
                    <h4 className="text-lg font-bold text-sc-navy">{item.activity}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="right" className="relative">
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
            </AnimateIn>
            <AnimateIn direction="left" delay={0.2}>
              <h2 className="section-title mb-6">Dedicated, Personal Care for Every Child</h2>
              <p className="text-sc-steel text-lg leading-relaxed mb-6">
                Sumsy Childcare Limited is an owner-operated childcare
                service based in Eltham, SE9. We specialise in safe, reliable, and nurturing
                care for children aged 6 to 16 — with flexible hours that genuinely work for
                busy families.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Qualified and experienced caregivers',
                  'Stimulating indoor and outdoor activities',
                  'Flexible sessions tailored to your needs',
                  'Ofsted-registered safe environment',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sc-navy font-bold">
                    <div className="w-6 h-6 rounded-full bg-sc-terracotta/10 flex items-center justify-center">
                      <HugeiconsIcon icon={TickIcon} className="w-3.5 h-3.5 text-sc-terracotta" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Magnetic>
                <Link href="#enquire" className="btn-primary px-8 py-4">
                  Learn More About Us
                </Link>
              </Magnetic>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-sc-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="section-title">What Parents Say</h2>
            <p className="section-subtitle mx-auto">Real stories from families in our community.</p>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 0.1} direction="up" distance={20}>
                <div className="h-full bg-white border border-sc-navy/10 rounded-[32px] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <HugeiconsIcon key={i} icon={FavouriteIcon} className="w-5 h-5 text-sc-terracotta fill-sc-terracotta group-hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  <HugeiconsIcon icon={QuoteUpIcon} className="w-8 h-8 text-sc-terracotta/20 mb-6" />
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
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimateIn className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">Common questions parents ask about our center.</p>
          </AnimateIn>
          <div className="space-y-4">
            {[
              { q: 'What are your opening hours?', a: 'We offer flexible hours 7 days a week, typically from 8:00 AM to 6:30 PM, but we can discuss specific arrangements for your family.' },
              { q: 'Is there an enrollment fee?', a: 'We have a simple registration process. Contact us for our current fee schedule and to discuss available slots.' },
              { q: 'What is your sick policy?', a: 'To ensure the health of all children, we ask that children with a fever or contagious illness stay home until they are symptom-free for 24 hours.' },
              { q: 'Are you Ofsted registered?', a: 'Yes! Sumsy Childcare is fully Ofsted registered, and we maintain the highest standards of safety and educational care.' },
            ].map((faq, i) => (
              <AnimateIn key={faq.q} delay={i * 0.1} direction="none" distance={0}>
                <details className="group border-[1.5px] border-sc-navy/10 rounded-2xl overflow-hidden transition-all duration-300">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-sc-navy bg-white hover:bg-sc-cream transition-colors list-none">
                    {faq.q}
                    <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 text-sc-terracotta group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="p-6 pt-0 text-sc-steel leading-relaxed bg-white">
                    {faq.a}
                  </div>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA & LEAD CAPTURE */}
      <section className="bg-sc-navy py-24 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="right">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to join our family?</h2>
              <p className="text-xl text-sc-sand mb-12 max-w-lg leading-relaxed">
                Contact us today to arrange a visit or to discuss your child&apos;s 
                needs. We can&apos;t wait to meet you!
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="tel:+447448364115" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-sc-terracotta transition-colors">
                    <HugeiconsIcon icon={CallIcon} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-sc-sand uppercase tracking-widest">Call Us</p>
                    <span className="text-lg font-bold">07448 364115</span>
                  </div>
                </a>
                <a href="https://wa.me/447448364115" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-sc-terracotta transition-colors">
                    <HugeiconsIcon icon={WhatsappIcon} className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold">Chat on WhatsApp</span>
                </a>
                <a href="mailto:Sumsychildcareltd@myyahoo.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-sc-terracotta transition-colors">
                    <HugeiconsIcon icon={Mail01Icon} className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold">Sumsychildcareltd@myyahoo.com</span>
                </a>
              </div>
            </AnimateIn>
            
            <AnimateIn id="enquire" direction="left" delay={0.2} className="bg-white rounded-[40px] p-8 md:p-12 text-sc-navy shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Enquire Now</h3>
              <EnquiryForm
                secondField={{ name: 'childAge', label: "Child's Age", placeholder: 'Age' }}
                submitLabel="Submit Enquiry"
              />
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
