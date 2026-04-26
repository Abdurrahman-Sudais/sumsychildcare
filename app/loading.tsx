export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/50 backdrop-blur-md z-40 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-2xl bg-sc-navy flex items-center justify-center shadow-xl animate-bounce">
            <div className="w-4 h-4 rounded-full bg-sc-terracotta" />
          </div>
          <div className="absolute -inset-2 rounded-full border-2 border-sc-navy/10 border-t-sc-terracotta animate-spin" />
        </div>
        <p className="text-sc-navy font-bold text-xs uppercase tracking-[0.2em] animate-pulse">
          Loading
        </p>
      </div>
    </div>
  )
}
