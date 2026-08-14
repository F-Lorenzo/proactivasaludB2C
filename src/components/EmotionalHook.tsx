'use client'

import Image from 'next/image'
import { AnimateIn } from './ui/AnimateIn'
import { useLanguage } from '@/contexts/LanguageContext'

const HOOK_MEDIA = [
  { image: '/pareja-caminando-playa.png', alt: 'Pareja mayor caminando juntos en la playa' },
  { image: '/vieja-elongando.png', alt: 'Mujer mayor elongando' },
  { image: '/vieja-saludable.png', alt: 'Mujer mayor saludable y activa' },
]

export function EmotionalHook() {
  const { t } = useLanguage()
  const hooks = t.emotionalHook.items.map((item, i) => ({ ...item, ...HOOK_MEDIA[i] }))

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <p className="font-body text-center text-brand text-lg tracking-widest uppercase font-bold mb-14 transition-all duration-500 ease-out hover:tracking-wider hover:text-brand-dark">
            {t.emotionalHook.eyebrow}
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {hooks.map((hook, i) => (
            <AnimateIn key={hook.title} delay={i * 120}>
              <div className="flex flex-col rounded-3xl overflow-hidden bg-surface hover:shadow-hover transition-shadow duration-300">

                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={hook.image}
                    alt={hook.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Subtle green overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="font-display text-xl text-ink font-bold">{hook.title}</h3>
                  <p className="font-body text-ink-mid leading-relaxed text-sm">
                    {hook.description}
                  </p>
                </div>

              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
