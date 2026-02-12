'use client'

import { useState } from 'react'
import { Mail, Leaf } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [gdprConsent, setGdprConsent] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && gdprConsent) {
      setIsSuccess(true)
    }
  }

  return (
    <section
      id="newsletter"
      className="min-h-0 bg-sage-100 px-4 py-12 md:min-h-screen md:px-8 md:py-24 lg:px-12 xl:px-24"
    >
      <div className="mx-auto max-w-2xl">
        <div className="flex justify-center">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-sm">
            <Mail className="h-6 w-6 text-sage-600" strokeWidth={1.5} />
            <Leaf className="absolute -right-0.5 -top-0.5 h-4 w-4 text-sage-500" strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="mt-6 text-center font-serif text-2xl font-semibold text-brown-600 md:text-3xl">
          Nichts mehr verpassen – Ihr Weg zu exklusiven Wohlfühlmomenten.
        </h2>
        <p className="mt-4 text-center text-brown-500/90 leading-relaxed">
          Melden Sie sich für meinen kostenlosen Newsletter an und erhalten Sie
          Tipps zur Entspannung sowie Informationen zu neuen Angeboten und freien
          Terminen in Darmstadt.
        </p>

        {isSuccess ? (
          <div className="mt-8 rounded-2xl bg-white/80 px-6 py-6 text-center shadow-sm">
            <p className="text-sm font-medium text-sage-600 md:text-base">
              Vielen Dank! Bitte bestätigen Sie Ihre Anmeldung in Ihrem Postfach.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="newsletter-email" className="sr-only">
                E-Mail-Adresse
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                required
                className="min-h-[48px] w-full rounded-xl border border-sage-200 bg-white px-5 py-4 text-base text-brown-600 placeholder:text-brown-400/60 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500/30"
              />
            </div>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={gdprConsent}
                onChange={(e) => setGdprConsent(e.target.checked)}
                required
                className="mt-1.5 h-5 w-5 shrink-0 rounded border-sage-300 text-sage-600 focus:ring-sage-500"
              />
              <span className="text-sm leading-relaxed text-brown-500/90">
                Ich stimme zu, dass meine Daten zum Versand des Newsletters
                verarbeitet werden.
              </span>
            </label>
            <button
              type="submit"
              className="min-h-[48px] w-full rounded-xl bg-sage-600 px-6 py-4 font-medium text-white shadow-sm transition-colors duration-300 hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Anmelden
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
