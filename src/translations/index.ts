import es from './es'
import en from './en'
import pt from './pt'
import type { Translations } from './es'

export type Language = 'es' | 'en' | 'pt'
export type { Translations }

export const translations: Record<Language, Translations> = { es, en, pt }
