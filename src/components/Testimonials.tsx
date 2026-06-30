import Image from 'next/image'
import { Users, Heart, MessageCircle, Zap } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'

const COMMUNITY_FEATURES = [
  {
    icon: Users,
    title: 'Red de pares',
    description: 'Conectate con personas que están en la misma etapa. Compartir el camino hace toda la diferencia.',
  },
  {
    icon: Heart,
    title: 'Contención real',
    description: 'Un espacio donde tu bienestar emocional importa tanto como tu salud física.',
  },
  {
    icon: MessageCircle,
    title: 'Charlas y encuentros',
    description: 'Actividades grupales virtuales, charlas con especialistas y espacios de intercambio.',
  },
  {
    icon: Zap,
    title: 'Motivación constante',
    description: 'El grupo te impulsa. La comunidad sostiene el cambio cuando la motivación individual flaquea.',
  },
]

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    alt: 'Hombre argentino mayor de 50',
    name: 'Roberto, 58',
    city: 'Buenos Aires',
  },
  {
    src: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&w=120&q=80',
    alt: 'Mujer mayor de 60',
    name: 'Graciela, 62',
    city: 'Córdoba',
  },
  {
    src: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=120&q=80',
    alt: 'Hombre argentino mayor de 50',
    name: 'Carlos, 55',
    city: 'Rosario',
  },
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    alt: 'Hombre argentino mayor de 50',
    name: 'Marcelo, 60',
    city: 'Mendoza',
  },
  {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=120&q=80',
    alt: 'Mujer mayor de 50',
    name: 'Marta, 54',
    city: 'La Plata',
  },
]

export function Testimonials() {
  return (
    <section id="comunidad" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-16">
            <p className="font-body text-brand text-xs tracking-widest uppercase font-semibold mb-4">
              Comunidad Proactiva · Club +50
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight mb-4">
              No estás solo en<br />este camino
            </h2>
            <p className="font-body text-ink-mid text-lg leading-relaxed max-w-[44ch]">
              El Club +50 es el espacio de encuentro de todas las personas que eligen vivir esta etapa con más energía, propósito y conexión.
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
                    src="/viejos-felices.png"
                    alt="Adultos mayores felices disfrutando juntos"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src="/gente-vieja-en-grupo.png"
                    alt="Grupo de personas mayores compartiendo actividades"
                    fill
                    className="object-cover object-top"
                    sizes="200px"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Community gallery */}
            <AnimateIn delay={160}>
              <div className="bg-white rounded-3xl p-6">
                <p className="font-body text-xs text-ink-soft uppercase tracking-widest font-semibold mb-5">
                  Miembros del club
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
                      <span className="font-body text-brand font-bold text-lg leading-none">+50</span>
                    </div>
                    <p className="font-body text-xs text-ink-soft text-center leading-tight">y<br />sumando</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

          </div>

          {/* Right: features */}
          <div className="flex flex-col gap-6">

            <AnimateIn delay={80}>
              <p className="font-body text-ink-mid leading-relaxed text-lg max-w-[44ch]">
                Ser parte del Club +50 significa tener un grupo humano que te acompaña, te entiende y comparte tus mismos objetivos de salud y bienestar.
              </p>
            </AnimateIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {COMMUNITY_FEATURES.map((feat, i) => {
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
                  <p className="font-body font-semibold text-white text-lg">Club +50</p>
                </div>
                <p className="font-body text-white/65 text-sm leading-relaxed">
                  Incluido en todos los planes de Proactiva Salud. Cuando te sumás al programa, te sumás a la comunidad.
                </p>
                <a
                  href="#inscripcion"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand font-body font-semibold text-sm py-3.5 rounded-full hover:bg-brand-light transition-colors"
                >
                  Quiero ser parte
                </a>
              </div>
            </AnimateIn>

          </div>
        </div>

      </div>
    </section>
  )
}
