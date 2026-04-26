import type { Metadata } from 'next'
import './globals.css'
import SiteShell from '@/components/SiteShell'

export const metadata: Metadata = {
  title: {
    default: 'Sumsy Childcare Limited | Ofsted Registered · Eltham SE9',
    template: '%s | Sumsy Childcare Limited',
  },
  description:
    'Sumsy Childcare Limited — Ofsted-registered, owner-operated childcare for children aged 6–16 in Eltham, SE9. Flexible hours 7 days a week. Call or WhatsApp +44 7448 364115.',
  keywords: [
    'childcare Eltham',
    'childcare SE9',
    'Ofsted registered childcare',
    'after school care Eltham',
    'childcare ages 6 to 16',
    'Sumsy Childcare Limited',
    'holiday childcare London',
    'before school care SE9',
  ],
  openGraph: {
    title: 'Sumsy Childcare Limited | Ofsted Registered · Eltham SE9',
    description:
      'Safe, personal, Ofsted-registered childcare for ages 6–16 in Eltham. Flexible hours 7 days a week.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Sumsy Childcare Limited',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumsy Childcare Limited | Eltham SE9',
    description:
      'Ofsted-registered childcare for ages 5–16 in Eltham. Flexible hours 7 days a week.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
