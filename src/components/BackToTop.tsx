import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUp } from 'lucide-react'

/** Appears once the visitor is well past the hero, then returns them to the top. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.2)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
          }
          aria-label="العودة إلى أعلى الصفحة"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 end-5 z-40 grid size-12 place-items-center rounded-full border border-taupe/45 bg-ivory/92 text-bark shadow-[var(--shadow-card)] backdrop-blur transition-colors duration-400 hover:bg-bark hover:text-ivory sm:bottom-8 sm:end-8"
        >
          <ArrowUp className="size-5" aria-hidden="true" strokeWidth={1.6} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
