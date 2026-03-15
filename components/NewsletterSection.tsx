'use client'

import { Mail, Leaf } from 'lucide-react'
import Script from 'next/script'

const CLEVERREACH_FORM_ACTION = 'https://eu2.cleverreach.com/f/250480-246890/wcs/'
const RECAPTCHA_SITE_KEY = '6Lfhcd0SAAAAAOBEHmAVEHJeRnrH8T7wPvvNzEPD'

export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="min-h-0 bg-sage-100 px-4 py-12 md:min-h-screen md:px-8 md:py-24 lg:px-12 xl:px-24"
    >
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-center">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-sm">
            <Mail className="h-6 w-6 text-sage-600" strokeWidth={1.5} />
            <Leaf className="absolute -right-0.5 -top-0.5 h-4 w-4 text-sage-500" strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl font-semibold text-brown-600 md:text-4xl lg:text-5xl">
          Nichts mehr verpassen
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl">– Ihr Weg zu exklusiven Wohlfühlmomenten.</span>
        </h2>
        <p className="mt-4 text-center text-base text-brown-500/90 leading-relaxed md:text-lg">
          Melden Sie sich für meinen kostenlosen Newsletter an und erhalten Sie
          Tipps zur Entspannung sowie Informationen zu neuen Angeboten und freien
          Terminen in Darmstadt.
        </p>

        <form
          action={CLEVERREACH_FORM_ACTION}
          method="POST"
          target="_blank"
          className="mt-8 space-y-5"
        >
          <div>
            <label htmlFor="newsletter-email" className="sr-only">
              E-Mail-Adresse
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              required
              autoComplete="email"
              className="min-h-[48px] w-full rounded-xl border border-sage-200 bg-white px-5 py-4 text-base text-brown-600 placeholder:text-brown-400/60 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500/30"
            />
          </div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              value="1"
              required
              className="mt-1.5 h-5 w-5 shrink-0 rounded border-sage-300 text-sage-600 focus:ring-sage-500"
            />
            <span className="text-sm leading-relaxed text-brown-500/90">
              Ich stimme zu, dass meine Daten zum Versand des Newsletters
              verarbeitet werden.
            </span>
          </label>
          <div
            className="g-recaptcha"
            data-sitekey={RECAPTCHA_SITE_KEY}
            aria-label="Sicherheitsprüfung"
          />
          <button
            type="submit"
            className="min-h-[48px] w-full rounded-xl bg-sage-600 px-6 py-4 font-medium text-white shadow-sm transition-colors duration-300 hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Anmelden
          </button>
        </form>
      </div>
    </section>
  )
}
