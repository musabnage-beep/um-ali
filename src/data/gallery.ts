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
 * Portfolio items. `src` paths are reserved for the atelier's own photographs —
 * until the real files are added, an on-brand placeholder frame is rendered
 * instead. No stock imagery is presented as real work.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'g01',
    category: 'tafseel',
    title: 'عباءة مفصّلة',
    alt: 'عباءة مفصّلة بقصّة مستقيمة وتشطيب يدوي',
    src: '/images/gallery-01.webp',
    aspect: 'portrait',
  },
  {
    id: 'g02',
    category: 'embroidery',
    title: 'تطريز ذهبي',
    alt: 'تفاصيل تطريز ذهبي على قماش فاتح',
    src: '/images/gallery-02.webp',
    aspect: 'square',
  },
  {
    id: 'g03',
    category: 'occasions',
    title: 'فستان سهرة',
    alt: 'فستان سهرة طويل معلّق على المانيكان',
    src: '/images/gallery-03.webp',
    aspect: 'landscape',
  },
  {
    id: 'g04',
    category: 'alterations',
    title: 'ضبط مقاس',
    alt: 'ضبط مقاس الخصر بدبابيس قبل الخياطة',
    src: '/images/gallery-04.webp',
    aspect: 'square',
  },
  {
    id: 'g05',
    category: 'tafseel',
    title: 'قفطان صيفي',
    alt: 'قفطان صيفي بقماش خفيف وألوان دافئة',
    src: '/images/gallery-05.webp',
    aspect: 'portrait',
  },
  {
    id: 'g06',
    category: 'embroidery',
    title: 'زخرفة الأكمام',
    alt: 'زخرفة مطرّزة على طرف الكم',
    src: '/images/gallery-06.webp',
    aspect: 'landscape',
  },
  {
    id: 'g07',
    category: 'occasions',
    title: 'إطلالة عروس',
    alt: 'تفاصيل إطلالة عروس بتشطيب دقيق',
    src: '/images/gallery-07.webp',
    aspect: 'portrait',
  },
  {
    id: 'g08',
    category: 'alterations',
    title: 'إعادة تشكيل',
    alt: 'إعادة تشكيل قطعة قديمة بقصّة جديدة',
    src: '/images/gallery-08.webp',
    aspect: 'square',
  },
  {
    id: 'g09',
    category: 'tafseel',
    title: 'طقم مكوّن من قطعتين',
    alt: 'طقم من قطعتين بقماش بيج ناعم',
    src: '/images/gallery-09.webp',
    aspect: 'landscape',
  },
]

/** Instagram grid. Replace with real post images and their permalinks. */
export type InstagramPost = {
  id: string
  src: string
  alt: string
  /** Permalink to the individual post. Falls back to the profile when empty. */
  href: string
}

export const instagramPosts: InstagramPost[] = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    id: `ig-${n}`,
    src: `/images/instagram-${n}.webp`,
    alt: `منشور من حساب أم علي على إنستقرام رقم ${i + 1}`,
    href: '',
  }
})
