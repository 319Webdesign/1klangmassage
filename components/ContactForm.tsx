'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { ALTCHA_ERROR_MESSAGE, ALTCHA_FIELD_NAME } from '@/lib/altcha-messages'
import type { AltchaWidgetElement } from 'altcha/types/generic'

const AltchaField = dynamic(
  () => import('@/components/AltchaField').then((mod) => mod.AltchaField),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-[52px] w-full rounded-lg border border-sage-200 bg-white"
        aria-hidden
      />
    ),
  }
)

function resetAltchaWidget(form: HTMLFormElement) {
  const widget = form.querySelector('altcha-widget') as AltchaWidgetElement | null
  widget?.reset()
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const altchaPayload = formData.get(ALTCHA_FIELD_NAME)

    if (typeof altchaPayload !== 'string' || !altchaPayload.trim()) {
      setStatus('error')
      setErrorMessage(ALTCHA_ERROR_MESSAGE)
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error || 'Ein Fehler ist aufgetreten.')
        resetAltchaWidget(form)
        return
      }

      setStatus('success')
      form.reset()
      resetAltchaWidget(form)
    } catch {
      setStatus('error')
      setErrorMessage('Verbindungsfehler. Bitte versuchen Sie es später erneut.')
      resetAltchaWidget(form)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        required
        disabled={status === 'loading'}
        className="text-site-body rounded-lg border border-sage-200 bg-white px-4 py-3 text-brown-500 placeholder:text-brown-400/60 focus:border-sage-400 focus:outline-none focus:ring-1 focus:ring-sage-400 disabled:opacity-70"
      />
      <label htmlFor="email" className="sr-only">
        E-Mail
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="E-Mail"
        required
        disabled={status === 'loading'}
        className="text-site-body rounded-lg border border-sage-200 bg-white px-4 py-3 text-brown-500 placeholder:text-brown-400/60 focus:border-sage-400 focus:outline-none focus:ring-1 focus:ring-sage-400 disabled:opacity-70"
      />
      <label htmlFor="message" className="sr-only">
        Nachricht
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Nachricht"
        required
        disabled={status === 'loading'}
        className="text-site-body rounded-lg border border-sage-200 bg-white px-4 py-3 text-brown-500 placeholder:text-brown-400/60 focus:border-sage-400 focus:outline-none focus:ring-1 focus:ring-sage-400 disabled:opacity-70"
      />
      <AltchaField disabled={status === 'loading'} />
      {status === 'success' && (
        <p className="text-site-body rounded-lg bg-sage-100 px-4 py-3 font-medium text-sage-700">
          Vielen Dank! Ihre Nachricht wurde gesendet.
        </p>
      )}
      {status === 'error' && (
        <p className="text-site-body rounded-lg bg-red-50 px-4 py-3 font-medium text-red-700">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="text-site-body w-fit rounded-full bg-orange-500 px-8 py-3 font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 disabled:opacity-70"
      >
        {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden'}
      </button>
    </form>
  )
}
