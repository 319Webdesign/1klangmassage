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
    <header className="sticky top-0 z-50 border-b border-sage-200/60 bg-sage-100/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="1Klangmassage Startseite"
        >
          <Image
            src="/img/logo.jpg"
            alt="1Klangmassage Logo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-full object-cover md:h-12 md:w-12"
            priority
          />
          <span className="font-serif text-lg font-semibold text-brown-600 md:text-xl">
            1klang massage
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 text-base font-medium text-brown-500/80 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-brown-600">
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Burger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brown-600 transition-colors hover:bg-sage-200/60 md:hidden"
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
        className={`absolute left-0 right-0 top-16 border-b border-sage-200/60 bg-sage-100 shadow-lg transition-all duration-200 md:hidden ${
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
              className="rounded-lg px-4 py-3 text-lg font-medium text-brown-600 transition-colors hover:bg-sage-200/60"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
