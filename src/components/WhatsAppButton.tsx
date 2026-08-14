'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const WHATSAPP_NUMBER = '541176781555'

export function WhatsAppButton() {
  const { t } = useLanguage()
  const [showBubble, setShowBubble] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(t.whatsapp.prefilledMessage)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showBubble && !dismissed && (
        <div className="relative animate-fade-up bg-white rounded-2xl rounded-br-sm shadow-elevated px-4 py-3 max-w-[13rem]">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label={t.whatsapp.closeAria}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-ink-mid text-white flex items-center justify-center hover:bg-ink transition-colors"
          >
            <X size={12} aria-hidden="true" />
          </button>
          <p className="font-body text-sm text-ink-mid leading-snug">
            {t.whatsapp.bubbleMessage}
          </p>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp.openAria}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-elevated hover:scale-105 transition-transform duration-200"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" aria-hidden="true" />
        <svg
          viewBox="0 0 24 24"
          className="relative w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.55 1.36 5.1L2 22l5.14-1.45c1.49.81 3.17 1.24 4.9 1.24h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.826 9.826 0 0 0 12.04 2Zm0 1.67c2.2 0 4.26.85 5.82 2.42a8.183 8.183 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.09-1.09l-.29-.17-3.05.86.82-2.97-.19-.3a8.198 8.198 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23h-.17ZM8.53 6.9c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.03 2.6.13.17 1.76 2.8 4.35 3.83 2.15.85 2.59.68 3.06.64.47-.04 1.51-.62 1.72-1.21.21-.6.21-1.11.15-1.22-.06-.11-.23-.17-.48-.3-.25-.13-1.51-.75-1.75-.83-.23-.09-.4-.13-.57.13-.17.25-.65.83-.8 1-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.4-.78-1.9-.2-.5-.42-.42-.57-.43-.15-.01-.32-.01-.48-.01Z" />
        </svg>
      </a>
    </div>
  )
}
