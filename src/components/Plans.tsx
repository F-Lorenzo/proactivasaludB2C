'use client'

import { Check } from 'lucide-react'
import { PLANS } from '@/lib/constants'
import { AnimateIn } from './ui/AnimateIn'
import { useLanguage } from '@/contexts/LanguageContext'
import { useDolarOficial } from '@/lib/useDolarOficial'

function formatUSD(amount: number) {
  return `USD ${amount.toFixed(2).replace('.', ',')}`
}

function formatARS(amount: number) {
  return `AR$ ${Math.round(amount).toLocaleString('es-AR')}`
}

export function Plans() {
  const { t } = useLanguage()
  const ventaOficial = useDolarOficial()
  const plans = PLANS.map((plan) => ({ ...plan, ...t.plans.items[plan.id] }))

  return (
    <section id="planes" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-body text-brand text-xs tracking-widest uppercase font-semibold mb-4">
              {t.plans.eyebrow}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight mb-4">
              {t.plans.title}
            </h2>
            <p className="font-body text-ink-mid text-lg max-w-[46ch] mx-auto">
              {t.plans.description}
            </p>
          </div>
        </AnimateIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.id} delay={i * 100} className="h-full">
              <div
                className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-brand text-white shadow-elevated md:-translate-y-4'
                    : 'bg-surface hover:shadow-hover'
                }`}
              >
                {/* Badge */}
                {'badge' in plan && plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold font-body px-4 py-1.5 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {/* Plan info */}
                <div className="mb-8">
                  <h3
                    className={`font-display text-2xl font-bold mb-1 ${
                      plan.highlighted ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`font-body text-sm font-bold ${
                      plan.highlighted ? 'text-white/70' : 'text-ink-soft'
                    }`}
                  >
                    {plan.tagline}
                  </p>
                  <p
                    className={`font-body text-xs mt-2 font-bold ${
                      plan.highlighted ? 'text-white/55' : 'text-ink-soft'
                    }`}
                  >
                    {plan.persona}
                  </p>
                  <p className="flex items-baseline gap-1.5 mt-5">
                    <span
                      className={`font-display text-3xl font-bold ${
                        plan.highlighted ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {formatUSD(plan.priceUSD)}
                    </span>
                    <span
                      className={`font-body text-sm ${
                        plan.highlighted ? 'text-white/60' : 'text-ink-soft'
                      }`}
                    >
                      {t.plans.perMonth}
                    </span>
                    <span
                      className={`font-body text-[11px] ${
                        plan.highlighted ? 'text-white/50' : 'text-ink-soft'
                      }`}
                    >
                      ({t.plans.internationalNote})
                    </span>
                  </p>
                  {ventaOficial && (
                    <p
                      className={`font-body text-sm font-bold mt-1 ${
                        plan.highlighted ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {t.plans.arsReference.replace(
                        '{amount}',
                        formatARS(plan.priceUSD * ventaOficial)
                      )}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? 'text-white/75' : 'text-accent'
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`font-body text-sm ${
                          plan.highlighted ? 'text-white/85' : 'text-ink-mid'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#inscripcion"
                  className={`inline-flex items-center justify-center w-full py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-white text-brand hover:bg-brand-light'
                      : 'bg-brand text-white hover:bg-brand-dark shadow-button'
                  }`}
                >
                  {t.plans.cta}
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Footnote */}
        <AnimateIn delay={300}>
          <p className="text-center font-body text-ink-soft text-sm mt-10">
            {t.plans.footnoteQuestion}{' '}
            <a href="#inscripcion" className="text-brand font-semibold hover:underline">
              {t.plans.footnoteLink}
            </a>
          </p>
        </AnimateIn>

      </div>
    </section>
  )
}
