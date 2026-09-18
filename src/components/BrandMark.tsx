import { business } from '@/config/business'
import { cn } from '@/lib/cn'

type BrandMarkProps = {
  tone?: 'light' | 'dark'
  className?: string
  size?: 'sm' | 'lg'
}

/**
 * The lockup: a needle-eye monogram beside the Arabic name, with the Latin
 * wordmark set beneath it in letter-spaced caps.
 */
export function BrandMark({ tone = 'light', className, size = 'sm' }: BrandMarkProps) {
  const dark = tone === 'dark'

  return (
    <span className={cn('flex items-center gap-3', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'grid shrink-0 place-items-center rounded-full border transition-colors duration-500',
          size === 'lg' ? 'size-12' : 'size-10',
          dark ? 'border-goldsoft/50 text-goldsoft' : 'border-gold/60 text-bark',
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className={size === 'lg' ? 'size-6' : 'size-5'}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <ellipse cx="12" cy="6.4" rx="2.4" ry="3.2" />
          <path d="M12 9.6V21" />
          <path d="M12 13.6c2.6 0 4.2 1.4 4.2 3.1" />
          <path d="M12 16.8c-2.3 0-3.6 1.1-3.6 2.6" />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-semibold tracking-tight',
            size === 'lg' ? 'text-2xl' : 'text-lg',
            dark ? 'text-ivory' : 'text-espresso',
          )}
        >
          {business.name}
        </span>
        <span
          lang="en"
          className={cn(
            'mt-1 text-[0.625rem] font-medium tracking-[0.34em]',
            dark ? 'text-goldsoft/80' : 'text-goldink',
          )}
        >
          {business.englishName}
        </span>
      </span>
    </span>
  )
}
