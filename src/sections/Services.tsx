import { Figure } from '@/components/Figure'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { orderLink } from '@/config/business'
import { services } from '@/data/services'
import { ArrowLeft } from 'lucide-react'

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-y border-taupe/25 bg-cream py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="ما نقدّمه"
          title="خدماتنا"
          subtitle="خدمات مصممة لتلبية احتياجاتك بكل عناية."
          className="mx-auto"
        />

        <ul className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={(i % 3) * 0.08} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const order = orderLink(`السلام عليكم، أرغب في الاستفسار عن خدمة: ${service.title}.`)

  return (
    <a
      href={order.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group surface flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[var(--shadow-lift)]"
    >
      <Figure
        src={service.image}
        alt={service.imageAlt}
        ratio="4 / 3"
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
      />

      <div className="flex flex-1 flex-col p-7">
        <span className="grid size-11 place-items-center rounded-full border border-gold/45 text-bark transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:border-gold">
          <service.icon className="size-5" aria-hidden="true" strokeWidth={1.4} />
        </span>

        <h3 className="mt-5 text-xl font-semibold text-espresso">{service.title}</h3>
        <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-mocha">
          {service.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-bark">
          استفسري عن الخدمة
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1"
          />
        </span>
      </div>
    </a>
  )
}
