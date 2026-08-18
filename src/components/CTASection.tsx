'use client'

import { useState } from 'react'
import { Send, CircleCheck } from 'lucide-react'
import { PLANS } from '@/lib/constants'
import { useLanguage } from '@/contexts/LanguageContext'

const INPUT_BASE =
  'w-full px-4 py-3 rounded-xl bg-surface border border-brand-muted/60 font-body text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-base'

const LABEL_BASE =
  'font-body text-xs font-semibold text-ink-mid uppercase tracking-wide'

export function CTASection() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [nombre, setNombre] = useState('')
  const [form, setForm] = useState({
    apellido: '',
    email: '',
    telefono: '',
    ciudad: '',
    plan: 'sin-definir',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const planLabel = PLANS.find((p) => p.id === form.plan)?.name ?? t.ctaSection.planNotSpecified

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: 'Nueva inscripción — Proactiva Salud',
          from_name: 'Proactiva Salud — Web',
          nombre,
          apellido: form.apellido,
          email: form.email,
          telefono: form.telefono,
          ciudad: form.ciudad,
          plan: planLabel,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="inscripcion" className="py-20 lg:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-start">

          {/* ── Left: copy ────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <p className="font-body text-brand-light/60 text-xs tracking-widest uppercase font-semibold">
              {t.ctaSection.eyebrow}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight">
              {t.ctaSection.titleLine1}<br />{t.ctaSection.titleLine2}<br />{t.ctaSection.titleLine3}
            </h2>
            <p className="font-body text-xl text-white/65 leading-relaxed max-w-[42ch]">
              {t.ctaSection.description}
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              {t.ctaSection.bullets.map((item) => (
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
                  {t.ctaSection.successTitle.replace('{name}', nombre)}
                </h3>
                <p className="font-body text-ink-mid max-w-xs leading-relaxed">
                  {t.ctaSection.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <h3 className="font-display text-2xl text-ink font-bold mb-1">
                  {t.ctaSection.formTitle}
                </h3>

                {/* Nombre + Apellido */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre" className={LABEL_BASE}>{t.ctaSection.labels.nombre}</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder={t.ctaSection.placeholders.nombre}
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className={INPUT_BASE}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="apellido" className={LABEL_BASE}>{t.ctaSection.labels.apellido}</label>
                    <input
                      id="apellido"
                      name="apellido"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder={t.ctaSection.placeholders.apellido}
                      value={form.apellido}
                      onChange={(e) => setForm((f) => ({ ...f, apellido: e.target.value }))}
                      className={INPUT_BASE}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className={LABEL_BASE}>{t.ctaSection.labels.email}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={t.ctaSection.placeholders.email}
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={INPUT_BASE}
                  />
                </div>

                {/* Teléfono + Ciudad */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telefono" className={LABEL_BASE}>{t.ctaSection.labels.telefono}</label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder={t.ctaSection.placeholders.telefono}
                      value={form.telefono}
                      onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
                      className={INPUT_BASE}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ciudad" className={LABEL_BASE}>{t.ctaSection.labels.ciudad}</label>
                    <input
                      id="ciudad"
                      name="ciudad"
                      type="text"
                      required
                      autoComplete="address-level2"
                      placeholder={t.ctaSection.placeholders.ciudad}
                      value={form.ciudad}
                      onChange={(e) => setForm((f) => ({ ...f, ciudad: e.target.value }))}
                      className={INPUT_BASE}
                    />
                  </div>
                </div>

                {/* Plan */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="plan" className={LABEL_BASE}>{t.ctaSection.labels.plan}</label>
                  <select
                    id="plan"
                    name="plan"
                    required
                    value={form.plan}
                    onChange={(e) => setForm((f) => ({ ...f, plan: e.target.value }))}
                    className={`${INPUT_BASE} appearance-none cursor-pointer`}
                  >
                    <option value="sin-definir">{t.ctaSection.planDefaultOption}</option>
                    {PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {t.ctaSection.planOptionPrefix} {plan.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-1 w-full flex items-center justify-center gap-2.5 bg-brand text-white font-body font-semibold text-base py-4 rounded-full hover:bg-brand-dark transition-colors shadow-button disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} aria-hidden="true" />
                  {submitting ? t.ctaSection.sending : t.ctaSection.submit}
                </button>

                {error && (
                  <p className="font-body text-xs text-red-600 text-center">
                    {t.ctaSection.errorMessage}
                  </p>
                )}

                <p className="font-body text-xs text-ink-soft text-center">
                  {t.ctaSection.disclaimer}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
