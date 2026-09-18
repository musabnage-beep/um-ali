import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowLeft, MoveDown } from 'lucide-react'
import { Figure } from '@/components/Figure'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { business, orderLink } from '@/config/business'

const EASE = [0.22, 1, 0.36, 1] as const

/** Entrance choreography: badge → title → subtitle → buttons, one after another. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 34 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
})

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const order = orderLink()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  // A restrained parallax — the image drifts, it does not fly.
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  const anim = (delay: number) => (reduced ? {} : rise(delay))

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-espresso pt-28 pb-16 sm:min-h-svh sm:items-center sm:pb-24"
    >
      <motion.div
        aria-hidden={false}
        style={reduced ? undefined : { y: imageY, scale: imageScale }}
        className="absolute inset-0 -z-20"
      >
        <Figure
          src="/images/hero.webp"
          alt="أقمشة ملفوفة ومرتبة على رفوف داخل ورشة خياطة"
          priority
          sizes="100vw"
          className="size-full"
          imgClassName="size-full object-cover object-center"
        />
      </motion.div>

      {/* The scrim has to carry the text on its own — any photo could sit behind it,
          including a bright one — so it stays near 72% all the way to the top, where
          the transparent navbar sits. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/74 to-ink/72"
      />
      <div aria-hidden="true" className="weave absolute inset-0 -z-10 opacity-40" />

      <div className="shell relative w-full">
        <div className="max-w-2xl">
          <motion.p
            {...anim(0.45)}
            className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-goldsoft"
          >
            <span>خياطة</span>
            <Dot />
            <span>تفصيل</span>
            <Dot />
            <span>تعديل</span>
          </motion.p>

          <motion.h1
            {...anim(0.6)}
            id="hero-title"
            className="mt-6 text-(length:--text-hero) leading-[1.1] font-semibold tracking-tight text-ivory"
          >
            {business.name}
          </motion.h1>

          <motion.p
            {...anim(0.72)}
            className="mt-6 text-2xl font-light text-goldsoft sm:text-3xl"
          >
            {business.tagline}
          </motion.p>

          <motion.p
            {...anim(0.84)}
            className="mt-6 max-w-lg text-(length:--text-lead) leading-relaxed text-ivory/95"
          >
            قطعة واحدة في كل مرة، مفصّلة على مقاسكِ وبقماش تختارينه — من أول قياس حتى آخر غرزة.
          </motion.p>

          <motion.div {...anim(0.98)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={order.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex min-h-13 items-center gap-2.5 rounded-[2px] bg-ivory px-8 text-[0.9375rem] font-medium text-espresso transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-goldsoft"
            >
              {order.channel === 'whatsapp' && <WhatsAppIcon className="size-[1.125rem]" />}
              اطلبي الآن
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform duration-500 group-hover/btn:-translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-13 items-center rounded-[2px] border border-ivory/40 px-8 text-[0.9375rem] font-medium text-ivory transition-all duration-500 hover:border-ivory hover:bg-ivory/10"
            >
              تواصلي معنا
            </a>
          </motion.div>
        </div>

        <motion.a
          {...anim(1.2)}
          href="#about"
          aria-label="انتقلي إلى قسم من نحن"
          className="group/scroll mt-12 hidden min-h-11 items-center gap-3 text-xs tracking-[0.2em] text-ivory/85 transition-colors duration-300 hover:text-ivory sm:inline-flex"
        >
          <MoveDown
            aria-hidden="true"
            className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/scroll:translate-y-1"
          />
          تصفّحي الأعمال
        </motion.a>
      </div>
    </section>
  )
}

function Dot() {
  return <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
}
