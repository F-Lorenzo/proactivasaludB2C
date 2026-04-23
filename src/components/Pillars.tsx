import { Utensils, Activity, Heart, Monitor, Users, CircleCheck } from 'lucide-react'
import { PILLARS } from '@/lib/constants'
import { AnimateIn } from './ui/AnimateIn'

const iconMap = { Utensils, Activity, Heart, Monitor, Users }

export function Pillars() {
  const [featured, ...rest] = PILLARS
  const FeaturedIcon = iconMap[featured.icon as keyof typeof iconMap]

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

        {/* Featured pillar — full width */}
        <AnimateIn delay={100}>
          <div className="relative overflow-hidden rounded-3xl bg-white mb-6 p-8 lg:p-12">
            {/* Decorative number */}
            <span
              aria-hidden="true"
              className="absolute top-0 right-0 text-[180px] leading-none font-display font-bold text-brand-light/40 select-none pointer-events-none translate-x-6 -translate-y-6"
            >
              01
            </span>

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand mb-6">
                  <FeaturedIcon size={26} aria-hidden="true" />
                </div>
                <h3 className="font-display text-3xl text-ink font-bold mb-4">
                  {featured.title}
                </h3>
                <p className="font-body text-ink-mid text-lg leading-relaxed mb-6">
                  {featured.description}
                </p>
                <span className="inline-block bg-brand-light text-brand text-sm font-semibold font-body px-4 py-2 rounded-full">
                  {featured.format}
                </span>
              </div>

              <div>
                <p className="font-body text-xs text-ink-soft uppercase tracking-widest font-semibold mb-5">
                  Beneficios
                </p>
                <ul className="space-y-4">
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
        </AnimateIn>

        {/* Remaining 4 pillars — 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((pillar, i) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap]
            return (
              <AnimateIn key={pillar.number} delay={i * 80}>
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 h-full flex flex-col">
                  {/* Decorative number */}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 right-0 text-[110px] leading-none font-display font-bold text-brand-light/35 select-none pointer-events-none translate-x-4 -translate-y-4"
                  >
                    {pillar.number}
                  </span>

                  <div className="relative flex flex-col flex-1">
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
