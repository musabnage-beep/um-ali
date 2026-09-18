import { BrandMark } from '@/components/BrandMark'
import { ContactIcon } from '@/components/ContactIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { business, contactRows, whatsappLink } from '@/config/business'
import { navigation } from '@/data/navigation'

export function Footer() {
  const whatsapp = whatsappLink()
  const details = contactRows()

  return (
    <footer className="bg-ink text-ivory">
      <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
        <div>
          <BrandMark tone="dark" size="lg" />
          <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/60">
            {business.description}
          </p>

          <div className="mt-7 flex items-center gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`حساب ${business.name} على إنستقرام`}
              className="grid size-11 place-items-center rounded-full border border-ivory/25 text-ivory/80 transition-colors duration-400 hover:border-ivory hover:bg-ivory hover:text-ink"
            >
              <InstagramIcon className="size-[1.125rem]" />
            </a>
            {whatsapp && (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصلي عبر واتساب"
                className="grid size-11 place-items-center rounded-full border border-ivory/25 text-ivory/80 transition-colors duration-400 hover:border-ivory hover:bg-ivory hover:text-ink"
              >
                <WhatsAppIcon className="size-[1.125rem]" />
              </a>
            )}
          </div>
        </div>

        <nav aria-label="روابط الموقع">
          <h2 className="eyebrow text-goldsoft">روابط سريعة</h2>
          <ul className="mt-6 flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-flex min-h-11 items-center text-[0.9375rem] text-ivory/65 transition-colors duration-300 hover:text-ivory"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-goldsoft">للتواصل</h2>
          <ul className="mt-6 flex flex-col gap-1 text-[0.9375rem] text-ivory/65">
            <li className="flex items-center gap-2.5">
              <InstagramIcon className="size-4 shrink-0" />
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                lang="en"
                className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-ivory"
              >
                {business.instagramHandle}
              </a>
            </li>

            {details.map((row) => (
              <li key={row.text} className="flex items-center gap-2.5">
                <ContactIcon kind={row.icon} className="size-4 shrink-0" />
                {row.href ? (
                  <a
                    href={row.href}
                    className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-ivory"
                  >
                    {row.text}
                  </a>
                ) : (
                  <span className="py-2.5">{row.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/12">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-ivory/60 sm:flex-row sm:text-start">
          <p>© {business.name} — جميع الحقوق محفوظة</p>
          <p lang="en" className="tracking-[0.24em]">
            {business.englishName}
          </p>
        </div>
      </div>
    </footer>
  )
}
