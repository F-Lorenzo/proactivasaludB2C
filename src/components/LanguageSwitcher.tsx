'use client'

import { useLanguage, type Language } from '@/contexts/LanguageContext'

const FLAGS: { lang: Language; code: string; label: string }[] = [
  { lang: 'es', code: 'ar', label: 'Español' },
  { lang: 'en', code: 'us', label: 'English' },
  { lang: 'pt', code: 'br', label: 'Português' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Seleccionar idioma">
      {FLAGS.map((flag) => {
        const active = language === flag.lang
        return (
          <button
            key={flag.lang}
            type="button"
            onClick={() => setLanguage(flag.lang)}
            aria-pressed={active}
            aria-label={flag.label}
            title={flag.label}
            className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-200 ${
              active
                ? 'ring-2 ring-brand ring-offset-2 scale-105'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={`https://flagcdn.com/w80/${flag.code}.png`}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </button>
        )
      })}
    </div>
  )
}
