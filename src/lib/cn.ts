type ClassValue = string | false | null | undefined

/** Tiny class-name joiner — avoids pulling in a dependency for one line. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}
