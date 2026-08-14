// Structural data only — translatable copy lives in src/translations/{es,en,pt}.ts
export const PILLARS = [
  { number: '01', icon: 'Utensils' },
  { number: '02', icon: 'Activity' },
  { number: '03', icon: 'Heart' },
  { number: '04', icon: 'Monitor' },
  { number: '05', icon: 'Users' },
] as const

export const PLANS = [
  { id: 'care', name: 'Care', price: 'USD 29,80', highlighted: false },
  { id: 'plus', name: 'Plus', price: 'USD 59,90', highlighted: true },
  { id: 'prime', name: 'Prime', price: 'USD 89,50', highlighted: false },
] as const
