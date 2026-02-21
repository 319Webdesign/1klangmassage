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
<<<<<<< HEAD
      className="min-h-screen overflow-hidden bg-white px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24 lg:px-12 xl:px-24"
=======
      className="min-h-screen overflow-hidden bg-sage-100 px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24 lg:px-12 xl:px-24"
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div
            className={`space-y-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
<<<<<<< HEAD
            <span className="inline-block rounded-full bg-sage-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
=======
            <span className="inline-block rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
              Neu bei 1klang
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-brown-700 md:text-4xl lg:text-5xl">
              Zeit zu zweit: Partnermassagekurse in Darmstadt
            </h2>
<<<<<<< HEAD
            <p className="text-base text-brown-600/95 leading-relaxed md:text-lg">
              Lernen Sie die Kunst der Berührung – Wellness für Zuhause in Südhessen.
              In meinen Kursen vermittle ich Ihnen Grifftechniken und Abläufe, mit
              denen Sie sich gegenseitig eine Auszeit vom Alltag schenken können –
              tiefenwirksame Entspannung in Zweisamkeit.
=======
            <p className="text-brown-600/95 leading-relaxed">
              Lernen Sie die Kunst der Berührung. In meinen Kursen vermittle ich
              Ihnen Grifftechniken und Abläufe, mit denen Sie sich gegenseitig zu
              Hause eine Auszeit vom Alltag schenken können – Verwöhnen in
              Zweisamkeit.
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
            </p>
            <ul className="space-y-4">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
<<<<<<< HEAD
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 shadow-sm">
                    <Icon className="h-6 w-6 text-brown-600" strokeWidth={1.5} />
                  </span>
                  <span className="pt-1.5 text-base text-brown-600/95 md:text-lg">{text}</span>
=======
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 shadow-sm">
                    <Icon className="h-5 w-5 text-brown-600" strokeWidth={1.5} />
                  </span>
                  <span className="pt-1.5 text-brown-600/95">{text}</span>
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
<<<<<<< HEAD
              className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-2 md:text-lg"
=======
              className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-medium text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-2"
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
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
<<<<<<< HEAD
              alt="Partnermassagekurs Darmstadt – Wellness zu zweit bei 1klang massage"
              width={600}
              height={450}
              sizes="(max-width: 1024px) 100vw, 50vw"
=======
              alt="Paar beim Partnermassagekurs – entspannte Schultermassage zu Hause"
              width={600}
              height={450}
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
