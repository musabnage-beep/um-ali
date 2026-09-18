import { useEffect } from 'react'

/**
 * Freezes background scrolling while an overlay is open, compensating for the
 * removed scrollbar so the page never shifts sideways as it locks.
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const { body, documentElement } = document
    const previousOverflow = body.style.overflow
    const previousPadding = body.style.paddingInlineEnd
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingInlineEnd = `${scrollbarWidth}px`

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingInlineEnd = previousPadding
    }
  }, [locked])
}
