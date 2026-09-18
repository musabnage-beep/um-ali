export type GalleryCategory = {
  id: string
  label: string
}

export type GalleryItem = {
  id: string
  /** Must match a `GalleryCategory.id`. */
  category: string
  title: string
  /** Descriptive alt text — required for accessibility. */
  alt: string
  src: string
  /** Controls the editorial grid rhythm: tall items span two rows. */
  aspect: 'portrait' | 'landscape' | 'square'
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'tafseel', label: 'تفصيل' },
  { id: 'embroidery', label: 'تطريز' },
  { id: 'alterations', label: 'تعديلات' },
  { id: 'occasions', label: 'مناسبات' },
]

/**
 * Portfolio grid. The current images are generic, licensed photographs of
 * tailoring work — see `public/images/README.md` for sources. Titles and alt
 * text therefore describe the craft, not specific pieces made by the atelier;
 * swap in the real photographs (same filenames) and these can become the
 * actual piece names.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'g01',
    category: 'occasions',
    title: 'فستان سهرة',
    alt: 'فستان سهرة مخملي معروض على مانيكان',
    src: '/images/gallery-01.webp',
    aspect: 'portrait',
  },
  {
    id: 'g02',
    category: 'embroidery',
    title: 'بكرات وخيوط',
    alt: 'بكرات خيوط خشبية مرتّبة على قماش كتّاني',
    src: '/images/gallery-02.webp',
    aspect: 'square',
  },
  {
    id: 'g03',
    category: 'tafseel',
    title: 'داخل الورشة',
    alt: 'ورشة خياطة برفوف ملابس وضوء نهاري',
    src: '/images/gallery-03.webp',
    aspect: 'landscape',
  },
  {
    id: 'g04',
    category: 'alterations',
    title: 'تثبيت الأزرار',
    alt: 'تثبيت زر بالإبرة على قطعة قماش داكنة',
    src: '/images/gallery-04.webp',
    aspect: 'square',
  },
  {
    id: 'g05',
    category: 'tafseel',
    title: 'رسم الباترون',
    alt: 'رسم باترون على ورق القص قبل التفصيل',
    src: '/images/gallery-05.webp',
    aspect: 'portrait',
  },
  {
    id: 'g06',
    category: 'embroidery',
    title: 'خيوط ذهبية',
    alt: 'بكرات خيوط بلون ذهبي مرتّبة على رف',
    src: '/images/gallery-06.webp',
    aspect: 'landscape',
  },
  {
    id: 'g07',
    category: 'alterations',
    title: 'قياس وضبط',
    alt: 'شريط قياس ممدود على جاكيت منسوج',
    src: '/images/gallery-07.webp',
    aspect: 'portrait',
  },
  {
    id: 'g08',
    category: 'occasions',
    title: 'تفاصيل الدانتيل',
    alt: 'تفاصيل دانتيل على ذيل فستان عاجي',
    src: '/images/gallery-08.webp',
    aspect: 'square',
  },
  {
    id: 'g09',
    category: 'tafseel',
    title: 'على ماكينة الخياطة',
    alt: 'خياطة قطعة قماش على ماكينة الخياطة',
    src: '/images/gallery-09.webp',
    aspect: 'landscape',
  },
]

/**
 * Instagram teaser grid. The tiles currently hold generic licensed photos, so
 * their alt text must not describe them as posts from the account. Once the
 * real post images and permalinks are in, set `href` per tile.
 */
export type InstagramPost = {
  id: string
  src: string
  alt: string
  /** Permalink to the individual post. Falls back to the profile when empty. */
  href: string
}

const instagramAlts = [
  'ورشة خياطة برفوف ملابس',
  'رسم تصميم قطعة على الورق',
  'بطاقات عيّنات أقمشة بألوان مختلفة',
  'بكرات خيوط خشبية على قماش كتّاني',
  'أدوات الخياطة مرتّبة على قماش',
  'يدان تعملان على قماش منسوج',
]

export const instagramPosts: InstagramPost[] = instagramAlts.map((alt, i) => {
  const n = String(i + 1).padStart(2, '0')
  return { id: `ig-${n}`, src: `/images/instagram-${n}.webp`, alt, href: '' }
})
