'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SERVICE_ITEMS } from '@/lib/services-data'

/**
 * Bild-URL: Lokales Bild wenn vorhanden, sonst Picsum-Platzhalter
 */
function getImageUrl(service: { id: string; image?: string }) {
  if (service.image) return service.image
  return `https://picsum.photos/seed/${service.id}/600/400`
}

export function Services() {
  return (
    <section
      id="leistungen"
      className="min-h-screen bg-white px-4 py-16 md:px-8 md:py-24 lg:px-12 xl:px-24"
    >
      <h2 className="font-serif text-3xl font-semibold text-brown-600 md:text-4xl lg:text-5xl">
        Leistungen
      </h2>
      <p className="mt-2 max-w-2xl text-brown-500/80">
        Entdecken Sie unser Angebot an Massagen und Wellness-Behandlungen
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_ITEMS.map((service) => (
          <article
            key={service.id}
            className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              service.isHighlight
                ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-white'
                : ''
            }`}
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-sage-100">
              <Image
                src={getImageUrl(service)}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {service.isHighlight && (
                <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  Highlight
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-serif text-xl font-semibold text-brown-600">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brown-500/90">
                {service.description}
              </p>
              <div className="mt-4 space-y-1 rounded-lg bg-sage-50 px-4 py-3">
                {service.priceOptions.map((opt) => (
                  <div
                    key={`${opt.duration}-${opt.price}`}
                    className="flex items-center justify-between text-sm font-medium text-brown-600"
                  >
                    <span>{opt.duration}</span>
                    <span className="font-bold">{opt.price}</span>
                  </div>
                ))}
              </div>
              <Link
                href="#kontakt"
                className="mt-5 block w-full rounded-full bg-gold-500 py-3 text-center font-medium text-white shadow-sm transition-colors hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              >
                Jetzt buchen
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
