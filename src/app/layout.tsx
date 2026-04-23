import type { Metadata } from 'next'
import { Rufina, Nunito } from 'next/font/google'
import './globals.css'

const rufina = Rufina({
  weight: ['400', '700'],
  variable: '--font-rufina',
  subsets: ['latin'],
  display: 'swap',
})

const nunito = Nunito({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Proactiva Salud — Bienestar integral para mayores de 50',
  description:
    'Programa de bienestar integral para personas mayores de 50 años. Nutrición, actividad física, salud emocional y teleconsultas desde tu hogar.',
  keywords:
    'bienestar, salud, mayores de 50, nutrición, actividad física, teleconsultas, Argentina',
  openGraph: {
    title: 'Proactiva Salud',
    description: 'Tu mejor etapa no terminó. Acaba de empezar.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${rufina.variable} ${nunito.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  )
}
