'use client'

import { Music, Heart, Sparkles, Users } from 'lucide-react'
import type { Service } from '@/lib/services'

const ICON_MAP = {
  Music,
  Heart,
  Sparkles,
  Users,
} as const

export function ServiceCard({ service }: { service: Service }) {
  const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Music

  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8 ${
        service.isHighlight
          ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-sage-100'
          : ''
      }`}
    >
      {service.isHighlight && (
        <span className="absolute -top-3 left-6 rounded-full bg-orange-500 px-3 py-0.5 text-xs font-medium text-white">
          Tipp des Hauses
        </span>
      )}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-600">
        <IconComponent className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl font-semibold text-brown-600">
        {service.title}
      </h3>
      <div className="mt-2 flex gap-3 text-sm text-sage-600">
        <span>{service.duration}</span>
        <span className="font-bold text-brown-600">{service.price}</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brown-500/90">
        {service.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sage-400" />
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  )
}
