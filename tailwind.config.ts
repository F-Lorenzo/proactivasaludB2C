import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'oklch(0.47 0.22 295)',
          dark:    'oklch(0.27 0.18 295)',
          light:   'oklch(0.95 0.04 295)',
          mid:     'oklch(0.58 0.20 302)',
          muted:   'oklch(0.90 0.06 295)',
        },
        accent: {
          DEFAULT: 'oklch(0.51 0.15 162)',
          light:   'oklch(0.94 0.06 162)',
        },
        surface: 'oklch(0.98 0.01 295)',
        ink: {
          DEFAULT: 'oklch(0.22 0.02 258)',
          mid:     'oklch(0.42 0.02 258)',
          soft:    'oklch(0.62 0.01 258)',
        },
      },
      fontFamily: {
        display: ['var(--font-rufina)', 'Georgia', 'serif'],
        body:    ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:     '0 2px 20px 0 oklch(0.47 0.22 295 / 0.07)',
        hover:    '0 8px 40px 0 oklch(0.47 0.22 295 / 0.14)',
        elevated: '0 16px 56px 0 oklch(0.47 0.22 295 / 0.18)',
        button:   '0 4px 20px 0 oklch(0.47 0.22 295 / 0.28)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in':   'fadeIn 0.5s ease-out both',
        'count-up':  'countUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
