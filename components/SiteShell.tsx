'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollAnimations from '@/components/ScrollAnimations'

// Routes that should show NO navigation (standalone landing pages)
const LANDING_ROUTES = ['/enroll']

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLanding = LANDING_ROUTES.some(r => pathname === r || pathname.startsWith(r + '/'))

  if (isLanding) {
    return (
      <>
        <main>{children}</main>
        <WhatsAppFloat />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <ScrollAnimations />
    </>
  )
}
