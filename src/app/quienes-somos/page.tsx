import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { QuienesSomosContent } from '@/components/QuienesSomosContent'

export const metadata: Metadata = {
  title: 'Quiénes somos — Proactiva Salud',
  description:
    'Conocé al equipo de Proactiva Salud: profesionales comprometidos con la prevención y el bienestar integral para mayores de 50.',
}

export default function QuienesSomos() {
  return (
    <>
      <Header />
      <main id="main">
        <QuienesSomosContent />
      </main>
      <Footer />
    </>
  )
}
