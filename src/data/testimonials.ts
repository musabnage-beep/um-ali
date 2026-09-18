export type Testimonial = {
  id: string
  quote: string
  /** Client name, or an initial. */
  author: string
  /** Optional context line, e.g. "فستان مناسبة". */
  context?: string
}

/**
 * Real client reviews only.
 *
 * Deliberately empty: no testimonial is invented here. The section renders an
 * honest invitation to review while this array is empty, and switches to the
 * quote cards automatically once real entries are added.
 */
export const testimonials: Testimonial[] = []
