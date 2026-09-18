import { Figure } from '@/components/Figure'
import { Reveal } from '@/components/Reveal'
import { about } from '@/data/content'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ivory py-24 sm:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        {/* Portrait first in the source so it leads on mobile, sits at the
            leading (right) edge on desktop — the RTL reading entry point. */}
        <Reveal className="relative">
          <Figure
            src={about.image}
            alt={about.imageAlt}
            ratio="4 / 5"
            className="w-full"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 -z-10 border border-gold/30 sm:-inset-5"
          />
          <p className="absolute -bottom-5 start-6 bg-ivory px-4 text-lg font-medium text-goldink sm:text-xl">
            {about.signature}
          </p>
        </Reveal>

        <div>
          <Reveal className="flex items-center gap-3">
            <span aria-hidden="true" className="hairline w-10" />
            <span className="eyebrow text-bark">{about.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 id="about-title" className="mt-5 text-(length:--text-display) text-espresso">
              {about.title}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-col gap-4 text-(length:--text-lead) leading-relaxed text-mocha">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-10 flex flex-col divide-y divide-taupe/30 border-y border-taupe/30">
            {about.points.map((point, i) => (
              <Reveal as="li" key={point.title} delay={0.18 + i * 0.08}>
                <div className="flex items-start gap-4 py-5">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-gold/45 text-bark">
                    <point.icon className="size-[1.125rem]" aria-hidden="true" strokeWidth={1.4} />
                  </span>
                  <span>
                    <span className="block font-semibold text-espresso">{point.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-mocha">
                      {point.text}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
