'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.program, href: '/#pilares' },
    { label: t.nav.plans, href: '/#planes' },
    { label: t.nav.club, href: '/#comunidad' },
    { label: t.nav.about, href: '/quienes-somos' },
    { label: t.nav.mainSite, href: 'https://proactivasalud.com' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 lg:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/ProActiva-NUEVA.png"
            alt="Proactiva Salud"
            width={296}
            height={88}
            className="h-[6.5rem] w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body font-black text-[13px] xl:text-[14px] whitespace-nowrap text-ink-mid hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#comunidad" className="flex-shrink-0">
            <Image
              src="/proactiva-club.png"
              alt={t.nav.club}
              width={112}
              height={112}
              className="h-16 w-16 xl:h-20 xl:w-20 object-contain rounded-full"
            />
          </Link>
        </nav>

        {/* CTA + language switcher */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
          <LanguageSwitcher />
          <Link
            href="/#inscripcion"
            className="inline-flex whitespace-nowrap bg-brand text-white font-body font-semibold text-[13px] xl:text-sm px-4 py-2.5 rounded-full hover:bg-brand-dark transition-all duration-200 shadow-button hover:shadow-hover"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden text-ink p-2 -mr-2"
          aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="lg:hidden bg-white shadow-card border-t border-brand-muted/40 px-6 py-4 flex flex-col gap-1"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body font-black text-[18px] text-ink-mid hover:text-brand transition-colors py-2.5"
            >
              {link.label}
            </Link>
          ))}
          <div className="py-2.5">
            <LanguageSwitcher />
          </div>
          <Link
            href="/#inscripcion"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-brand text-white font-body font-semibold text-sm px-5 py-3 rounded-full text-center hover:bg-brand-dark transition-colors shadow-button"
          >
            {t.nav.cta}
          </Link>
        </nav>
      )}
    </header>
  )
}
