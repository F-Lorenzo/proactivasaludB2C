import Image from 'next/image'
import { ChevronDown, CalendarDays } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-16">
      {/* Right-panel background tint */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[45%] bg-brand-light/55 hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-[55%_45%] items-center min-h-[calc(100vh-4rem)]">

          {/* ── Text ─────────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-8 animate-fade-up lg:pr-12">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-brand" aria-hidden="true" />
              <span className="font-body font-semibold text-sm tracking-widest uppercase text-brand">
                Proactiva Salud
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl lg:text-[3.75rem] xl:text-7xl text-ink leading-[1.04] tracking-tight">
              Tu mejor etapa
              <br />
              <span className="text-brand">no terminó.</span>
              <br />
              Acaba de empezar.
            </h1>

            {/* Subheadline */}
            <p className="font-body text-xl text-ink-mid max-w-[44ch] leading-relaxed">
              Programa de bienestar integral para mayores de 50. Nutrición, movimiento, salud emocional y acompañamiento profesional — todo desde tu hogar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inscripcion"
                className="inline-flex items-center justify-center bg-brand text-white font-body font-semibold text-base px-8 py-4 rounded-full hover:bg-brand-dark transition-all duration-200 shadow-button hover:shadow-elevated"
              >
                Reservar mi cupo
              </a>
              <a
                href="#pilares"
                className="inline-flex items-center justify-center font-body font-semibold text-base text-brand px-8 py-4 rounded-full border-2 border-brand/20 hover:border-brand/50 hover:bg-brand-light transition-all duration-200"
              >
                Ver el programa
              </a>
            </div>

            {/* Pilot launch badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 bg-accent-light text-accent font-body font-semibold text-sm px-4 py-2.5 rounded-full">
                <CalendarDays size={16} aria-hidden="true" />
                Lanzamiento Mayo 2026
              </div>
              <span className="font-body text-xs text-ink-soft">
                100 cupos disponibles
              </span>
            </div>
          </div>

          {/* ── Visual ───────────────────────────────────────────────────── */}
          <div className="relative hidden lg:flex items-center justify-center py-16">
            <div className="relative w-full max-w-sm">

              {/* Hero photo — active mature adult outdoors */}
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=85"
                  alt="Persona activa mayor de 50 disfrutando al aire libre"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 0px, 384px"
                />
              </div>

              {/* Pilot badge — top right */}
              <div className="absolute -top-4 -right-6 bg-brand text-white rounded-2xl px-5 py-3 shadow-elevated text-center">
                <p className="font-body text-2xl font-bold leading-none">100</p>
                <p className="font-body text-xs opacity-80 mt-0.5">cupos</p>
                <p className="font-body text-xs opacity-80">disponibles</p>
              </div>

              {/* Launch date badge — bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-hover flex items-center gap-2.5">
                <CalendarDays size={20} className="text-brand flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-sm font-semibold text-ink leading-tight">
                  Inicio<br />Mayo 2026
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-soft animate-bounce"
        aria-hidden="true"
      >
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
