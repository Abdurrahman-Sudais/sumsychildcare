'use client'

import { motion, useInView, HTMLMotionProps } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimateInProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  distance?: number
  viewOnce?: boolean
}

export default function AnimateIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = '',
  viewOnce = true,
  ...props
}: AnimateInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: viewOnce, margin: "-100px" })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, opacity: 0 }
      case 'down': return { y: -distance, opacity: 0 }
      case 'left': return { x: distance, opacity: 0 }
      case 'right': return { x: -distance, opacity: 0 }
      case 'none': return { opacity: 0, scale: 0.95 }
      default: return { y: distance, opacity: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? { x: 0, y: 0, opacity: 1, scale: 1 } : getInitialPosition()}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
