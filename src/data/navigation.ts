/** Section anchors, in scroll order. Drives the navbar, the footer and scroll-spy. */
export const navigation = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'من نحن' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'portfolio', label: 'معرض الأعمال' },
  { id: 'process', label: 'طريقة الطلب' },
  { id: 'contact', label: 'تواصل معنا' },
] as const

export type NavItem = (typeof navigation)[number]
