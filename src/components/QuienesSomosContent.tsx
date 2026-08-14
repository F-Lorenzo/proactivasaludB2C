'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Users, ShieldCheck, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const VALUE_ICONS = [Heart, ShieldCheck, Users, Sparkles] as const
const VALUE_KEYS = ['cercania', 'prevencion', 'equipo', 'bienestar'] as const

export function QuienesSomosContent() {
  const { t } = useLanguage()
  const qs = t.quienesSomos
  const values = VALUE_KEYS.map((key, i) => ({ ...qs.values[key], icon: VALUE_ICONS[i] }))

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-surface overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-[40%] bg-brand-light/50 hidden lg:block"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">

            {/* Text */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-brand" aria-hidden="true" />
                <span className="font-body font-semibold text-sm tracking-widest uppercase text-brand">
                  {qs.eyebrow}
                </span>
              </div>

              <h1 className="font-display text-2xl text-ink leading-snug tracking-tight">
                {qs.headingPre}{' '}
                <span className="text-brand">{qs.headingHighlight}</span>{' '}
                {qs.headingPost}
              </h1>

              <p className="font-body text-base text-ink-mid leading-relaxed max-w-[52ch]">
                {qs.intro}
              </p>

              <Link
                href="/#inscripcion"
                className="self-start inline-flex items-center gap-2 bg-brand text-white font-body font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-200 shadow-button hover:shadow-elevated"
              >
                {qs.ctaButton}
              </Link>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-[85%] mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden">
                <Image
                  src="/imagen-portada-quienes-somos.png"
                  alt="Equipo Proactiva Salud acompañando a adultos mayores"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 0px, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-elevated">
                <p className="font-display text-3xl font-bold text-brand leading-none">{qs.badgeNumber}</p>
                <p className="font-body text-sm text-ink-mid mt-1">{qs.badgeText}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Body copy ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

            <div className="flex flex-col gap-5">
              <p className="font-body text-base text-ink-mid leading-relaxed">
                {qs.bodyParagraph1}
              </p>
              <p className="font-body text-base text-ink-mid leading-relaxed">
                {qs.bodyParagraph2}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-body text-base text-ink-mid leading-relaxed">
                {qs.bodyParagraph3}
              </p>
              <div className="h-px bg-brand-light" aria-hidden="true" />
              <p className="font-body text-base text-brand font-semibold leading-relaxed italic">
                &ldquo;{qs.quote}&rdquo;
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <p className="font-body text-brand text-xs tracking-widest uppercase font-semibold mb-3">
              {qs.valuesEyebrow}
            </p>
            <h2 className="font-display text-2xl text-ink leading-tight">
              {qs.valuesTitle}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-gradient-to-br from-brand-dark to-brand rounded-3xl p-7 flex flex-col gap-4 hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-body font-bold text-white text-base">{title}</h3>
                  <p className="font-body text-white/80 text-base leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-2xl text-white leading-tight max-w-[26ch]">
            {qs.ctaTitle}
          </h2>
          <p className="font-body text-base text-white/65 max-w-[44ch] leading-relaxed">
            {qs.ctaDescription}
          </p>
          <Link
            href="/#inscripcion"
            className="inline-flex items-center justify-center bg-white text-brand font-body font-semibold text-sm px-9 py-3.5 rounded-full hover:bg-brand-light transition-colors shadow-elevated"
          >
            {qs.ctaButton2}
          </Link>
        </div>
      </section>
    </>
  )
}
