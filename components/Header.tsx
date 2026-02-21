'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#kundenstimmen', label: 'Kundenstimmen' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
<<<<<<< HEAD
    <header className="sticky top-0 z-50 border-b border-sage-700/50 bg-sage-600 backdrop-blur-sm">
=======
    <header className="sticky top-0 z-50 border-b border-sage-200/60 bg-sage-100/95 backdrop-blur-sm">
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="1Klangmassage Startseite"
        >
          <Image
<<<<<<< HEAD
            src="/img/logo.png"
            alt="1klang massage – Wellness & Entspannungsmassage Darmstadt"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
            priority
          />
          <span className="font-serif text-lg font-semibold md:text-xl">
            <span className="text-white">1k</span>
            <span className="text-white/90">lang massage</span>
=======
            src="/img/logo.jpg"
            alt="1Klangmassage Logo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-full object-cover md:h-12 md:w-12"
            priority
          />
          <span className="font-serif text-lg font-semibold text-brown-600 md:text-xl">
            1klang massage
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
          </span>
        </Link>

        {/* Desktop Nav */}
<<<<<<< HEAD
        <nav className="hidden gap-6 text-lg font-semibold text-white/90 md:flex md:text-xl">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-white">
=======
        <nav className="hidden gap-6 text-base font-medium text-brown-500/80 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-brown-600">
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Burger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
<<<<<<< HEAD
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-sage-500/50 md:hidden"
=======
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brown-600 transition-colors hover:bg-sage-200/60 md:hidden"
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
<<<<<<< HEAD
        className={`absolute left-0 right-0 top-16 border-b border-sage-700/50 bg-sage-600 shadow-lg transition-all duration-200 md:hidden ${
=======
        className={`absolute left-0 right-0 top-16 border-b border-sage-200/60 bg-sage-100 shadow-lg transition-all duration-200 md:hidden ${
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
          isMenuOpen
            ? 'visible opacity-100'
            : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
<<<<<<< HEAD
              className="rounded-lg px-4 py-3 text-xl font-semibold text-white transition-colors hover:bg-sage-500/50"
=======
              className="rounded-lg px-4 py-3 text-lg font-medium text-brown-600 transition-colors hover:bg-sage-200/60"
>>>>>>> 80d5e21c9bf1ef0cf0d233d5f7ea1c602f51b0dd
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
