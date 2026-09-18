import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'start' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

/** Consistent eyebrow → gold rule → title → subtitle rhythm for every section. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start text-start',
        className,
      )}
    >
      <div className={cn('flex items-center gap-3', centered && 'justify-center')}>
        <span aria-hidden="true" className="hairline w-10" />
        <span className={cn('eyebrow', tone === 'dark' ? 'text-goldsoft' : 'text-bark')}>
          {eyebrow}
        </span>
        <span aria-hidden="true" className="hairline w-10" />
      </div>

      <h2
        className={cn(
          'text-(length:--text-display)',
          tone === 'dark' ? 'text-ivory' : 'text-espresso',
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'max-w-[52ch] text-(length:--text-lead) leading-relaxed',
            tone === 'dark' ? 'text-ivory/70' : 'text-mocha',
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
