import Link from 'next/link'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { Sun01Icon, MapPinIcon, Call02Icon, Mail01Icon, FavouriteIcon } from '@hugeicons/core-free-icons'
import logo from '@/app/Assets/SunsyChildCare.png'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const socialLinks = [
  { Icon: InstagramIcon, href: '#', label: 'Instagram', hover: 'hover:text-pink-400' },
  { Icon: FacebookIcon,  href: '#', label: 'Facebook',  hover: 'hover:text-blue-400' },
  { Icon: WhatsAppIcon,  href: 'https://wa.me/447448364115', label: 'WhatsApp', hover: 'hover:text-green-400' },
]

const quickLinks = [
  { href: '/',         label: 'Home'        },
  { href: '/about',    label: 'About Us'    },
  { href: '/services', label: 'Our Services' },
  { href: '/gallery',  label: 'Gallery'     },
  { href: '/contact',  label: 'Contact'     },
]

const serviceLinks = [
  'After-School Care',
  'Before-School Care',
  'Holiday & School Break Cover',
  'Flexible & Weekend Care',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-sc-navy text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 bg-white/80 backdrop-blur-xl border border-sc-navy/10 rounded-full">
                <Image
                  src={logo}
                  alt="Sumsy Childcare"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold leading-tight">
                Sumsy<span className="text-sc-terracotta"> Childcare</span>
                <span className="block text-xs font-bold text-white/50 tracking-wide">Limited</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Ofsted-registered, owner-operated childcare in Eltham, SE9.
              Safe, flexible care for children aged 6–16, seven days a week.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label, hover }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 ${hover} transition-all duration-200 hover:scale-110`}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}
                    className="text-white/65 hover:text-sc-terracotta text-sm font-bold transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-sc-terracotta opacity-70" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-white mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link href="/services"
                    className="text-white/65 hover:text-sc-teal text-sm font-bold transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-sc-teal opacity-70" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-white mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sc-terracotta/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HugeiconsIcon icon={MapPinIcon} className="w-4 h-4 text-sc-terracotta" />
                </div>
                <p className="text-white/70 text-sm">
                  74 Footcray Road<br />
                  Eltham, London SE9 2SU
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sc-teal/20 flex items-center justify-center flex-shrink-0">
                  <HugeiconsIcon icon={Call02Icon} className="w-4 h-4 text-sc-teal" />
                </div>
                <a href="tel:+447448364115"
                  className="text-white/70 hover:text-white text-sm transition-colors">
                  +44 7448 364115
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sc-peach/20 flex items-center justify-center flex-shrink-0">
                  <HugeiconsIcon icon={Mail01Icon} className="w-4 h-4 text-sc-peach" />
                </div>
                <a href="mailto:Sumsychildcareltd@myyahoo.com"
                  className="text-white/70 hover:text-white text-sm transition-colors break-all">
                  Sumsychildcareltd@myyahoo.com
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs font-bold text-sc-terracotta mb-1">
                OPENING HOURS
              </p>
              <p className="text-white/60 text-xs">
                Mon–Fri: 7:00 AM – 9:00 PM<br />
                Saturday: 10:00 AM – 8:00 PM<br />
                Sunday: 11:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            © {year} Sumsy Childcare Limited. All rights reserved. Made with{' '}
            <HugeiconsIcon icon={FavouriteIcon} className="w-3 h-3 inline text-sc-terracotta" /> for families.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a key={t} href="#"
                className="text-white/50 hover:text-white text-xs transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
