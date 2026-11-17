/**
 * Resolves a `public/` asset path against Vite's base URL.
 * Needed because Vite rewrites imported assets but not plain path strings,
 * which breaks when the site is served from a sub-path (e.g. GitHub Pages).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
