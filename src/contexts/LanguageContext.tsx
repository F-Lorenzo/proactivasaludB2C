'use client'

import { createContext, useContext, useEffect, useSyncExternalStore } from 'react'
import { translations, type Language, type Translations } from '@/translations'

export type { Language }

const COOKIE_NAME = 'ps_lang'
const STORAGE_KEY = 'ps_lang'
const DEFAULT_LANGUAGE: Language = 'es'

function isLanguage(value: string | null): value is Language {
  return value === 'es' || value === 'en' || value === 'pt'
}

// Shared across www.proactivasalud.com, personas.proactivasalud.com and
// empresas.proactivasalud.com via the root-domain cookie. See sibling repos'
// src/contexts/LanguageContext.tsx for the same protocol.
function readCookie(): Language | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`))
  const value = match ? decodeURIComponent(match[1]) : null
  return isLanguage(value) ? value : null
}

function writeCookie(value: Language) {
  if (typeof document === 'undefined') return
  const domain = location.hostname.endsWith('proactivasalud.com') ? '; domain=.proactivasalud.com' : ''
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=31536000; SameSite=Lax${domain}`
}

function readLocalStorage(): Language | null {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return isLanguage(value) ? value : null
}

function writeLocalStorage(value: Language) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, value)
}

// Tiny external store: language is process-wide (not per-component state),
// synced to the cookie/localStorage, and read via useSyncExternalStore so
// there's no "setState inside an effect" render cascade and no SSR/client
// hydration mismatch (server always sees DEFAULT_LANGUAGE).
let cachedLanguage: Language | null = null
let listeners: Array<() => void> = []

function getSnapshot(): Language {
  if (cachedLanguage === null) {
    cachedLanguage = readCookie() ?? readLocalStorage() ?? DEFAULT_LANGUAGE
  }
  return cachedLanguage
}

function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE
}

function subscribe(listener: () => void) {
  listeners.push(listener)
  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

function setLanguage(next: Language) {
  cachedLanguage = next
  writeLocalStorage(next)
  writeCookie(next)
  listeners.forEach((listener) => listener())
}

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
