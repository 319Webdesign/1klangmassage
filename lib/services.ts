/**
 * Leistungs-Daten – später einfach an Sanity anbindbar
 * Schema: { _id, title, duration, price, icon, bullets, isHighlight }
 */
export interface Service {
  id: string
  title: string
  duration: string
  price: string
  icon: string // Icon-Name für Lucide, z.B. "Music"
  bullets: [string, string, string]
  isHighlight?: boolean
}

export const SERVICES: Service[] = [
  {
    id: 'klangmassage',
    title: 'Klangmassage',
    duration: '60 Min',
    price: '85 €',
    icon: 'Music',
    bullets: [
      'Sanfte Klangschalen-Vibrationen für tiefe Entspannung',
      'Löst Verspannungen und harmonisiert Energie',
      'Ideal bei Stress und innerer Unruhe',
    ],
    isHighlight: true,
  },
  {
    id: 'wellness-massage',
    title: 'Wellness-Massage',
    duration: '60 Min',
    price: '75 €',
    icon: 'Heart',
    bullets: [
      'Ganzheitliche Entspannung von Kopf bis Fuß',
      'Individuell abgestimmt auf Ihre Bedürfnisse',
      'Stärkt das Wohlbefinden nachhaltig',
    ],
  },
  {
    id: 'entspannungs-massage',
    title: 'Entspannungs-Massage',
    duration: '90 Min',
    price: '110 €',
    icon: 'Sparkles',
    bullets: [
      'Ausgiebige Auszeit für Körper und Geist',
      'Kombination aus Klang und Massage',
      'Tiefenentspannung in ruhiger Atmosphäre',
    ],
  },
  {
    id: 'paar-massage',
    title: 'Paar-Klangmassage',
    duration: '90 Min',
    price: '160 €',
    icon: 'Users',
    bullets: [
      'Gemeinsame Auszeit für zu zweit',
      'Synchronisierte Klangmassage-Erfahrung',
      'Perfekt als besonderes Erlebnis',
    ],
  },
]
