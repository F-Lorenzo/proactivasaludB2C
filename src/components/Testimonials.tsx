'use client'

import Image from 'next/image'
import { Users, Heart, MessageCircle, Zap } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { useLanguage } from '@/contexts/LanguageContext'

const FEATURE_ICONS = [Users, Heart, MessageCircle, Zap]

export function Testimonials() {
  const { t } = useLanguage()
  const features = t.testimonials.features.map((f, i) => ({ ...f, icon: FEATURE_ICONS[i] }))

  return (
    <section id="comunidad" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-16">
            <p className="font-body text-brand text-xs tracking-widest uppercase font-semibold mb-4">
              {t.testimonials.eyebrow}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight mb-4">
              {t.testimonials.titleLine1}<br />{t.testimonials.titleLine2}
            </h2>
            <p className="font-body text-ink-mid text-lg leading-relaxed max-w-[44ch]">
              {t.testimonials.description}
            </p>
          </div>
        </AnimateIn>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">

          {/* Left: images + community gallery */}
          <div className="flex flex-col gap-6">

            {/* Main image */}
            <AnimateIn>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/bienestar.png"
                  alt="Personas mayores compartiendo un momento de bienestar juntas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-dark/20" />
              </div>
            </AnimateIn>

            {/* Side-by-side photos */}
            <AnimateIn delay={100}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src="/viejos-felices.jpg"
                    alt="Mujeres mayores felices compartiendo un momento en un café"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src="/gente-vieja-en-grupo.jpg"
                    alt="Grupo de amigos mayores riendo mientras caminan juntos"
                    fill
                    className="object-cover object-top"
                    sizes="200px"
                  />
                </div>
              </div>
            </AnimateIn>

          </div>

          {/* Right: features */}
          <div className="flex flex-col gap-6">

            <AnimateIn delay={80}>
              <p className="font-body text-ink-mid leading-relaxed text-lg max-w-[44ch]">
                {t.testimonials.intro}
              </p>
            </AnimateIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feat, i) => {
                const Icon = feat.icon
                return (
                  <AnimateIn key={feat.title} delay={100 + i * 70}>
                    <div className="bg-white rounded-2xl p-6 h-full">
                      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand mb-4">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <h3 className="font-body font-semibold text-ink text-sm mb-1.5">
                        {feat.title}
                      </h3>
                      <p className="font-body text-xs text-ink-mid leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>

            <AnimateIn delay={360}>
              <div className="bg-brand-dark rounded-3xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Users size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <p className="font-body font-semibold text-white text-lg">{t.testimonials.clubTitle}</p>
                </div>
                <p className="font-body text-white/65 text-sm leading-relaxed">
                  {t.testimonials.clubDescription}
                </p>
                <a
                  href="#inscripcion"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand font-body font-semibold text-sm py-3.5 rounded-full hover:bg-brand-light transition-colors"
                >
                  {t.testimonials.clubCta}
                </a>
              </div>
            </AnimateIn>

          </div>
        </div>

      </div>
    </section>
  )
}
