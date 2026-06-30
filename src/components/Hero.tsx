import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-surface pt-16 lg:pt-24">
      {/* Right-panel background tint */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[45%] bg-brand-light/55 hidden lg:block"
      />

      <div className="relative flex-1 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
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
                Unirme al programa de bienestar integral
              </a>
              <a
                href="#pilares"
                className="inline-flex items-center justify-center font-body font-semibold text-base text-brand px-8 py-4 rounded-full border-2 border-brand/20 hover:border-brand/50 hover:bg-brand-light transition-all duration-200"
              >
                Ver el programa
              </a>
            </div>

            {/* Pilot launch badge */}
          </div>

          {/* ── Visual ───────────────────────────────────────────────────── */}
          <div className="relative hidden lg:flex items-center justify-center py-16">
            <div className="relative w-full max-w-sm">

              {/* Hero photo */}
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                <Image
                  src="/imagen-portada-proactiva.png"
                  alt="Imagen de portada Proactiva Salud"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 0px, 384px"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Highlight banner ─────────────────────────────────────────── */}
      <div className="relative w-full bg-surface px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-accent rounded-2xl px-6 py-5 lg:px-8">
            <p className="font-body text-sm lg:text-base text-white text-center leading-relaxed">
              <span className="font-bold">Hablá con un profesional hoy, desde tu casa.</span>{' '}
              Sin turnos, sin esperas, con seguimiento real.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-ink-soft animate-bounce hidden lg:block"
        aria-hidden="true"
      >
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
