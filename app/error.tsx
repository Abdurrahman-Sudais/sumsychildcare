'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { Refresh01Icon, Home01Icon, Alert01Icon } from '@hugeicons/core-free-icons'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-sc-cream font-quicksand">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-sc-terracotta rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-sc-terracotta/20">
          <HugeiconsIcon icon={Alert01Icon} className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-4xl font-bold text-sc-navy mb-4">
          Something Went Wrong
        </h1>

        <p className="text-sc-steel mb-10 leading-relaxed font-bold">
          We hit an unexpected snag. Don't worry — we're on it. 
          Please try again or head back home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="bg-sc-terracotta text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-sc-navy transition-all shadow-lg flex items-center justify-center gap-2">
            <HugeiconsIcon icon={Refresh01Icon} className="w-5 h-5" />
            Try Again
          </button>
          <Link href="/" className="bg-white text-sc-navy px-8 py-4 rounded-2xl font-bold text-sm border border-sc-navy/10 hover:border-sc-terracotta transition-all shadow-sm flex items-center justify-center gap-2">
            <HugeiconsIcon icon={Home01Icon} className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
