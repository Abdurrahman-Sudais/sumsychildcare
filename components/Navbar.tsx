'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HugeiconsIcon } from '@hugeicons/react'
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import logo from '@/app/Assets/SunsyChildCare.png'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <div className="w-full max-w-6xl mx-auto pointer-events-auto">
          {/* Main Floating Nav Pill */}
          <div className="bg-white/80 backdrop-blur-xl border border-sc-navy/10 rounded-full px-2 py-2 flex justify-between items-center shadow-lg">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 pl-3 sm:pl-5 pr-2 group">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 transition-transform group-hover:scale-110">
                <Image
                  src={logo}
                  alt="Sumsy Childcare"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-sm sm:text-base font-bold text-sc-navy tracking-tight whitespace-nowrap">
                Sumsy <span className="text-sc-terracotta">Childcare</span>
              </span>
            </Link>

            {/* Desktop Links (Hidden on mobile/tablet) */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-sc-terracotta bg-sc-terracotta/5'
                      : 'text-sc-navy hover:text-sc-terracotta hover:bg-sc-navy/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Action Group */}
            <div className="flex items-center gap-2 pr-1">
              {/* Desktop/Tablet CTA - Visible down to md */}
              <div className="hidden md:block">
                <Link
                  href="/enroll"
                  className="group flex items-center bg-sc-navy border border-sc-navy rounded-full p-1 pl-5 gap-3 transition-all duration-300 hover:bg-sc-steel active:scale-95"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Enroll Now
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 text-sc-navy" />
                  </div>
                </Link>
              </div>

              {/* Mobile/Tablet Hamburger Button - Visible up to lg */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-sc-navy/5 text-sc-navy hover:bg-sc-navy/10 transition-colors"
                aria-label="Toggle menu"
              >
                <HugeiconsIcon icon={isOpen ? Cancel01Icon : Menu01Icon} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-white transition-all duration-500 ease-in-out flex flex-col ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Mobile Header in Menu */}
        <div className="flex items-center justify-between px-8 py-8">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src={logo}
                alt="Sumsy Childcare"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-sc-navy tracking-tight">Sumsy <span className="text-sc-terracotta">Childcare</span></span>
          </Link>
          
          <button onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full text-sc-navy hover:bg-sc-navy/5 transition-colors"
            aria-label="Close menu">
            <HugeiconsIcon icon={Cancel01Icon} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex-1 flex flex-col px-10 pt-10 space-y-6 sm:space-y-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl sm:text-5xl font-bold tracking-tighter transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${
                pathname === link.href ? 'text-sc-terracotta' : 'text-sc-navy'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Bottom Action */}
        <div className="p-10 pb-16">
          <Link
            href="/enroll"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-6 rounded-full bg-sc-navy text-white text-xl font-bold shadow-2xl active:scale-95 transition-all"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </>
  )
}
