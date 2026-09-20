'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/app/Assets/SunsyChildCare.png'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Skip the splash entirely for users who've asked for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setLoading(false)
      return
    }

    // Brief branded splash on first load only — short enough not to feel like a delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 900)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-sc-cream flex flex-col items-center justify-center"
        >
          <div className="relative">
            {/* Animated Circles */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-[-20px] border-2 border-dashed border-sc-terracotta/30 rounded-full"
            />
            
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-[40px] shadow-2xl flex items-center justify-center p-6 border border-sc-navy/5"
            >
              <Image
                src={logo}
                alt="Sumsy Childcare"
                fill
                className="object-contain p-6"
                priority
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold text-sc-navy tracking-tighter">
              Sumsy <span className="text-sc-terracotta">Childcare</span>
            </h2>
            <div className="mt-4 flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 rounded-full bg-sc-terracotta"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
