'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'El programa', href: '/#pilares' },
  { label: 'Planes', href: '/#planes' },
  { label: 'Club +50', href: '/#comunidad' },
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Página Central', href: 'https://proactivasalud.com' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 lg:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/ProActiva-NUEVA.png"
            alt="Proactiva Salud"
            width={250}
            height={75}
            className="h-[62px] lg:h-[100px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body font-black text-[11px] text-ink-mid hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#comunidad">
            <Image
              src="/proactiva-club.png"
              alt="Club +50"
              width={112}
              height={112}
              className="h-28 w-28 object-contain rounded-full"
            />
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/#inscripcion"
          className="hidden md:inline-flex bg-brand text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-brand-dark transition-all duration-200 shadow-button hover:shadow-hover"
        >
          Unirme al programa de bienestar integral
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-ink p-2 -mr-2"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="md:hidden bg-white shadow-card border-t border-brand-muted/40 px-6 py-4 flex flex-col gap-1"
          aria-label="Navegación móvil"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body font-black text-sm text-ink-mid hover:text-brand transition-colors py-2.5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#inscripcion"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-brand text-white font-body font-semibold text-sm px-5 py-3 rounded-full text-center hover:bg-brand-dark transition-colors shadow-button"
          >
            Unirme al programa de bienestar integral
          </Link>
        </nav>
      )}
    </header>
  )
}
