import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { business } from '@/config/business'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  const hasReviews = testimonials.length > 0

  return (
    <section
      aria-labelledby="testimonials-title"
      className="border-y border-taupe/25 bg-cream py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="ثقة العميلات"
          title="آراء عميلاتنا"
          subtitle={
            hasReviews
              ? 'كلمات وصلتنا من عميلات وثقن بنا.'
              : 'نجمع آراء عميلاتنا أولًا بأول — ولا نعرض هنا سوى ما هو حقيقي.'
          }
        />

        {hasReviews ? (
          <ul className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal as="li" key={item.id} delay={(i % 3) * 0.08} className="h-full">
                <figure className="surface flex h-full flex-col p-8">
                  <Quote
                    aria-hidden="true"
                    className="size-7 shrink-0 text-gold/60"
                    strokeWidth={1.3}
                  />
                  <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-loose text-espresso/85">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-taupe/30 pt-5">
                    <span className="block font-semibold text-espresso">{item.author}</span>
                    {item.context && (
                      <span className="mt-1 block text-sm text-mocha">{item.context}</span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal delay={0.08} className="mt-14">
            <div className="surface mx-auto flex max-w-xl flex-col items-center gap-5 px-8 py-14 text-center">
              <span className="flex items-center gap-1.5 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4" strokeWidth={1.3} />
                ))}
              </span>
              <p className="text-[0.9375rem] leading-relaxed text-mocha">
                هل سبق أن خِطنا لكِ قطعة؟ شاركينا رأيكِ عبر إنستقرام، وسنعرضه هنا بإذنكِ.
              </p>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-[2px] border border-bark/30 px-6 text-sm font-medium text-espresso transition-colors duration-500 hover:border-bark hover:bg-bark hover:text-ivory"
              >
                شاركينا رأيكِ
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
