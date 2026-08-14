'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.program, href: '/#pilares' },
    { label: t.nav.plans, href: '/#planes' },
    { label: t.nav.club, href: '/#comunidad' },
    { label: t.nav.about, href: '/quienes-somos' },
    { label: t.footer.navUnirme, href: '/#inscripcion' },
  ]

  return (
    <footer className="bg-brand-dark py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top row */}
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/ProActiva-NUEVA.png"
                alt="Proactiva Salud"
                width={160}
                height={48}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="font-body text-white text-sm max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-body text-white/70 text-xs uppercase tracking-widest mb-4">
              {t.footer.programHeading}
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-white text-sm hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-white/70 text-xs uppercase tracking-widest mb-4">
              {t.footer.contactHeading}
            </p>
            <p className="font-body text-white text-sm leading-relaxed max-w-[18ch]">
              {t.footer.contactText}
            </p>
            <a
              href="mailto:info@proactivasalud.com"
              className="block mt-3 font-body text-white text-sm hover:text-white/70 transition-colors"
            >
              info@proactivasalud.com
            </a>
            <a
              href="tel:+541176781555"
              className="block mt-1 font-body text-white text-sm hover:text-white/70 transition-colors"
            >
              +54 11 7678-1555
            </a>
            <a
              href="#inscripcion"
              className="inline-block mt-3 font-body text-white text-sm font-semibold hover:text-white/70 transition-colors"
            >
              {t.footer.formLink}
            </a>
          </div>
        </div>

        {/* Divider + legal */}
        <div className="pt-8 border-t border-white/20 flex justify-center sm:justify-start">
          <p className="font-body text-white/70 text-xs">
            {t.footer.copyright.replace('{year}', String(year))}
          </p>
        </div>

      </div>
    </footer>
  )
}
