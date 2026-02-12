/**
 * Leistungs-Daten für die Services-Grid
 * Sanity-ready: Später einfach durch CMS-Daten ersetzen
 */

export interface PriceOption {
  duration: string
  price: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  priceOptions: PriceOption[]
  imageId: string
  /** Lokaler Bildpfad (z.B. /img/xxx.png) – überschreibt Platzhalter */
  image?: string
  isHighlight?: boolean
}

/**
 * Unsplash-Bild-IDs für Wellness/Massage-Themen
 * Format: https://images.unsplash.com/photo-{imageId}?w=600&h=400&fit=crop
 */
export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'ruecken-nacken',
    title: 'Rücken-Nacken-Massage',
    description:
      'Zielgerichtete Techniken lösen Verspannungen in Rücken und Nacken. Fühlen Sie sich wieder leicht und beweglich.',
    priceOptions: [
      { duration: '30 Min', price: '40 €' },
      { duration: '45 Min', price: '55 €' },
    ],
    imageId: '1544161512-6f4e8e2d8a9b',
    image: '/img/ruecken-nacken-massage.png',
  },
  {
    id: 'kalifornische-massage',
    title: 'Kalifornische Massage',
    description:
      'Achtsame Ganzkörpermassage kombiniert mit Energiearbeit. Sanfte, fließende Bewegungen für tiefe Entspannung.',
    priceOptions: [
      { duration: '1,5h', price: '100 €' },
      { duration: '2h', price: '130 €' },
    ],
    imageId: '1540558880-7b0e9e8e9e8e',
    image: '/img/kalifornische-massage.png',
  },
  {
    id: 'breuss-massage',
    title: 'Breuss-Massage',
    description:
      'Sanfte Wirbelsäulenbehandlung mit Johanniskrautöl. Ideal zur Regeneration und Harmonisierung des Rückens.',
    priceOptions: [
      { duration: '30 Min', price: '40 €' },
      { duration: '45 Min', price: '55 €' },
    ],
    imageId: '1544365392-8e9e9e9e9e9e',
    image: '/img/breuss-massage.png',
  },
  {
    id: 'fussmassage',
    title: 'Fußmassage',
    description:
      'Entspannung pur: Reflexzonenarbeit und wohltuende Griffe für müde Füße. Ein Geschenk an sich selbst.',
    priceOptions: [{ duration: '30 Min', price: '40 €' }],
    imageId: '1568575580762-1a2b3c4d5e6f',
    image: '/img/fussmassage.png',
  },
  {
    id: 'individuelle-wellness',
    title: 'Individuelle Wellness',
    description:
      'Maßgeschneidert auf Ihre Wünsche: Kopf, Hände, Füße oder Körpereinheiten – genau das, was Sie brauchen.',
    priceOptions: [{ duration: '60 Min', price: '70 €' }],
    imageId: '1600334085649-2b3c4d5e6f7a',
    image: '/img/individuelle-wellness.png',
  },
  {
    id: 'partnermassagekurs',
    title: 'Partnermassagekurs',
    description:
      'Lernen Sie Techniken für zu Hause. Gemeinsam Zeit für Zweisamkeit – professionell angeleitet von Stefan Klemm.',
    priceOptions: [{ duration: '3,5h', price: '200 €' }],
    imageId: '1515377905703-3c4d5e6f7a8b',
    image: '/img/partnermassage.png',
    isHighlight: true,
  },
]
