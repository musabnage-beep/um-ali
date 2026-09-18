import { useState } from 'react'
import { cn } from '@/lib/cn'

type FigureProps = {
  src: string
  alt: string
  /** CSS aspect-ratio value, e.g. "3 / 4". Omit to fill the parent. */
  ratio?: string
  className?: string
  /** Extra classes for the <img> itself (object-position tweaks, etc.). */
  imgClassName?: string
  /** Above-the-fold images should load eagerly and decode synchronously. */
  priority?: boolean
  sizes?: string
}

/**
 * An image that can never look broken.
 *
 * Until the atelier's own photograph exists at `src` — or if it ever fails to
 * load — a woven placeholder frame is drawn instead. Nothing here dresses up
 * stock photography as real work.
 */
export function Figure({
  src,
  alt,
  ratio,
  className,
  imgClassName,
  priority = false,
  sizes,
}: FigureProps) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  // The placeholder is absolutely positioned, so a frame with no intrinsic
  // height would collapse. Fall back to a 4:3 box unless the caller already
  // sizes the frame (a ratio, or absolute inset-0 stretching).
  const aspectRatio = ratio ?? (showPlaceholder ? '4 / 3' : undefined)

  return (
    <div className={cn('media relative', className)} style={aspectRatio ? { aspectRatio } : undefined}>
      {showPlaceholder ? (
        <Placeholder label={alt} />
      ) : (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className={imgClassName}
        />
      )}
    </div>
  )
}

/**
 * On-brand stand-in: woven texture, a hairline gold frame and a needle-and-thread
 * mark. It inherits the image's alt text so screen readers still get the
 * description; a decorative image (empty alt) stays silent.
 */
function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="weave absolute inset-0 flex flex-col items-center justify-center gap-3 bg-sand px-6 text-center"
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-gold/35"
      />
      <ThreadMark />
      <span className="max-w-[22ch] text-[0.6875rem] leading-relaxed tracking-[0.18em] text-bark/85 uppercase">
        UM ALI
      </span>
    </div>
  )
}

function ThreadMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 40"
      className="h-8 w-14 text-bark/45"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <path d="M2 30c8-12 16-12 24 0s16 12 24 0 10-12 12-8" />
      <circle cx="47" cy="11" r="3" />
      <path d="M47 14v9" />
    </svg>
  )
}
