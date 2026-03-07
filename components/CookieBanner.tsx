'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const COOKIE_CONSENT_KEY = '1klang-cookie-consent'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ necessary: true, analytics: true }))
    setIsVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ necessary: true, analytics: false }))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-sage-600/50 bg-sage-600 px-4 py-5 shadow-2xl md:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex-1">
          <h2 id="cookie-banner-title" className="font-serif text-lg font-semibold text-white md:text-xl">
            Cookie-Einstellungen
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-white/90 md:text-base">
            Wir verwenden Cookies, um die Funktionalität der Website zu gewährleisten und um Ihre Nutzererfahrung zu verbessern.
            Weitere Informationen finden Sie in unserer{' '}
            <Link
              href="/cookie-richtlinien"
              className="font-medium text-orange-400 underline decoration-orange-400/70 underline-offset-2 hover:text-orange-300"
            >
              Cookie-Richtlinie
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={acceptNecessary}
            className="rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-sage-600"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-sage-600"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
