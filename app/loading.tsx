// app/loading.tsx
// Shown by Next.js during page transitions (Suspense boundary)

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo mark */}
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4AB8E8] to-[#6DD5A3] flex items-center justify-center shadow-lg animate-pulse">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
          </div>
          {/* Spinning ring */}
          <div className="absolute -inset-1.5 rounded-3xl border-2 border-[#4AB8E8]/30 border-t-[#4AB8E8] animate-spin" />
        </div>

        {/* Label */}
        <p className="text-[#2D4A8A] font-bold text-sm tracking-wide"
          style={{ fontFamily: 'Nunito, sans-serif' }}>
          Loading…
        </p>
      </div>
    </div>
  )
}
