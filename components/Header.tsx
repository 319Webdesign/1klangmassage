'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/aktuelles', label: 'Aktuelles' },
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#ueber-mich', label: 'Über mich' },
  { href: '/#kundenstimmen', label: 'Kundenstimmen' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sage-700/50 bg-sage-600 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="1Klangmassage Startseite"
        >
          <Image
            src="/img/logo.png"
            alt="1klang massage – Wellness & Entspannungsmassage Darmstadt"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
            priority
          />
          <span className="text-site-lead font-serif font-semibold">
            <span className="text-white">1k</span>
            <span className="text-white/90">lang massage</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="text-site-lead hidden gap-6 font-semibold text-white/90 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Burger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-sage-500/50 md:hidden"
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
        className={`absolute left-0 right-0 top-16 border-b border-sage-700/50 bg-sage-600 shadow-lg transition-all duration-200 md:hidden ${
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
              className="text-site-lead rounded-lg px-4 py-3 font-semibold text-white transition-colors hover:bg-sage-500/50"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
