import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Expand } from 'lucide-react'
import { Lightbox } from '@/components/Lightbox'
import { Figure } from '@/components/Figure'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { galleryCategories, galleryItems } from '@/data/gallery'
import { cn } from '@/lib/cn'

const ALL = 'all'

/** Varied ratios give the masonry column flow its editorial rhythm. */
const ratioByAspect = {
  portrait: '3 / 4',
  landscape: '4 / 3',
  square: '1 / 1',
} as const

export function Portfolio() {
  const [filter, setFilter] = useState<string>(ALL)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  const visible = useMemo(
    () => (filter === ALL ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  )

  // Only offer filters that actually have work behind them.
  const filters = useMemo(
    () => [
      { id: ALL, label: 'الكل' },
      ...galleryCategories.filter((category) =>
        galleryItems.some((item) => item.category === category.id),
      ),
    ],
    [],
  )

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-ivory py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="أعمالنا"
          title="معرض الأعمال"
          subtitle="مختارات من القطع التي خرجت من الأتيليه — اضغطي على أي صورة لعرضها بالحجم الكامل."
        />

        {galleryItems.length > 0 && (
          <Reveal delay={0.08} className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12">
            {filters.map((item) => {
              const active = filter === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setFilter(item.id)
                    setOpenIndex(null)
                  }}
                  aria-pressed={active}
                  className={cn(
                    'min-h-11 rounded-[2px] border px-5 text-sm font-medium transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    active
                      ? 'border-bark bg-bark text-ivory'
                      : 'border-taupe/45 text-mocha hover:border-bark hover:text-espresso',
                  )}
                >
                  {item.label}
                </button>
              )
            })}
          </Reveal>
        )}

        {visible.length === 0 ? (
          <p className="mt-12 rounded-[2px] border border-dashed border-taupe/50 px-6 py-14 text-center text-mocha">
            لا توجد أعمال في هذا التصنيف بعد.
          </p>
        ) : (
          <motion.ul
            // Re-keying on the filter replays the entrance for the new set.
            key={filter}
            initial={reduced ? false : 'hidden'}
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="mt-10 gap-4 [column-fill:_balance] sm:columns-2 sm:gap-5 lg:columns-3"
          >
            {visible.map((item, i) => (
              <motion.li
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="mb-4 break-inside-avoid sm:mb-5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`عرض الصورة: ${item.title}`}
                  className="group relative block w-full overflow-hidden rounded-[2px] text-start"
                >
                  <Figure
                    src={item.src}
                    alt={item.alt}
                    ratio={ratioByAspect[item.aspect]}
                    className="w-full"
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  />

                  <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between gap-3 p-5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <span className="text-sm font-medium text-ivory">{item.title}</span>
                    <Expand aria-hidden="true" className="size-4 shrink-0 text-goldsoft" />
                  </span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>

      <Lightbox
        items={visible}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  )
}
