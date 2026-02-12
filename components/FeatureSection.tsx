'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Hand, Heart, Home } from 'lucide-react'

export function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const node = sectionRef.current
    if (!node) return
    observer.observe(node)
    return () => observer.unobserve(node)
  }, [])

  const features = [
    {
      icon: Hand,
      text: 'Professionelle Grifftechniken lernen.',
    },
    {
      icon: Heart,
      text: 'Ideal für Paare & beste Freunde.',
    },
    {
      icon: Home,
      text: 'Wellness-Feeling für das eigene Zuhause.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="partnermassage"
      className="min-h-screen overflow-hidden bg-sage-100 px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24 lg:px-12 xl:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div
            className={`space-y-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
              Neu bei 1klang
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-brown-700 md:text-4xl lg:text-5xl">
              Zeit zu zweit: Partnermassagekurse in Darmstadt
            </h2>
            <p className="text-brown-600/95 leading-relaxed">
              Lernen Sie die Kunst der Berührung. In meinen Kursen vermittle ich
              Ihnen Grifftechniken und Abläufe, mit denen Sie sich gegenseitig zu
              Hause eine Auszeit vom Alltag schenken können – Verwöhnen in
              Zweisamkeit.
            </p>
            <ul className="space-y-4">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 shadow-sm">
                    <Icon className="h-5 w-5 text-brown-600" strokeWidth={1.5} />
                  </span>
                  <span className="pt-1.5 text-brown-600/95">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-medium text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-2"
            >
              Mehr Infos
            </a>
          </div>
          <div
            className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Image
              src="/img/partnermassage.png"
              alt="Paar beim Partnermassagekurs – entspannte Schultermassage zu Hause"
              width={600}
              height={450}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
