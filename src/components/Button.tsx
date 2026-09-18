import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'solid' | 'outline' | 'ghost' | 'light'

const base =
  'group/btn inline-flex min-h-11 items-center justify-center gap-2.5 rounded-[2px] px-7 text-[0.9375rem] font-medium leading-none tracking-wide transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'

const variants: Record<Variant, string> = {
  /** Primary action — deep bark with a gold hover. */
  solid: 'bg-bark text-ivory hover:bg-espresso hover:shadow-[var(--shadow-lift)]',
  /** Secondary on light backgrounds. */
  outline: 'border border-bark/30 text-espresso hover:border-bark hover:bg-bark hover:text-ivory',
  /** Secondary on dark backgrounds. */
  light: 'border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso',
  /** Quiet, text-only. */
  ghost: 'px-0 text-espresso hover:text-bark',
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type LinkButtonProps = CommonProps & {
  href: string
  /** Opens in a new tab with the matching rel for safety. */
  external?: boolean
  ariaLabel?: string
}

export function LinkButton({
  children,
  href,
  external = false,
  variant = 'solid',
  className,
  ariaLabel,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(base, variants[variant], 'py-3.5', className)}
    >
      {children}
    </a>
  )
}

type ActionButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }

export function Button({ children, variant = 'solid', className, ...rest }: ActionButtonProps) {
  return (
    <button type="button" className={cn(base, variants[variant], 'py-3.5', className)} {...rest}>
      {children}
    </button>
  )
}
