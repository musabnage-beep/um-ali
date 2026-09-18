import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { processSteps } from '@/data/content'

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-ivory py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="كيف نعمل"
          title="طريقة الطلب"
          subtitle="خمس خطوات واضحة، من أول رسالة حتى استلام القطعة."
        />

        <ol className="relative mt-14 grid gap-10 sm:mt-20 lg:grid-cols-5 lg:gap-6">
          {/* The thread: a single hairline linking every step. Vertical on
              mobile (at the leading edge), horizontal from lg up. */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 start-6 w-px bg-gradient-to-b from-transparent via-gold/45 to-transparent lg:top-7 lg:bottom-auto lg:start-0 lg:h-px lg:w-full lg:bg-gradient-to-l lg:from-transparent lg:via-gold/45 lg:to-transparent"
          />

          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 0.1}
              className="relative flex gap-5 lg:flex-col lg:gap-0 lg:text-center"
            >
              <span className="relative z-10 grid size-13 shrink-0 place-items-center rounded-full border border-gold/50 bg-ivory text-bark lg:mx-auto">
                <step.icon className="size-5" aria-hidden="true" strokeWidth={1.4} />
              </span>

              <div className="lg:mt-6">
                <span
                  lang="en"
                  className="display block text-3xl text-goldink/80 lg:text-4xl"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-espresso">{step.title}</h3>
                <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-mocha lg:mx-auto">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
