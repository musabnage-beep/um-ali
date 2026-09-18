import { Gem, HeartHandshake, MessageCircle, Package, ScanLine, Sparkles, Stamp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/** Editorial copy for the About section. Edit freely — no component changes needed. */
export const about = {
  eyebrow: 'من نحن',
  title: 'حكاية أتيليه أم علي',
  signature: 'خياطة… بلمسة حب',
  paragraphs: [
    'في أم علي نؤمن أن القطعة الجيدة لا تُشترى، بل تُخاط. نبدأ من قماش وفكرة، ونمضي معكِ خطوة بخطوة حتى تصبح القطعة على مقاسكِ تمامًا — لا أوسع ولا أضيق مما تحبين.',
    'كل غرزة هنا مقصودة، وكل حاشية تُراجع مرتين. هذا ما يجعل القطعة تبدو مصنوعة لكِ وحدكِ، لأنها كذلك بالفعل.',
  ],
  points: [
    { icon: Stamp, title: 'خبرة في مجال الخياطة', text: 'يد متمرّسة على القصّ والتفصيل والتشطيب.' },
    { icon: ScanLine, title: 'دقة في التفاصيل', text: 'مقاسات مضبوطة وحواشٍ نظيفة من الداخل والخارج.' },
    { icon: HeartHandshake, title: 'خدمة مخصصة', text: 'متابعة شخصية لطلبكِ من أول فكرة حتى الاستلام.' },
  ] satisfies { icon: LucideIcon; title: string; text: string }[],
  image: '/images/about.webp',
  imageAlt: 'يدان توجّهان قماشًا عاجيًا على ماكينة الخياطة',
}

/** "لماذا نحن؟" — four short, honest promises. */
export const whyUs = [
  { icon: Stamp, title: 'خبرة واحترافية', text: 'عمل متقن على كل نوع قماش، من الخفيف إلى الثقيل.' },
  { icon: ScanLine, title: 'دقة في التفاصيل', text: 'قياس مرّتين وخياطة مرّة، بلا تنازل عن التشطيب.' },
  { icon: Sparkles, title: 'لمسة إبداعية', text: 'اقتراحات تصميم تضيف لفكرتكِ بدل أن تكرّرها.' },
  { icon: Gem, title: 'جودة عالية', text: 'خامات وخيوط مختارة تبقى جميلة بعد الغسلة العاشرة.' },
] satisfies { icon: LucideIcon; title: string; text: string }[]

/** "طريقة الطلب" — the five-step order journey. */
export const processSteps = [
  {
    number: '01',
    icon: Sparkles,
    title: 'اختاري الخدمة',
    text: 'تفصيل، تعديل، تطريز أو تجهيز مناسبة.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'تواصلي معنا',
    text: 'راسلينا وسنرد على استفساركِ ونتفق على التفاصيل.',
  },
  {
    number: '03',
    icon: ScanLine,
    title: 'أرسلي التفاصيل',
    text: 'المقاسات وصور الفكرة ونوع القماش المطلوب.',
  },
  {
    number: '04',
    icon: Stamp,
    title: 'تأكيد الطلب',
    text: 'نراجع كل شيء معكِ ونحدد موعد التسليم.',
  },
  {
    number: '05',
    icon: Package,
    title: 'استلام القطعة',
    text: 'قطعتكِ جاهزة، مكويّة ومغلّفة بعناية.',
  },
] satisfies { number: string; icon: LucideIcon; title: string; text: string }[]
