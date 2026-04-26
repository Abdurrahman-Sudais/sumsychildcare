'use client'
 
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
 
export default function ScrollAnimations() {
  const pathname = usePathname()
 
  useEffect(() => {
    // Small delay to let the new page's DOM render first
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      )
 
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      elements.forEach((el) => {
        // Reset visibility so animation replays on new page
        el.classList.remove('visible')
        observer.observe(el)
      })
 
      return () => observer.disconnect()
    }, 100)
 
    return () => clearTimeout(timer)
  }, [pathname]) // re-runs every time the route changes
 
  return null
}