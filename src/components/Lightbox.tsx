import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Figure } from '@/components/Figure'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

export type LightboxItem = {
  id: string
  src: string
  alt: string
  title?: string
}

type LightboxProps = {
  items: LightboxItem[]
  /** Index of the open item, or null when closed. */
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

const FOCUSABLE = 'button:not([disabled])'

/**
 * Full-screen image viewer.
 *
 * Keyboard: Escape closes, ArrowLeft/ArrowRight move through the set
 * (RTL-mapped, so the arrows match the on-screen buttons). Focus is trapped
 * while open and returned to the trigger on close. Touch users can swipe.
 */
export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null && items.length > 0
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<Element | null>(null)
  const reduced = useReducedMotion()

  useLockBodyScroll(isOpen)

  const go = useCallback(
    (step: number) => {
      if (index === null || items.length === 0) return
      onNavigate((index + step + items.length) % items.length)
    },
    [index, items.length, onNavigate],
  )

  // Remember what opened the dialog so focus can be handed back on close.
  useEffect(() => {
    if (!isOpen) return
    triggerRef.current = document.activeElement
    const first = dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE)
    first?.focus()

    return () => {
      const trigger = triggerRef.current
      if (trigger instanceof HTMLElement) trigger.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      // RTL: the left arrow advances, matching the button on that side.
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        go(1)
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        go(-1)
        return
      }
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, go, onClose])

  const current = index === null ? undefined : items[index]

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/94 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.3 }}
          onMouseDown={(event) => {
            // Only a click on the backdrop itself should dismiss.
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={current.title ?? current.alt}
            className="relative flex max-h-full w-full max-w-5xl flex-col items-center gap-5"
          >
            <div className="flex w-full items-center justify-between gap-4">
              <span dir="ltr" className="text-xs tracking-[0.2em] text-ivory/60" aria-live="polite">
                {index + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="إغلاق معرض الصور"
                className="grid size-11 place-items-center rounded-full border border-ivory/25 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <motion.div
              key={current.id}
              className="w-full touch-pan-y"
              initial={reduced ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              drag={items.length > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={(_, info) => {
                if (info.offset.x > 70) go(1)
                else if (info.offset.x < -70) go(-1)
              }}
            >
              <Figure
                src={current.src}
                alt={current.alt}
                priority
                className="max-h-[68vh] w-full bg-transparent"
                imgClassName="max-h-[68vh] w-full object-contain"
              />
            </motion.div>

            {current.title && (
              <p className="text-center text-sm text-ivory/75">{current.title}</p>
            )}

            {items.length > 1 && (
              // RTL: "previous" sits on the right, "next" on the left, so the
              // arrows point the way the set actually moves.
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="الصورة السابقة"
                  className="grid size-11 place-items-center rounded-full border border-ivory/25 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="الصورة التالية"
                  className="grid size-11 place-items-center rounded-full border border-ivory/25 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
