export type BusinessInfo = {
  name: string
  englishName: string
  tagline: string
  description: string
  instagramHandle: string
  instagram: string
  /** Full international number, digits only, no "+". Example: "9665XXXXXXXX" */
  whatsapp: string
  /** Shown as-is and used for the tel: link. Example: "+966 5X XXX XXXX" */
  phone: string
  email: string
  address: string
  /** e.g. "السبت – الخميس · ١٠ص – ٨م" */
  hours: string
  /** Absolute origin of the deployed site, for the canonical URL. */
  siteUrl: string
}

/**
 * Single source of truth for every real-world business detail.
 *
 * An empty string means "not confirmed yet" — nothing here is invented. The UI
 * degrades gracefully (a link simply hides itself) rather than showing a fake
 * number or address. Fill these in and the whole site updates.
 */
export const business: BusinessInfo = {
  name: 'أم علي',
  englishName: 'UM ALI',
  tagline: 'أناقة تُخاط بإتقان',
  description: 'أتيليه خياطة وتفصيل حسب الطلب، بعناية في كل غرزة.',

  instagramHandle: '@sewing_amali',
  instagram: 'https://www.instagram.com/sewing_amali/',

  whatsapp: '',
  phone: '',
  email: '',
  address: '',
  hours: '',
  siteUrl: '',
}

/** Pre-filled first message so the client never starts from a blank chat. */
export const whatsappMessage = 'السلام عليكم، أرغب في الاستفسار عن خدمات أم علي.'

/**
 * Builds a wa.me link, optionally with a context-specific message.
 * Returns null when no number has been configured, so callers can fall back
 * instead of rendering a dead button.
 */
export function whatsappLink(message: string = whatsappMessage): string | null {
  const digits = business.whatsapp.replace(/\D/g, '')
  if (!digits) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

/**
 * The primary "order now" destination: WhatsApp when available, otherwise the
 * Instagram inbox, which always is. `channel` lets callers label the button
 * honestly.
 */
export function orderLink(message?: string): { href: string; channel: 'whatsapp' | 'instagram' } {
  const wa = whatsappLink(message)
  return wa ? { href: wa, channel: 'whatsapp' } : { href: business.instagram, channel: 'instagram' }
}

export type ContactRow = {
  icon: 'phone' | 'mail' | 'map' | 'clock'
  text: string
  /** Empty when the value is not linkable (an address, opening hours). */
  href: string
}

/** Only the contact details that have actually been filled in. */
export function contactRows(): ContactRow[] {
  const rows: ContactRow[] = []
  if (business.phone) {
    rows.push({ icon: 'phone', text: business.phone, href: `tel:${business.phone.replace(/\s/g, '')}` })
  }
  if (business.email) {
    rows.push({ icon: 'mail', text: business.email, href: `mailto:${business.email}` })
  }
  if (business.address) rows.push({ icon: 'map', text: business.address, href: '' })
  if (business.hours) rows.push({ icon: 'clock', text: business.hours, href: '' })
  return rows
}
