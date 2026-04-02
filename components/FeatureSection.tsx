'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Users } from 'lucide-react'

const modules = [
  {
    number: 'Basiskurs',
    title: 'Rücken, Nacken & Kopf',
    description:
      'Grundlagen der Massage: Effleurage (Streichung), Petrissage (Knetung) und Friktion (Reibung) – praktisch geübt und direkt anwendbar.',
    duration: '3,5 Stunden',
    price: '200 €',
  },
  {
    number: 'Vertiefung I',
    title: 'Arme & Hände, Beine & Füße',
    description: 'Weiterführende Grifftechniken für die Extremitäten – Entspannung von Kopf bis Fuß.',
    duration: '2,5 Stunden',
    price: '130 €',
  },
  {
    number: 'Vertiefung II',
    title: 'Gesicht, Brust & Bauch',
    description: 'Sanfte Techniken für besonders sensible Körperbereiche – tiefe Entspannung und Wohlbefinden.',
    duration: '2,5 Stunden',
    price: '130 €',
  },
]

export function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const node = sectionRef.current
    if (!node) return
    observer.observe(node)
    return () => observer.unobserve(node)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="partnermassage"
      className="overflow-hidden bg-white px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24 lg:px-12 xl:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Linke Spalte – Text & Module */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block rounded-full bg-sage-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
              Neu bei 1klang
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-brown-700 md:text-4xl lg:text-5xl">
              Zeit zu zweit: Partnermassagekurse in Darmstadt
            </h2>
            <p className="text-base text-brown-600/95 leading-relaxed md:text-lg">
              Ein Kurs für zwei Personen, in dem die Grundlagen der Massage vermittelt werden.
              Grifftechniken wie Effleurage, Petrissage und Friktion werden gezeigt und praktisch geübt –
              für tiefenwirksame Entspannung in Zweisamkeit.
            </p>

            {/* Hinweis zu viert */}
            <div className="flex items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" strokeWidth={1.5} />
              <p className="text-sm text-brown-600/95 md:text-base">
                <span className="font-semibold">Auch zu viert buchbar:</span> Der Kurs kann auf Wunsch mit vier Personen stattfinden (50&nbsp;% Aufpreis).
              </p>
            </div>

            {/* Module */}
            <div className="space-y-4">
              {modules.map((mod) => (
                <div
                  key={mod.number}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-sage-600 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
                      {mod.number}
                    </span>
                    <span className="text-sm font-medium text-brown-500">{mod.duration}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-brown-700">{mod.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brown-600/90">{mod.description}</p>
                  <p className="mt-3 text-right text-lg font-semibold text-orange-500">{mod.price}</p>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="mt-2 inline-block rounded-full bg-orange-500 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 md:text-lg"
            >
              Jetzt anfragen
            </a>
          </div>

          {/* Rechte Spalte – Bild */}
          <div
            className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 delay-200 lg:sticky lg:top-28 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Image
              src="/img/partnermassage-neu.png"
              alt="Partnermassagekurs Darmstadt – Wellness zu zweit bei 1klang massage"
              width={600}
              height={700}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
