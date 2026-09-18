import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import type { ContactRow } from '@/config/business'

const icons = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
  clock: Clock,
} as const

/** Maps a contact row's kind to its Lucide glyph. */
export function ContactIcon({ kind, className }: { kind: ContactRow['icon']; className?: string }) {
  const Icon = icons[kind]
  return <Icon aria-hidden="true" className={className} strokeWidth={1.4} />
}
