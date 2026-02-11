/**
 * Kundenstimmen – Sanity-ready
 * Schema: { _id, quote, author, order }
 */
export interface Testimonial {
  id: string
  quote: string
  author: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tina',
    quote:
      'Stefan schafft es mit seiner fröhlichen Art gleich eine gute Atmosphäre zu schaffen, in der man sich entspannen kann. Ich fühle mich unter seinen Händen immer gut aufgehoben.',
    author: 'Tina',
  },
  {
    id: 'christine',
    quote:
      'Stefans Massage ist die perfekte Mischung aus wohltuender Anregung und nachwirkender Entspannung.',
    author: 'Christine',
  },
  {
    id: 'reinhard',
    quote:
      'Das ist so entspannend, dass ich aufpassen muss, dass ich nicht wegdämmere.',
    author: 'Reinhard',
  },
  {
    id: 'dominique',
    quote:
      'Vielen Dank für die professionelle Rücken-Nacken-Massage. Hat mich wirklich sehr entspannt. Ich freue mich schon auf weitere Massagen mit 1klang massage.',
    author: 'Dominique',
  },
]
