import { Figure } from '@/components/Figure'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { business } from '@/config/business'
import { instagramPosts } from '@/data/gallery'

export function InstagramFeed() {
  if (instagramPosts.length === 0) return null

  return (
    <section aria-labelledby="instagram-title" className="bg-ivory py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow={business.instagramHandle}
          title="تابعينا على إنستقرام"
          subtitle="الجديد يُنشر أولًا على الحساب — زوريه لمتابعة آخر الأعمال والتفاصيل."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <Reveal as="li" key={post.id} delay={(i % 6) * 0.06}>
              <a
                href={post.href || business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`فتح ${post.href ? 'المنشور' : 'الحساب'} على إنستقرام`}
                className="group relative block overflow-hidden rounded-[2px]"
              >
                <Figure
                  src={post.src}
                  alt={post.alt}
                  ratio="1 / 1"
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 grid place-items-center bg-ink/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <InstagramIcon className="size-6 text-ivory" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.12} className="mt-10 flex justify-center">
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-[2px] border border-bark/30 px-7 text-[0.9375rem] font-medium text-espresso transition-colors duration-500 hover:border-bark hover:bg-bark hover:text-ivory"
          >
            <InstagramIcon className="size-[1.125rem]" />
            تابعينا على إنستقرام
          </a>
        </Reveal>
      </div>
    </section>
  )
}
