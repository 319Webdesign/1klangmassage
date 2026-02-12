import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, MessageCircle } from 'lucide-react'

const quickInfos = [
  { icon: Calendar, text: 'Flexible Termine' },
  { icon: MapPin, text: 'Zentrale Lage in Darmstadt' },
  { icon: MessageCircle, text: 'Individuelle Beratung' },
]

export function CtaSection() {
  return (
    <section className="min-h-screen bg-sage-600 px-4 py-16 md:px-8 md:py-24 lg:px-12 xl:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Links: Text & Buttons */}
          <div className="text-white">
            <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Bereit für Ihre persönliche Auszeit?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Ob Verspannungen lösen oder einfach mal tief durchatmen – ich
              begleite Sie gerne auf Ihrem Weg zu mehr Wohlbefinden in Darmstadt.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#kontakt"
                className="w-full rounded-full bg-orange-500 px-8 py-4 text-center font-medium text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-sage-600 sm:w-auto"
              >
                Jetzt Wunschtermin anfragen
              </Link>
              <Link
                href="#kontakt?gutschein"
                className="w-full rounded-full border-2 border-white/80 px-8 py-4 text-center font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-sage-600 sm:w-auto"
              >
                Gutschein verschenken
              </Link>
            </div>
          </div>

          {/* Rechts: Porträt & Quick-Info */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex flex-col items-center gap-6 lg:items-end">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-4 lg:flex-col lg:items-end">
                <Image
                  src="/img/Stefan-Portrait.jpg"
                  alt="Stefan Klemm"
                  width={120}
                  height={120}
                  className="rounded-full object-cover ring-4 ring-white/30"
                />
                <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-sage-700 shadow-sm">
                  Ihr Experte für Klang & Wellness
                </span>
              </div>
              <ul className="flex flex-col gap-3 text-white/95">
                {quickInfos.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center justify-center gap-3 lg:justify-end"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span className="text-sm font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
