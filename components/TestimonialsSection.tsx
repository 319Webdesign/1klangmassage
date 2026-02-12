'use client'

import { useEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/testimonials'

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsInView(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(node)
    return () => observer.unobserve(node)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="kundenstimmen"
      className="min-h-screen bg-sage-100 px-4 py-16 md:px-8 md:py-24 lg:px-12 xl:px-24"
    >
      <h2 className="font-serif text-3xl font-semibold text-brown-600 md:text-4xl lg:text-5xl">
        Kundenstimmen
      </h2>
      <p className="mt-2 max-w-2xl text-brown-500/80">
        Was Gäste über ihre Erfahrung bei 1klang massage sagen
      </p>

      <div className="mt-8 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <article
            key={testimonial.id}
            className={`w-full rounded-2xl bg-white/95 p-6 shadow-lg transition-all duration-700 ${
              isInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isInView ? `${index * 100}ms` : '0ms',
            }}
          >
            <Quote
              className="h-10 w-10 text-sage-400"
              strokeWidth={1}
              aria-hidden
            />
            <blockquote className="mt-4 text-brown-500/95 leading-relaxed">
              &bdquo;{testimonial.quote}&ldquo;
            </blockquote>
            <cite className="mt-4 block font-serif text-lg font-semibold not-italic text-brown-600">
              {testimonial.author}
            </cite>
          </article>
        ))}
      </div>
    </section>
  )
}
