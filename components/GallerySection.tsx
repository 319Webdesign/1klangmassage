'use client'

import Image from 'next/image'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const PHOTOS = [
  {
    src: '/img/praxis/raum-innen.jpg',
    alt: 'Heller Behandlungsraum mit Massageliege, lila Handtuch, Paravent und Holzboden',
    caption: 'Der Behandlungsraum',
  },
  {
    src: '/img/praxis/liege.jpg',
    alt: 'Vorbereitete Massageliege mit Kissen, Handtuch und Salzlampe am Fenster',
    caption: 'Die Massageliege',
  },
  {
    src: '/img/praxis/umkleide.jpg',
    alt: 'Umkleideecke mit Stuhl, gefalteten Decken, Kissen und Paravent',
    caption: 'Die Umkleide',
  },
  {
    src: '/img/praxis/bad.jpg',
    alt: 'Bad mit Badewanne, Waschbecken und warmem Licht',
    caption: 'Das Bad',
  },
  {
    src: '/img/praxis/tassen.jpg',
    alt: 'Wasserkaraffe, Gläser und Teetassen auf einem Tisch',
    caption: 'Wasser und Tee',
  },
  {
    src: '/img/praxis/raum-aussen.jpg',
    alt: 'Blick durch die Glastür in den beleuchteten Behandlungsraum',
    caption: 'Blick in den Raum',
  },
] as const

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchStartX = useRef<number | null>(null)
  const titleId = useId()

  const close = useCallback(() => setActiveIndex(null), [])

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + PHOTOS.length - 1) % PHOTOS.length
    )
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % PHOTOS.length
    )
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (activeIndex !== null && !dialog.open) {
      dialog.showModal()
    } else if (activeIndex === null && dialog.open) {
      dialog.close()
    }
  }, [activeIndex])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPrevious()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNext()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, showNext, showPrevious])

  const activePhoto = activeIndex !== null ? PHOTOS[activeIndex] : null

  return (
    <section
      id="praxis"
      className="bg-white px-4 py-16 md:px-8 md:py-24 lg:px-12 xl:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-site-heading text-brown-600">Die Praxis</h2>
        <p className="text-site-body mt-2 max-w-2xl text-brown-500/80">
          Ruhig, hell und persönlich eingerichtet – so erwartet Sie der Raum
          bei 1klang massage in Darmstadt.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {PHOTOS.map((photo, index) => (
            <li key={photo.src}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group flex h-full w-full flex-col rounded-2xl text-left shadow-md transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                aria-label={`${photo.caption} vergrößern`}
              >
                <span className="relative block aspect-[3/2] overflow-hidden rounded-t-2xl">
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="text-site-body flex flex-1 items-center rounded-b-2xl bg-sage-50 px-3 py-2.5 font-medium text-brown-600 md:px-4 md:py-3">
                  {photo.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={close}
        className="fixed inset-0 z-[70] m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-footer-bg/95"
      >
        {activePhoto && activeIndex !== null && (
          <div
            className="flex h-full w-full items-center justify-center p-4 md:p-10"
            onClick={close}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0]?.clientX ?? null
              }}
              onTouchEnd={(event) => {
                const startX = touchStartX.current
                const endX = event.changedTouches[0]?.clientX
                touchStartX.current = null
                if (startX == null || endX == null) return
                const delta = endX - startX
                if (delta > 48) showPrevious()
                if (delta < -48) showNext()
              }}
            >
              <div className="mb-3 flex items-start justify-between gap-4 text-white">
                <p id={titleId} className="text-site-body">
                  {activePhoto.caption}
                  <span className="mt-0.5 block text-sm text-white/70">
                    {activeIndex + 1} von {PHOTOS.length}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  aria-label="Galerie schließen"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="relative h-[min(70vh,760px)] overflow-hidden rounded-2xl bg-brown-700/40">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brown-700 shadow-md transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brown-700 shadow-md transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
