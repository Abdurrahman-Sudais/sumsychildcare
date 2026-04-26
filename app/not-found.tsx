import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="hero-pattern min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Big 404 */}
        <div
          className="text-9xl font-extrabold gradient-text mb-4 leading-none"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          404
        </div>

        {/* Emoji */}
        <div className="text-5xl mb-6">🌈</div>

        <h1
          className="text-3xl font-extrabold text-[#2D4A8A] mb-3"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          Oops! Page Not Found
        </h1>

        <p
          className="text-[#6B7280] mb-10 leading-relaxed"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          Looks like this page went out to play and hasn&apos;t come back yet!
          Let&apos;s get you back to somewhere familiar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            <ArrowLeft className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
