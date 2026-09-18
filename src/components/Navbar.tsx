import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { BrandMark } from '@/components/BrandMark'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { business, orderLink, whatsappLink } from '@/config/business'
import { navigation } from '@/data/navigation'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/lib/cn'

const SECTION_IDS = navigation.map((item) => item.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)
  const reduced = useReducedMotion()
  const order = orderLink()
  const whatsapp = whatsappLink()

  useLockBodyScroll(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // Over the hero the bar is transparent with light text; once the page moves —
  // or the mobile panel opens — it settles onto an ivory surface.
  const solid = scrolled || menuOpen

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-200 focus:rounded-[2px] focus:bg-bark focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
      >
        تخطي إلى المحتوى
      </a>

      <motion.header
        initial={reduced ? false : { y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500',
          solid
            ? 'border-b border-taupe/30 bg-ivory/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav
          aria-label="التنقل الرئيسي"
          className="shell flex h-18 items-center justify-between gap-6 lg:h-22"
        >
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            aria-label={`${business.name} — الرئيسية`}
            className="shrink-0"
          >
            <BrandMark tone={solid ? 'light' : 'dark'} />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-active={activeId === item.id}
                  className={cn(
                    'nav-link',
                    solid
                      ? 'text-espresso/75 hover:text-bark data-[active=true]:text-bark'
                      : 'text-ivory/90 hover:text-ivory data-[active=true]:text-ivory',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <IconLink
              href={business.instagram}
              label={`حساب ${business.name} على إنستقرام`}
              solid={solid}
            >
              <InstagramIcon className="size-[1.125rem]" />
            </IconLink>

            {whatsapp && (
              <IconLink href={whatsapp} label="تواصلي عبر واتساب" solid={solid}>
                <WhatsAppIcon className="size-[1.125rem]" />
              </IconLink>
            )}

            <a
              href={order.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'hidden min-h-11 items-center rounded-[2px] px-6 text-sm font-medium transition-all duration-500 sm:inline-flex',
                solid
                  ? 'bg-bark text-ivory hover:bg-espresso'
                  : 'border border-ivory/45 text-ivory hover:bg-ivory hover:text-espresso',
              )}
            >
              اطلبي الآن
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              className={cn(
                'grid size-11 place-items-center rounded-[2px] transition-colors duration-300 lg:hidden',
                solid ? 'text-espresso hover:bg-cream' : 'text-ivory hover:bg-ivory/10',
              )}
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-taupe/25 bg-ivory lg:hidden"
            >
              {/* Short viewports (phone landscape) can't fit the whole panel, so the
                  contents scroll inside it — the outer wrapper stays clipped for the
                  height animation. */}
              <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain">
                <ul className="shell flex flex-col py-2">
                  {navigation.map((item) => (
                    <li key={item.id} className="border-b border-taupe/20 last:border-0">
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex min-h-14 items-center justify-between text-base text-espresso"
                      >
                        {item.label}
                        <span aria-hidden="true" className="hairline w-8" />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="shell flex flex-col gap-3 pt-4 pb-7">
                  <a
                    href={order.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-[2px] bg-bark text-[0.9375rem] font-medium text-ivory"
                  >
                    {order.channel === 'whatsapp' && <WhatsAppIcon className="size-[1.125rem]" />}
                    اطلبي الآن
                  </a>
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-[2px] border border-bark/30 text-[0.9375rem] font-medium text-espresso"
                  >
                    <InstagramIcon className="size-[1.125rem]" />
                    <span lang="en">{business.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

function IconLink({
  href,
  label,
  solid,
  children,
}: {
  href: string
  label: string
  solid: boolean
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'grid size-11 place-items-center rounded-full transition-colors duration-300',
        solid ? 'text-espresso/70 hover:text-bark' : 'text-ivory/90 hover:text-ivory',
      )}
    >
      {children}
    </a>
  )
}
