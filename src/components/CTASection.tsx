'use client'

import { useState } from 'react'
import { Send, CircleCheck } from 'lucide-react'
import { PLANS } from '@/lib/constants'

const INPUT_BASE =
  'w-full px-4 py-3 rounded-xl bg-surface border border-brand-muted/60 font-body text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-base'

const LABEL_BASE =
  'font-body text-xs font-semibold text-ink-mid uppercase tracking-wide'

export function CTASection() {
  const [submitted, setSubmitted] = useState(false)
  const [nombre, setNombre] = useState('')
  const [form, setForm] = useState({
    apellido: '',
    email: '',
    telefono: '',
    ciudad: '',
    plan: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="inscripcion" className="py-20 lg:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-start">

          {/* ── Left: copy ────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <p className="font-body text-brand-light/60 text-xs tracking-widest uppercase font-semibold">
              Empezá hoy
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight">
              Reservá tu cupo en el piloto
            </h2>
            <p className="font-body text-xl text-white/65 leading-relaxed max-w-[42ch]">
              Dejanos tus datos y un asesor te va a contactar para contarte todo sobre el programa piloto de Mayo 2026.
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              {[
                'Sin compromiso — solo información personalizada',
                'Los cupos son limitados: 100 personas',
                'Te contactamos a la brevedad para confirmar tu lugar',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CircleCheck
                    size={18}
                    className="text-accent flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-body text-white/75 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: form ───────────────────────────────────────────── */}
          <div className="bg-white rounded-3xl p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-6 py-10">
                <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center">
                  <CircleCheck size={32} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl text-ink font-bold">
                  ¡Gracias, {nombre}!
                </h3>
                <p className="font-body text-ink-mid max-w-xs leading-relaxed">
                  Un asesor de Proactiva Salud se comunicará con vos pronto para confirmar tu lugar en el piloto de Mayo 2026.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <h3 className="font-display text-2xl text-ink font-bold mb-1">
                  Completá tus datos
                </h3>

                {/* Nombre + Apellido */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre" className={LABEL_BASE}>Nombre</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Tu nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className={INPUT_BASE}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="apellido" className={LABEL_BASE}>Apellido</label>
                    <input
                      id="apellido"
                      name="apellido"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder="Tu apellido"
                      value={form.apellido}
                      onChange={(e) => setForm((f) => ({ ...f, apellido: e.target.value }))}
                      className={INPUT_BASE}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className={LABEL_BASE}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={INPUT_BASE}
                  />
                </div>

                {/* Teléfono + Ciudad */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telefono" className={LABEL_BASE}>Teléfono</label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+54 9 11..."
                      value={form.telefono}
                      onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
                      className={INPUT_BASE}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ciudad" className={LABEL_BASE}>Ciudad</label>
                    <input
                      id="ciudad"
                      name="ciudad"
                      type="text"
                      required
                      autoComplete="address-level2"
                      placeholder="Tu ciudad"
                      value={form.ciudad}
                      onChange={(e) => setForm((f) => ({ ...f, ciudad: e.target.value }))}
                      className={INPUT_BASE}
                    />
                  </div>
                </div>

                {/* Plan */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="plan" className={LABEL_BASE}>Plan de interés</label>
                  <select
                    id="plan"
                    name="plan"
                    value={form.plan}
                    onChange={(e) => setForm((f) => ({ ...f, plan: e.target.value }))}
                    className={`${INPUT_BASE} appearance-none cursor-pointer`}
                  >
                    <option value="">No sé todavía — me orientarán</option>
                    {PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        Plan {plan.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-1 w-full flex items-center justify-center gap-2.5 bg-brand text-white font-body font-semibold text-base py-4 rounded-full hover:bg-brand-dark transition-colors shadow-button"
                >
                  <Send size={18} aria-hidden="true" />
                  Reservar mi cupo en el piloto
                </button>

                <p className="font-body text-xs text-ink-soft text-center">
                  Al enviar aceptás que Proactiva Salud te contacte con información del programa.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
