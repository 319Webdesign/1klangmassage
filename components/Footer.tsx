import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const serviceLinks = [
  { href: '#leistungen', label: 'Klangmassage' },
  { href: '#leistungen', label: 'Rücken-Nacken-Massage' },
  { href: '#leistungen', label: 'Partnermassagekurs' },
  { href: '#leistungen', label: 'Fußmassage' },
]

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

export function Footer() {
  return (
    <footer className="mt-auto bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="grid gap-8 border-b border-white/20 pb-10 text-center md:grid-cols-2 md:gap-10 md:text-left lg:grid-cols-4 lg:gap-12">
          {/* Spalte 1: Über 1klang */}
          <div className="flex flex-col items-center space-y-4 border-b border-white/20 pb-8 md:items-start md:border-b-0 md:pb-0">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/img/logo.jpg"
                alt="1klang massage Logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="font-serif text-xl font-semibold text-white">
                1klang massage
              </span>
            </Link>
            <p className="font-serif text-lg italic text-white/90">
              Ankommen. Aufatmen. Einklang finden.
            </p>
            <p className="text-sm leading-relaxed text-white/80">
              Individuelle Massagen und Wellness in Darmstadt – persönlich auf
              Ihre Bedürfnisse abgestimmt.
            </p>
          </div>

          {/* Spalte 2: Leistungen */}
          <div className="flex flex-col items-center space-y-4 border-b border-white/20 pb-8 md:items-start md:border-b-0 md:pb-0">
            <h3 className="font-serif text-lg font-semibold text-white">
              Leistungen
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-block text-sm text-white/80 transition-colors hover:text-gold-500 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Kontakt & Standort */}
          <div className="flex flex-col items-center space-y-4 border-b border-white/20 pb-8 md:items-start md:border-b-0 md:pb-0">
            <h3 className="font-serif text-lg font-semibold text-white">
              Kontakt & Standort
            </h3>
            <address className="not-italic">
              <div className="flex items-start justify-center gap-3 md:justify-start">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/70"
                  aria-hidden
                />
                <div className="text-sm text-white/80">
                  <p className="font-medium text-white">1klang massage</p>
                  <p>Stefan Klemm</p>
                  <p className="mt-1">Carsonweg 1</p>
                  <p>64289 Darmstadt</p>
                </div>
              </div>
            </address>
            <div className="flex flex-col items-center gap-2 md:items-start">
              <a
                href="tel:+496151123456"
                className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-gold-500 hover:underline"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                <span>Termin vereinbaren</span>
              </a>
              <a
                href="mailto:info@1klangmassage.de"
                className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-gold-500 hover:underline"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                <span>info@1klangmassage.de</span>
              </a>
            </div>
            <p className="text-sm text-white/70">
              Öffnungszeiten: Termine nach Vereinbarung
            </p>
          </div>

          {/* Spalte 4: Rechtliches & Service */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h3 className="font-serif text-lg font-semibold text-white">
              Rechtliches & Service
            </h3>
            <ul className="space-y-2">
              {legalLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-block text-sm text-white/80 transition-colors hover:text-gold-500 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/60">
              Ausgebildeter Masseur – regelmäßige Fortbildung
            </p>
          </div>
        </div>

        {/* Untere Leiste */}
        <div className="flex flex-col items-center gap-4 pt-8 md:flex-row md:justify-between">
          <p className="text-center text-sm text-white/70 md:text-left">
            © 2026 1klang massage – Stefan Klemm. Handgefertigt in Südhessen.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:info@1klangmassage.de"
              className="text-white/70 transition-colors hover:text-gold-500"
              aria-label="E-Mail an 1klang massage"
            >
              <Mail className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="tel:+496151123456"
              className="text-white/70 transition-colors hover:text-gold-500"
              aria-label="1klang massage anrufen"
            >
              <Phone className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <p className="pb-4 pt-6 text-center text-sm text-white/60">
          Designed by{' '}
          <a
            href="https://319webdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sage-400 transition-colors hover:text-sage-300"
          >
            319Webdesign
          </a>
        </p>
      </div>
    </footer>
  )
}
