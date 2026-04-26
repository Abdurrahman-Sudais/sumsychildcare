'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Phone } from 'lucide-react'

const navLinks = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About'    },
  { href: '/services', label: 'Services' },
  { href: '/gallery',  label: 'Gallery'  },
  { href: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-sky-100'
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4AB8E8] to-[#6DD5A3] rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <Sun className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xl font-extrabold text-[#2D4A8A] leading-none block"
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                Sumsy<span className="text-[#4AB8E8]"> Childcare</span>
              </span>
              <span className="text-[10px] text-[#6B7280] font-medium leading-none tracking-wide"
                style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Ofsted Registered · Eltham SE9
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-sky-50 hover:text-[#4AB8E8] ${
                  pathname === link.href ? 'text-[#4AB8E8] bg-sky-50' : 'text-[#374151]'
                }`}
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+447448364115"
              className="inline-flex items-center gap-2 bg-[#4AB8E8] hover:bg-[#2D9FD4] text-white font-bold text-sm px-5 py-2.5 rounded-2xl transition-all duration-200 shadow-md"
              style={{ fontFamily: 'Nunito, sans-serif' }}>
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-[#374151] hover:bg-sky-50 hover:text-[#4AB8E8] transition-colors"
            aria-label="Toggle menu" aria-expanded={isOpen}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-sky-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                pathname === link.href
                  ? 'text-[#4AB8E8] bg-sky-50'
                  : 'text-[#374151] hover:bg-sky-50 hover:text-[#4AB8E8]'
              }`}
              style={{ fontFamily: 'Nunito, sans-serif' }}>
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <a href="tel:+447448364115"
              className="flex items-center justify-center gap-2 bg-[#4AB8E8] text-white font-bold text-sm px-5 py-3 rounded-2xl w-full"
              style={{ fontFamily: 'Nunito, sans-serif' }}>
              <Phone className="w-4 h-4" />
              Call +44 7448 364115
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
