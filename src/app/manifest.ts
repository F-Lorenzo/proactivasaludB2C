import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Proactiva Salud — Bienestar integral para mayores de 50',
    short_name: 'Proactiva Salud',
    description:
      'Programa de bienestar integral para personas mayores de 50 años. Nutrición, actividad física, salud emocional y teleconsultas desde tu hogar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2D7A4F',
    lang: 'es',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
