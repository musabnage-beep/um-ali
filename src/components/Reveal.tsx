import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { Variants } from 'motion/react'
import { cn } from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1] as const

const variants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay },
  }),
}

type RevealProps = {
  children: ReactNode
  /** Seconds to wait before starting — use small increments to stagger siblings. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section' | 'figure'
}

/**
 * Fades and lifts its children into view once, the first time they are scrolled
 * to. Renders statically when the user prefers reduced motion.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  if (reduced) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={cn(className)}
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
    >
      {children}
    </Component>
  )
}
