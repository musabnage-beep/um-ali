import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { whyUs } from '@/data/content'

export function WhyUs() {
  return (
    <section
      aria-labelledby="whyus-title"
      className="weave border-y border-taupe/25 bg-cream py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="ما يميّزنا"
          title="لماذا نحن؟"
          subtitle="أربعة أشياء نلتزم بها في كل قطعة نخيطها."
        />

        <ul className="mt-14 grid gap-px overflow-hidden border border-taupe/35 bg-taupe/35 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.08} className="bg-ivory">
              <div className="flex h-full flex-col items-center gap-4 px-7 py-12 text-center">
                <span className="grid size-13 place-items-center rounded-full border border-gold/45 text-bark">
                  <item.icon className="size-5" aria-hidden="true" strokeWidth={1.4} />
                </span>
                <h3 className="text-lg font-semibold text-espresso">{item.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-mocha">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
