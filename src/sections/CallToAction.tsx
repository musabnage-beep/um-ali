import { ArrowLeft } from 'lucide-react'
import { ContactIcon } from '@/components/ContactIcon'
import { Figure } from '@/components/Figure'
import { Reveal } from '@/components/Reveal'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { business, contactRows, orderLink } from '@/config/business'

export function CallToAction() {
  const order = orderLink()
  const details = contactRows()

  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-espresso py-24 sm:py-32"
    >
      <Figure
        src="/images/fabric.webp"
        alt=""
        className="absolute inset-0 -z-20 size-full"
        imgClassName="size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/82" />
      <div aria-hidden="true" className="weave absolute inset-0 -z-10 opacity-35" />

      <div className="shell relative flex flex-col items-center text-center">
        <Reveal className="flex items-center gap-3">
          <span aria-hidden="true" className="hairline w-10" />
          <span className="eyebrow text-goldsoft">تواصل معنا</span>
          <span aria-hidden="true" className="hairline w-10" />
        </Reveal>

        <Reveal delay={0.06}>
          <h2 id="cta-title" className="mt-5 max-w-3xl text-(length:--text-display) text-ivory">
            لديكِ فكرة لقطعة مميزة؟
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-(length:--text-lead) leading-relaxed text-ivory/70">
            دعينا نحوّل فكرتكِ إلى قطعة مصممة لكِ.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={order.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex min-h-13 items-center gap-2.5 rounded-[2px] bg-ivory px-8 text-[0.9375rem] font-medium text-espresso transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-goldsoft"
            >
              {order.channel === 'whatsapp' ? (
                <>
                  <WhatsAppIcon className="size-[1.125rem]" />
                  اطلبي الآن عبر واتساب
                </>
              ) : (
                <>
                  <InstagramIcon className="size-[1.125rem]" />
                  راسلينا على إنستقرام
                </>
              )}
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform duration-500 group-hover/btn:-translate-x-1"
              />
            </a>

            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center gap-2.5 rounded-[2px] border border-ivory/40 px-8 text-[0.9375rem] font-medium text-ivory transition-all duration-500 hover:border-ivory hover:bg-ivory/10"
            >
              تواصلي معنا
            </a>
          </div>
        </Reveal>

        {details.length > 0 && (
          <Reveal delay={0.28}>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ivory/65">
              {details.map((detail) => (
                <li key={detail.text} className="flex items-center gap-2">
                  <ContactIcon kind={detail.icon} className="size-4 text-goldsoft" />
                  {/* See Footer: <bdi> keeps the phone number's digit groups
                      in order inside the RTL document. */}
                  {detail.href ? (
                    <a href={detail.href} className="transition-colors hover:text-ivory">
                      <bdi>{detail.text}</bdi>
                    </a>
                  ) : (
                    <bdi>{detail.text}</bdi>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
