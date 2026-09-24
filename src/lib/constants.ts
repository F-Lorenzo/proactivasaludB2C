// Structural data only — translatable copy lives in src/translations/{es,en,pt}.ts
export const PILLARS = [
  { number: '01', icon: 'Utensils' },
  { number: '02', icon: 'Activity' },
  { number: '03', icon: 'Heart' },
  { number: '04', icon: 'Monitor' },
  { number: '05', icon: 'Users' },
] as const

export const PLANS = [
  { id: 'care', name: 'Care', priceARS: 45700, highlighted: false },
  { id: 'plus', name: 'Plus', priceARS: 78500, highlighted: true },
  { id: 'prime', name: 'Prime', priceARS: 95800, highlighted: false },
] as const
