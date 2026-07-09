'use client'

import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/testimonials'

const ROTATION_INTERVAL_MS = 5000

export function HeroTestimonial() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, ROTATION_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  const testimonial = TESTIMONIALS[index]

  return (
    <blockquote className="mt-12 flex justify-center gap-3 rounded-xl bg-white/60 p-4 shadow-sm lg:justify-start">
      <Quote className="h-8 w-8 shrink-0 text-sage-400" aria-hidden />
      <div className="min-h-[4rem]">
        <p className="text-site-body italic text-brown-500/90">
          &bdquo;{testimonial.quote}&ldquo;
        </p>
        <cite className="text-site-body mt-2 block not-italic text-sage-600">
          {testimonial.author}
        </cite>
      </div>
    </blockquote>
  )
}
