import { User, Heart, Sparkles } from 'lucide-react'
import { EMOTIONAL_HOOKS } from '@/lib/constants'
import { AnimateIn } from './ui/AnimateIn'

const iconMap = { User, Heart, Sparkles }

export function EmotionalHook() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <p className="font-body text-center text-ink-soft text-xs tracking-widest uppercase font-semibold mb-14">
            ¿Por qué Proactiva Salud?
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {EMOTIONAL_HOOKS.map((hook, i) => {
            const Icon = iconMap[hook.icon as keyof typeof iconMap]
            return (
              <AnimateIn key={hook.title} delay={i * 120}>
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand flex-shrink-0">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-ink font-bold">{hook.title}</h3>
                  <p className="font-body text-ink-mid leading-relaxed max-w-[36ch]">
                    {hook.description}
                  </p>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
