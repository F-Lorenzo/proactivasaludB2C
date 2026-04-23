import Image from 'next/image'
import { Star, MessageCircle, Shield, BadgePercent, CalendarDays, ArrowRight } from 'lucide-react'
import { PILOT_PERKS } from '@/lib/constants'
import { AnimateIn } from './ui/AnimateIn'

const iconMap = { Star, MessageCircle, Shield, BadgePercent }

const TIMELINE = [
  { step: '01', label: 'Completás el formulario', sub: 'Te reservamos tu cupo sin compromiso' },
  { step: '02', label: 'Un asesor te contacta', sub: 'Te explicamos el programa y respondemos tus dudas' },
  { step: '03', label: 'Empezás en Mayo 2026', sub: 'Con seguimiento profesional desde el primer día' },
]

export function Testimonials() {
  return (
    <section id="piloto" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-16">
            <div>
              <p className="font-body text-brand text-xs tracking-widest uppercase font-semibold mb-4">
                Programa piloto · Mayo 2026
              </p>
              <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight">
                Sé parte del grupo<br />que lo empieza todo
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-1">
              <p className="font-display text-6xl lg:text-7xl font-bold text-brand leading-none">100</p>
              <p className="font-body text-ink-mid text-sm">cupos disponibles</p>
            </div>
          </div>
        </AnimateIn>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">

          {/* Left: image + context */}
          <div className="flex flex-col gap-8">
            <AnimateIn>
              {/* Pilot image */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85"
                  alt="Teleconsulta de salud desde el hogar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-dark/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/92 backdrop-blur-sm rounded-2xl p-4">
                    <p className="font-body text-sm font-semibold text-ink">
                      El piloto incluye el programa completo con seguimiento semanal del equipo.
                    </p>
                    <p className="font-body text-xs text-ink-soft mt-1">
                      Tu experiencia ayudará a dar forma al programa definitivo.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Timeline */}
            <AnimateIn delay={100}>
              <div className="bg-white rounded-3xl p-8">
                <p className="font-body text-xs text-ink-soft uppercase tracking-widest font-semibold mb-6">
                  Cómo funciona
                </p>
                <div className="flex flex-col gap-0">
                  {TIMELINE.map((item, i) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand font-body font-bold text-xs">
                          {item.step}
                        </div>
                        {i < TIMELINE.length - 1 && (
                          <div className="w-px h-8 bg-brand-muted mt-1" aria-hidden="true" />
                        )}
                      </div>
                      <div className="pb-6">
                        <p className="font-body font-semibold text-ink text-sm">{item.label}</p>
                        <p className="font-body text-xs text-ink-soft mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right: perks + CTA */}
          <div className="flex flex-col gap-6">
            <AnimateIn delay={80}>
              <p className="font-body text-ink-mid leading-relaxed text-lg max-w-[44ch]">
                Proactiva Salud está por dar sus primeros pasos. Buscamos 100 personas mayores de 50 que quieran vivir esta etapa con más energía, salud y bienestar — y que sean parte de algo nuevo desde el principio.
              </p>
            </AnimateIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {PILOT_PERKS.map((perk, i) => {
                const Icon = iconMap[perk.icon as keyof typeof iconMap]
                return (
                  <AnimateIn key={perk.title} delay={120 + i * 70}>
                    <div className="bg-white rounded-2xl p-6 h-full">
                      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand mb-4">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <h3 className="font-body font-semibold text-ink text-sm mb-1.5">
                        {perk.title}
                      </h3>
                      <p className="font-body text-xs text-ink-mid leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>

            <AnimateIn delay={320}>
              <div className="bg-brand-dark rounded-3xl p-8 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <CalendarDays size={20} className="text-brand-light" aria-hidden="true" />
                  <p className="font-body font-semibold text-white">Inicio: Mayo 2026</p>
                </div>
                <p className="font-body text-white/65 text-sm leading-relaxed">
                  Las inscripciones al piloto son por orden de llegada. Una vez cubiertos los 100 cupos, la lista se cierra.
                </p>
                <a
                  href="#inscripcion"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand font-body font-semibold text-sm py-3.5 rounded-full hover:bg-brand-light transition-colors"
                >
                  Reservar mi cupo ahora
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>

      </div>
    </section>
  )
}
