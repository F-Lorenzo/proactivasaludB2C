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

// Argentine 50+ people portraits for the community gallery
const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    alt: 'Hombre argentino mayor de 50, participante del programa',
    name: 'Roberto, 58',
    city: 'Buenos Aires',
  },
  {
    src: 'https://images.unsplash.com/photo-1601055903399-3f54f4e48e00?auto=format&fit=crop&w=120&q=80',
    alt: 'Mujer argentina mayor de 50, participante del programa',
    name: 'Graciela, 62',
    city: 'Córdoba',
  },
  {
    src: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=120&q=80',
    alt: 'Hombre argentino mayor de 50, participante del programa',
    name: 'Carlos, 55',
    city: 'Rosario',
  },
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    alt: 'Hombre argentino mayor de 50, participante del programa',
    name: 'Marcelo, 60',
    city: 'Mendoza',
  },
  {
    src: 'https://images.unsplash.com/photo-1545912452-8afa8cf8c2b4?auto=format&fit=crop&w=120&q=80',
    alt: 'Mujer argentina mayor de 50, participante del programa',
    name: 'Marta, 54',
    city: 'La Plata',
  },
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
                  src="/doctor.jpg"
                  alt="Doctor del programa Proactiva Salud"
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

            {/* Community gallery */}
            <AnimateIn delay={180}>
              <div className="bg-white rounded-3xl p-6">
                <p className="font-body text-xs text-ink-soft uppercase tracking-widest font-semibold mb-5">
                  Los primeros en sumarse
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {GALLERY.map((person) => (
                    <div key={person.name} className="flex flex-col items-center gap-1.5">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-light">
                        <Image
                          src={person.src}
                          alt={person.alt}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-body text-xs font-semibold text-ink leading-tight">{person.name}</p>
                        <p className="font-body text-[10px] text-ink-soft leading-tight">{person.city}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center border-2 border-dashed border-brand/40">
                      <span className="font-body text-brand font-bold text-lg leading-none">+95</span>
                    </div>
                    <p className="font-body text-xs text-ink-soft text-center leading-tight">cupos<br />libres</p>
                  </div>
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

            {/* Two photos side by side */}
            <AnimateIn delay={100}>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src="/bienestar.png"
                    alt="Adultas mayores caminando juntas al aire libre"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src="/viejos-felices.png"
                    alt="Adultos mayores felices disfrutando juntos"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>
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
