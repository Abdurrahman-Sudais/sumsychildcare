import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { Home01Icon, ArrowLeft01Icon } from '@hugeicons/core-free-icons'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-sc-cream">
      <div className="max-w-lg w-full text-center">
        <div className="text-9xl font-bold text-sc-terracotta mb-6 leading-none tracking-tighter">
          404
        </div>

        <h1 className="text-4xl font-bold text-sc-navy mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-sc-steel mb-10 leading-relaxed font-bold">
          Looks like this page went out to play and hasn't come back yet!
          Let's get you back to somewhere familiar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-sc-terracotta text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-sc-navy transition-all shadow-lg flex items-center justify-center gap-2">
            <HugeiconsIcon icon={Home01Icon} className="w-5 h-5" />
            Back to Home
          </Link>
          <Link href="/contact" className="bg-white text-sc-navy px-8 py-4 rounded-2xl font-bold text-sm border border-sc-navy/10 hover:border-sc-terracotta transition-all shadow-sm flex items-center justify-center gap-2">
            <HugeiconsIcon icon={ArrowLeft01Icon} className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
