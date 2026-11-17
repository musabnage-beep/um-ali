import { Crown, Flower2, PenTool, Ruler, Scissors } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { asset } from '../lib/asset'

export type Service = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image: string
  imageAlt: string
}

/**
 * Service catalogue. Titles and copy are editable placeholders — confirm them
 * against what the atelier actually offers before publishing.
 */
export const services: Service[] = [
  {
    id: 'tailoring',
    title: 'تفصيل الملابس',
    description: 'قصّات مدروسة على مقاسكِ، تُبنى من القماش الخام حتى القطعة النهائية.',
    icon: Ruler,
    image: asset('/images/service-tailoring.webp'),
    imageAlt: 'قياس وتفصيل قطعة قماش على المقاس',
  },
  {
    id: 'custom',
    title: 'الخياطة حسب الطلب',
    description: 'تصميمكِ الخاص من فكرة أولى إلى قطعة مكتملة، خطوة بخطوة معكِ.',
    icon: Scissors,
    image: asset('/images/service-custom.webp'),
    imageAlt: 'خياطة قطعة مصممة حسب الطلب',
  },
  {
    id: 'alterations',
    title: 'التعديلات',
    description: 'ضبط المقاسات وإصلاح التفاصيل ليعود للقطعة انسيابها الأول.',
    icon: PenTool,
    image: asset('/images/service-alterations.webp'),
    imageAlt: 'تعديل مقاس قطعة ملابس',
  },
  {
    id: 'occasions',
    title: 'تجهيز المناسبات',
    description: 'إطلالات المناسبات والأعراس، بتشطيب دقيق يليق بالمساء.',
    icon: Crown,
    image: asset('/images/service-occasions.webp'),
    imageAlt: 'فستان مناسبات مجهّز على المانيكان',
  },
  {
    id: 'embroidery',
    title: 'التطريز',
    description: 'تطريز يدوي وزخارف دقيقة تمنح القطعة توقيعها الخاص.',
    icon: Flower2,
    image: asset('/images/service-embroidery.webp'),
    imageAlt: 'تطريز يدوي بخيوط ذهبية على القماش',
  },
]
