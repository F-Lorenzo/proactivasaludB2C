'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimateIn } from './ui/AnimateIn'
import { TrendingUp } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

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

export function HealthStats() {
  const { t } = useLanguage()
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
  const weeks = t.healthStats.weeks

  return (
    <section className="py-20 lg:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-16">
            <p className="font-body text-brand text-xs tracking-widest uppercase font-semibold mb-4">
              {t.healthStats.eyebrow}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-tight mb-4">
              {t.healthStats.titleLine1}<br />{t.healthStats.titleLine2}
            </h2>
            <p className="font-body text-ink-mid text-lg max-w-[44ch] leading-relaxed">
              {t.healthStats.description}
            </p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

          {/* ── Left: metrics + trend chart ─────────────────────────── */}
          <div ref={ref} className="flex flex-col gap-10">

            {/* Stats graphic */}
            <AnimateIn>
              <div className="relative w-full aspect-[1491/1055] rounded-3xl overflow-hidden bg-white">
                <Image
                  src="/grafico.png"
                  alt={t.healthStats.chartAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>

            {/* SVG Trend chart */}
            <AnimateIn delay={320}>
              <div className="bg-white rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={16} className="text-brand" aria-hidden="true" />
                  <p className="font-body text-xs font-semibold text-ink-mid uppercase tracking-widest">
                    {t.healthStats.trendLabel}
                  </p>
                </div>
                <svg
                  viewBox="0 0 200 90"
                  className="w-full"
                  role="img"
                  aria-label={t.healthStats.trendAriaLabel}
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
                  {weeks.map((label, i) => (
                    <text
                      key={label}
                      x={i === 0 ? 2 : i === weeks.length - 1 ? 198 : (i / (weeks.length - 1)) * 200}
                      y="88"
                      fontSize="5"
                      fill="#94A3B8"
                      textAnchor={i === 0 ? 'start' : i === weeks.length - 1 ? 'end' : 'middle'}
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
                {t.healthStats.footnote}
              </p>
            </AnimateIn>
          </div>

          {/* ── Right: photo collage ─────────────────────────────────── */}
          <AnimateIn delay={150}>
            <div className="flex flex-col gap-4 lg:pt-0">

              {/* Main large photo */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/pareja-corriendo.png"
                  alt="Pareja mayor de 50 años corriendo activamente"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Overlay stat */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-hover">
                  <p className="font-display text-3xl font-bold text-brand leading-none">{t.healthStats.runnerBadgeNumber}</p>
                  <p className="font-body text-xs text-ink-mid mt-0.5">{t.healthStats.runnerBadgeText}</p>
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
                    {t.healthStats.nutritionCaptionLine1}<br />{t.healthStats.nutritionCaptionLine2}
                  </p>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/hombre-50-con-celu.png"
                    alt="Hombre mayor de 50 usando su celular"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-body text-xs font-semibold text-white leading-tight">
                    {t.healthStats.attentionCaptionLine1}<br />{t.healthStats.attentionCaptionLine2}
                  </p>
                </div>
              </div>

              {/* Third full-width photo */}
              <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden">
                <Image
                  src="/gente-vieja-en-grupo.jpg"
                  alt="Grupo de amigos mayores riendo mientras caminan juntos"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 to-transparent" />
                <div className="absolute left-5 top-1/2 -translate-y-1/2">
                  <p className="font-body text-xs font-semibold text-white/80 uppercase tracking-widest mb-1">
                    {t.healthStats.communityLabel}
                  </p>
                  <p className="font-display text-2xl text-white font-bold leading-tight max-w-[16ch]">
                    {t.healthStats.communityHeadline}
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
