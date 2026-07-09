'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/faq-data'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="bg-sage-100 px-4 py-16 md:px-8 md:py-24 lg:px-12 xl:px-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-site-heading text-brown-600">
          Häufige Fragen zu Wellness & Entspannungsmassage
        </h2>
        <p className="text-site-body mt-2 text-brown-500/80">
          Antworten auf die wichtigsten Fragen zu unseren Massagen in Darmstadt
        </p>
        <dl className="mt-10 space-y-2">
          {FAQ_ITEMS.map(({ question, answer }, index) => {
            const isOpen = openIndex === index
            const answerParts = answer.split(/<br\s*\/?>/i)
            return (
              <div
                key={question}
                className="overflow-hidden rounded-xl border border-sage-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="text-site-lead flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-serif font-semibold text-brown-600 transition-colors hover:bg-sage-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span>{question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brown-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>
                </dt>
                <dd className="overflow-hidden" id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`}>
                  <div
                    className="grid transition-[grid-template-rows] duration-200 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="min-h-0">
                      <p className="text-site-body border-t border-sage-100 px-5 py-4 text-brown-500/90">
                        {answerParts.map((part, partIndex) => (
                          <span key={`${question}-part-${partIndex}`}>
                            {part}
                            {partIndex < answerParts.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
