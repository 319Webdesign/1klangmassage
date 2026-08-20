'use client'

import { useEffect, useState } from 'react'
import type {} from 'altcha/types/react'
import { ALTCHA_ERROR_MESSAGE, ALTCHA_FIELD_NAME } from '@/lib/altcha-messages'

type AltchaFieldProps = {
  disabled?: boolean
}

const widgetConfiguration = JSON.stringify({
  humanInteractionSignature: false,
  validationMessage: ALTCHA_ERROR_MESSAGE,
})

export function AltchaField({ disabled = false }: AltchaFieldProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    void Promise.all([import('altcha'), import('altcha/i18n/de')]).then(() => {
      if (!cancelled) {
        setReady(true)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  if (!ready) {
    return (
      <div
        className="min-h-[52px] w-full rounded-lg border border-sage-200 bg-white"
        aria-hidden
      />
    )
  }

  return (
    <div
      className={`altcha-field w-full max-w-full ${disabled ? 'pointer-events-none opacity-70' : ''}`}
      role="group"
      aria-label="Sicherheitsprüfung"
    >
      <altcha-widget
        challenge="/api/altcha/challenge"
        configuration={widgetConfiguration}
        display="standard"
        language="de"
        name={ALTCHA_FIELD_NAME}
        theme="default"
        type="checkbox"
        style={{
          '--altcha-border-color': '#b5c4a3',
          '--altcha-border-radius': '0.5rem',
          '--altcha-border-width': '1px',
          '--altcha-color-base': '#ffffff',
          '--altcha-color-base-content': '#86705d',
          '--altcha-color-error': '#b91c1c',
          '--altcha-color-primary': '#8e9d7b',
          '--altcha-color-primary-content': '#ffffff',
          '--altcha-color-success': '#526044',
          '--altcha-max-width': '100%',
          '--altcha-padding': '0.7rem',
          '--altcha-shadow': 'none',
          '--altcha-checkbox-border-radius': '0.25rem',
        }}
      />
    </div>
  )
}
