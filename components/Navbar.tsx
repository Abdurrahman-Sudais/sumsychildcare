'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { HugeiconsIcon } from '@hugeicons/react'
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import logo from '@/app/Assets/SunsyChildCare.png'
import Magnetic from '@/components/Magnetic'

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
  const { scrollY } = useScroll()
  
  const headerY = useTransform(scrollY, [0, 100], [0, -4])
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98])
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <>
      <motion.header 
        style={{ y: headerY, scale: headerScale, opacity: headerOpacity }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 pointer-events-none"
      >
        <div className="w-full max-w-6xl mx-auto pointer-events-auto">
          <div className="bg-white/70 backdrop-blur-2xl border border-sc-navy/5 rounded-full px-2 py-2 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-500 hover:bg-white/90">
            
            <Magnetic strength={0.2}>
              <Link href="/" className="flex items-center gap-2 pl-3 sm:pl-5 pr-2 group">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 transition-transform group-hover:rotate-[10deg]">
                  <Image src={logo} alt="Sumsy Childcare" fill className="object-contain" priority />
                </div>
                <span className="text-sm sm:text-base font-bold text-sc-navy tracking-tight whitespace-nowrap">
                  Sumsy <span className="text-sc-terracotta">Childcare</span>
                </span>
              </Link>
            </Magnetic>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    pathname === link.href ? 'text-sc-terracotta' : 'text-sc-navy hover:text-sc-terracotta'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-sc-terracotta/5 rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 pr-1">
              <div className="hidden md:block">
                <Magnetic strength={0.3}>
                  <Link
                    href="/#enquire"
                    className="group flex items-center bg-sc-navy border border-sc-navy rounded-full p-1 pl-5 gap-3 transition-all duration-300 hover:bg-sc-steel active:scale-95"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white">Enroll Now</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                      <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 text-sc-navy" />
                    </div>
                  </Link>
                </Magnetic>
              </div>

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
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-8">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image src={logo} alt="Sumsy Childcare" fill className="object-contain" />
                </div>
                <span className="text-xl font-bold text-sc-navy tracking-tight">Sumsy <span className="text-sc-terracotta">Childcare</span></span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full text-sc-navy hover:bg-sc-navy/5 transition-colors">
                <HugeiconsIcon icon={Cancel01Icon} className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col px-10 pt-10 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-5xl font-bold tracking-tighter ${pathname === link.href ? 'text-sc-terracotta' : 'text-sc-navy'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="p-10 pb-16"
            >
              <Link
                href="/#enquire"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full py-6 rounded-full bg-sc-navy text-white text-xl font-bold shadow-2xl active:scale-95 transition-all"
              >
                Enroll Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
