import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-brand-dark pt-16 lg:pt-24">
      <div className="relative flex-1 w-full">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)]">

          {/* ── Text ─────────────────────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col justify-center gap-8 animate-fade-up px-6 lg:px-16 py-16 lg:py-0">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-brand-muted" aria-hidden="true" />
              <span className="font-body font-semibold text-sm tracking-widest uppercase text-brand-muted">
                Proactiva Salud
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl lg:text-[3.75rem] xl:text-6xl text-white leading-[1.04] tracking-tight">
              Tu mejor etapa
              <br />
              <span className="text-brand-muted">no terminó.</span>
              <br />
              Acaba de empezar.
            </h1>

            {/* Subheadline */}
            <p className="font-body text-xl text-white/65 max-w-[44ch] leading-relaxed">
              Programa de bienestar integral para mayores de 50. Nutrición, movimiento, salud emocional y acompañamiento profesional — todo desde tu hogar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inscripcion"
                className="inline-flex items-center justify-center bg-brand text-white font-body font-semibold text-base px-8 py-4 rounded-full hover:bg-brand-light hover:text-brand-dark transition-all duration-200 shadow-button hover:shadow-elevated"
              >
                Unirme al programa de bienestar integral
              </a>
              <a
                href="#pilares"
                className="inline-flex items-center justify-center font-body font-semibold text-base text-white px-8 py-4 rounded-full border-2 border-white/25 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                Ver el programa
              </a>
            </div>
          </div>

          {/* ── Visual: full-bleed photo ─────────────────────────────────── */}
          <div className="relative hidden lg:block">
            <Image
              src="/active-senior-couple-outdoor-hike-countryside-together.jpg"
              alt="Pareja mayor caminando al aire libre"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 0px, 50vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-brand-dark/10 to-transparent"
            />
          </div>

        </div>
      </div>

      {/* ── Highlight banner ─────────────────────────────────────────── */}
      <div className="relative w-full bg-brand-dark px-6 lg:px-8 py-8 border-t border-white/10">
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
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden lg:block"
        aria-hidden="true"
      >
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
