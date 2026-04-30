import Image from 'next/image'
import { Utensils, Activity, Heart, Monitor, Users, CircleCheck } from 'lucide-react'
import { PILLARS } from '@/lib/constants'
import { AnimateIn } from './ui/AnimateIn'

const iconMap = { Utensils, Activity, Heart, Monitor, Users }

// Photo for each pillar — mature Argentine adults (50+) in context
const PILLAR_IMAGES: Record<string, { src: string; alt: string }> = {
  '01': {
    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85',
    alt: 'Persona mayor de 50 preparando comida saludable en casa',
  },
  '02': {
    src: 'https://images.unsplash.com/photo-1758798458635-f01402b40919?auto=format&fit=crop&w=600&q=85',
    alt: 'Grupo de personas mayores de 50 haciendo ejercicio juntos en una plaza',
  },
  '03': {
    src: 'https://images.unsplash.com/photo-1666101042631-b3f606363e98?auto=format&fit=crop&w=600&q=85',
    alt: 'Señora mayor hablando con su psicólogo por videollamada desde casa',
  },
  '04': {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=85',
    alt: 'Adulto mayor recibiendo atención médica por teleconsulta desde su hogar',
  },
  '05': {
    src: 'https://images.unsplash.com/photo-1752700064245-caa940f9b6dc?auto=format&fit=crop&w=600&q=85',
    alt: 'Grupo de adultos mayores de 50 compartiendo un momento juntos al aire libre',
  },
}

export function Pillars() {
  const [featured, ...rest] = PILLARS
  const FeaturedIcon = iconMap[featured.icon as keyof typeof iconMap]
  const featuredImg = PILLAR_IMAGES[featured.number]

  return (
    <section id="pilares" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-16">
            <p className="font-body text-brand text-xs tracking-widest uppercase font-semibold mb-4">
              Los 5 pilares del programa
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight">
              Un programa completo,<br />diseñado para vos
            </h2>
          </div>
        </AnimateIn>

        {/* Featured pillar — full width with image on right */}
        <AnimateIn delay={100}>
          <div className="relative overflow-hidden rounded-3xl bg-white mb-6">
            <div className="grid lg:grid-cols-[55%_45%]">

              {/* Text side */}
              <div className="p-8 lg:p-12 relative">
                {/* Decorative number */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 text-[160px] leading-none font-display font-bold text-brand-light/40 select-none pointer-events-none translate-x-4 -translate-y-4"
                >
                  01
                </span>

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand mb-6">
                    <FeaturedIcon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-3xl text-ink font-bold mb-4">
                    {featured.title}
                  </h3>
                  <p className="font-body text-ink-mid text-lg leading-relaxed mb-6">
                    {featured.description}
                  </p>
                  <span className="inline-block bg-brand-light text-brand text-sm font-semibold font-body px-4 py-2 rounded-full mb-8">
                    {featured.format}
                  </span>

                  <div>
                    <p className="font-body text-xs text-ink-soft uppercase tracking-widest font-semibold mb-4">
                      Beneficios
                    </p>
                    <ul className="space-y-3">
                      {featured.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CircleCheck
                            size={18}
                            className="text-accent mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-body text-ink-mid">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image side */}
              <div className="relative min-h-[320px] lg:min-h-0">
                <Image
                  src={featuredImg.src}
                  alt={featuredImg.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Remaining 4 pillars — 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((pillar, i) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap]
            const img = PILLAR_IMAGES[pillar.number]
            return (
              <AnimateIn key={pillar.number} delay={i * 80}>
                <div className="relative overflow-hidden rounded-3xl bg-white h-full flex flex-col">

                  {/* Pillar image banner */}
                  <div className="relative w-full h-44 overflow-hidden flex-shrink-0">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30" />
                    {/* Number overlay */}
                    <span
                      aria-hidden="true"
                      className="absolute top-3 right-4 text-[80px] leading-none font-display font-bold text-white/30 select-none pointer-events-none"
                    >
                      {pillar.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col flex-1 p-8">
                    <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center text-brand mb-5 flex-shrink-0">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl text-ink font-bold mb-3">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-ink-mid leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {pillar.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5">
                          <CircleCheck
                            size={16}
                            className="text-accent mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-body text-sm text-ink-mid">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="inline-block bg-brand-light text-brand text-xs font-semibold font-body px-3 py-1.5 rounded-full self-start">
                      {pillar.format}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}
