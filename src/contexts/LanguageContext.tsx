'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'es' | 'en' | 'pt'

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

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)

  useEffect(() => {
    const detected = readCookie() ?? readLocalStorage() ?? DEFAULT_LANGUAGE
    setLanguageState(detected)
    document.documentElement.lang = detected
  }, [])

  const setLanguage = (next: Language) => {
    setLanguageState(next)
    writeLocalStorage(next)
    writeCookie(next)
    document.documentElement.lang = next
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
