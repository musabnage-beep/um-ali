import { useEffect, useState } from 'react'

/**
 * Reports which of the given section ids currently owns the viewport, so the
 * navbar can highlight the matching link. Uses IntersectionObserver rather than
 * a scroll listener to stay off the main thread.
 */
export function useScrollSpy(ids: readonly string[], offset = 88): string {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio)
          else visible.delete(entry.target.id)
        }

        if (visible.size === 0) return

        // The section showing the most of itself wins.
        let best = ''
        let bestRatio = -1
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        })
        setActiveId(best)
      },
      {
        rootMargin: `-${offset}px 0px -45% 0px`,
        threshold: [0.05, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}
