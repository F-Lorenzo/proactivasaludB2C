import Image from 'next/image'
import { AnimateIn } from './ui/AnimateIn'

const HOOKS = [
  {
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=85',
    alt: 'Hombre argentino mayor de 50 disfrutando actividad al aire libre',
    title: 'Seguir siendo vos mismo',
    description:
      'Independencia, energía y ganas de hacer planes. No querés que te cuiden — querés cuidarte bien.',
  },
  {
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=85',
    alt: 'Pareja argentina mayor de 50 compartiendo un momento feliz',
    title: 'Disfrutar lo que importa',
    description:
      'Los nietos, los viajes, el tiempo con quien amás. Querés estar presente y con energía para todo eso.',
  },
  {
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee81285?auto=format&fit=crop&w=600&q=85',
    alt: 'Mujer argentina mayor de 50 realizando ejercicio físico saludable',
    title: 'Prevenir, no esperar',
    description:
      'Los hábitos saludables aumentan la energía, la vitalidad y la calidad de vida. Invertir en salud hoy es ganar independencia para el futuro.',
  },
]

export function EmotionalHook() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <p className="font-body text-center text-ink-soft text-xs tracking-widest uppercase font-semibold mb-14">
            ¿Por qué Proactiva Salud?
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {HOOKS.map((hook, i) => (
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
