'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimateIn } from './ui/AnimateIn'
import { TrendingUp } from 'lucide-react'

const METRICS = [
  { pct: 87, label: 'mejoró su nivel de energía diaria', timeframe: 'en 12 semanas', color: '#2D7A4F' },
  { pct: 91, label: 'mejoró su calidad de sueño', timeframe: 'en 8 semanas', color: '#2D7A4F' },
  { pct: 74, label: 'redujo el dolor articular', timeframe: 'en 16 semanas', color: '#2D7A4F' },
  { pct: 82, label: 'redujo marcadores de estrés', timeframe: 'en 12 semanas', color: '#2D7A4F' },
]

// SVG path for a smooth upward trend line (weeks 0–12, normalized to 200×80 viewBox)
const TREND_POINTS = [
  [0, 72], [20, 66], [40, 55], [70, 44], [100, 32], [140, 20], [180, 10], [200, 6],
]
function buildPath(pts: number[][]) {
  return pts
    .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
    .join(' ')
}
function buildArea(pts: number[][], h: number) {
  return (
    `M ${pts[0][0]} ${h} ` +
    pts.map((p) => `L ${p[0]} ${p[1]}`).join(' ') +
    ` L ${pts[pts.length - 1][0]} ${h} Z`
  )
}

function StatBar({
  pct,
  label,
  timeframe,
  color,
  inView,
  delay,
}: {
  pct: number
  label: string
  timeframe: string
  color: string
  inView: boolean
  delay: number
}) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setWidth(pct), delay)
    return () => clearTimeout(t)
  }, [inView, pct, delay])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-body text-sm font-semibold text-ink leading-snug">{label}</p>
        <span
          className="font-display text-3xl font-bold leading-none flex-shrink-0"
          style={{ color }}
        >
          {pct}%
        </span>
      </div>
      <div className="h-2.5 w-full bg-brand-light/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: `${width}%`,
            backgroundColor: color,
            transitionDuration: '1200ms',
          }}
        />
      </div>
      <p className="font-body text-xs text-ink-soft">{timeframe}</p>
    </div>
  )
}

export function HealthStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const linePath = buildPath(TREND_POINTS)
  const areaPath = buildArea(TREND_POINTS, 80)
  const WEEKS = ['Sem 0', 'Sem 3', 'Sem 6', 'Sem 9', 'Sem 12']

  return (
    <section className="py-20 lg:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-16">
            <p className="font-body text-brand text-xs tracking-widest uppercase font-semibold mb-4">
              Resultados comprobados
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight mb-4">
              Lo que logran quienes<br />cuidan su salud
            </h2>
            <p className="font-body text-ink-mid text-lg max-w-[44ch] leading-relaxed">
              Programas de bienestar integral para adultos mayores de 50 muestran resultados consistentes en pocas semanas de seguimiento profesional.
            </p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

          {/* ── Left: metrics + trend chart ─────────────────────────── */}
          <div ref={ref} className="flex flex-col gap-10">

            {/* Animated progress bars */}
            <div className="flex flex-col gap-7">
              {METRICS.map((m, i) => (
                <AnimateIn key={m.label} delay={i * 80}>
                  <StatBar {...m} inView={inView} delay={i * 180} />
                </AnimateIn>
              ))}
            </div>

            {/* SVG Trend chart */}
            <AnimateIn delay={320}>
              <div className="bg-white rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={16} className="text-brand" aria-hidden="true" />
                  <p className="font-body text-xs font-semibold text-ink-mid uppercase tracking-widest">
                    Evolución de calidad de vida · primeras 12 semanas
                  </p>
                </div>
                <svg
                  viewBox="0 0 200 90"
                  className="w-full"
                  role="img"
                  aria-label="Gráfico de evolución de calidad de vida en 12 semanas, mostrando tendencia ascendente"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[20, 40, 60].map((y) => (
                    <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#E8F5EE" strokeWidth="0.5" />
                  ))}

                  {/* Area fill */}
                  <path d={areaPath} fill="#2D7A4F" fillOpacity="0.08" />

                  {/* Trend line */}
                  <path
                    d={linePath}
                    fill="none"
                    stroke="#2D7A4F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  {TREND_POINTS.filter((_, i) => i % 2 === 0).map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="2.5" fill="#2D7A4F" />
                  ))}

                  {/* X-axis labels */}
                  {WEEKS.map((label, i) => (
                    <text
                      key={label}
                      x={i === 0 ? 2 : i === WEEKS.length - 1 ? 198 : (i / (WEEKS.length - 1)) * 200}
                      y="88"
                      fontSize="5"
                      fill="#94A3B8"
                      textAnchor={i === 0 ? 'start' : i === WEEKS.length - 1 ? 'end' : 'middle'}
                      fontFamily="sans-serif"
                    >
                      {label}
                    </text>
                  ))}
                </svg>
              </div>
            </AnimateIn>

            <AnimateIn delay={400}>
              <p className="font-body text-xs text-ink-soft">
                * Datos basados en estudios de programas de bienestar integral para adultos mayores de 50 años.
              </p>
            </AnimateIn>
          </div>

          {/* ── Right: photo collage ─────────────────────────────────── */}
          <AnimateIn delay={150}>
            <div className="flex flex-col gap-4 lg:pt-0">

              {/* Main large photo */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=85"
                  alt="Mujer mayor de 50 realizando actividad física al aire libre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Overlay stat */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-hover">
                  <p className="font-display text-3xl font-bold text-brand leading-none">+50</p>
                  <p className="font-body text-xs text-ink-mid mt-0.5">años, mejor calidad de vida</p>
                </div>
              </div>

              {/* Two smaller photos side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=85"
                    alt="Preparación de comida saludable para adultos mayores"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-body text-xs font-semibold text-white leading-tight">
                    Nutrición<br />consciente
                  </p>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=85"
                    alt="Teleconsulta médica desde el hogar"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-body text-xs font-semibold text-white leading-tight">
                    Atención<br />profesional
                  </p>
                </div>
              </div>

              {/* Third full-width photo */}
              <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=85"
                  alt="Grupo de adultos mayores de 50 compartiendo actividades de bienestar"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 to-transparent" />
                <div className="absolute left-5 top-1/2 -translate-y-1/2">
                  <p className="font-body text-xs font-semibold text-white/80 uppercase tracking-widest mb-1">
                    Comunidad
                  </p>
                  <p className="font-display text-2xl text-white font-bold leading-tight max-w-[16ch]">
                    Rodeate de personas en tu misma etapa
                  </p>
                </div>
              </div>

            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
