'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, Home } from 'lucide-react'

// app/error.tsx — shown when an unhandled error occurs
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service in production
    console.error(error)
  }, [error])

  return (
    <section className="hero-pattern min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#FF8C74] to-[#E8634F] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-3xl">⚠️</span>
        </div>

        <h1 className="text-3xl font-extrabold text-[#2D4A8A] mb-3"
          style={{ fontFamily: 'Nunito, sans-serif' }}>
          Something Went Wrong
        </h1>

        <p className="text-[#6B7280] mb-8 leading-relaxed"
          style={{ fontFamily: 'Quicksand, sans-serif' }}>
          We hit an unexpected snag. Don&apos;t worry — our team has been
          notified. Please try again or head back home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn-primary">
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
