import type { Metadata, Viewport } from 'next'
import { Rufina, Nunito } from 'next/font/google'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { SITE_URL } from '@/lib/seo'
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

const title = 'Proactiva Salud — Bienestar integral para mayores de 50'
const description =
  'Programa de bienestar integral para personas mayores de 50 años. Nutrición, actividad física, salud emocional y teleconsultas desde tu hogar.'
const ogImage = `${SITE_URL}/active-senior-couple-outdoor-hike-countryside-together.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s — Proactiva Salud',
  },
  description,
  keywords:
    'bienestar, salud, mayores de 50, nutrición, actividad física, teleconsultas, Argentina',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title,
    description: 'Tu mejor etapa no terminó. Acaba de empezar.',
    url: SITE_URL,
    siteName: 'Proactiva Salud',
    type: 'website',
    locale: 'es_AR',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 675,
        alt: 'Proactiva Salud — Bienestar integral para mayores de 50',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
}

export const viewport: Viewport = {
  themeColor: '#2D7A4F',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Proactiva Salud',
  url: SITE_URL,
  logo: `${SITE_URL}/ProActiva-NUEVA.png`,
  description,
  areaServed: 'AR',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg"
          >
            Saltar al contenido
          </a>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
