'use client'

import { useEffect, useState } from 'react'

// Official USD→ARS sell rate ("dólar oficial venta"), used to show plan
// prices (always billed in ARS) as an approximate USD reference.
// https://dolarapi.com/docs/argentina/operations/get-dolar-oficial.html
export function useDolarOficial() {
  const [venta, setVenta] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch('https://dolarapi.com/v1/dolares/oficial')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { venta?: number }) => {
        if (!cancelled && typeof data.venta === 'number') {
          setVenta(data.venta)
        }
      })
      .catch(() => {
        // Silently unavailable — the ARS reference just won't render.
      })

    return () => {
      cancelled = true
    }
  }, [])

  return venta
}
