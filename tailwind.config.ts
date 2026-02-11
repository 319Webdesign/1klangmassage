import type { Config } from 'tailwindcss'

/**
 * Farbpalette aus Farbwähler:
 * - Salbeigrün #8e9d7b (HSB 86° 22% 62%)
 * - Orange #f7a600 (HSB 40° 100% 97%) – Logo
 * - Braun #86705d (HSB 28° 31% 53%) – Text
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#e8ebe4',
          100: '#d4dacb',
          200: '#b5c4a3',
          300: '#9aab82',
          400: '#8e9d7b',
          500: '#7a8a66',
          600: '#657555',
          700: '#526044',
        },
        orange: {
          400: '#fbb533',
          500: '#f7a600',
          600: '#c68400',
          700: '#a87000',
        },
        brown: {
          400: '#a08d7a',
          500: '#86705d',
          600: '#6b5a4a',
          700: '#544638',
        },
        beige: '#F5F5DC',
        terracotta: {
          50: '#f5ebe4',
          100: '#e8d9c8',
          200: '#d4b89a',
          300: '#c49d78',
        },
        gold: {
          500: '#c9a227',
          600: '#a8871f',
        },
        /** Dunkles Waldgrün für Footer */
        footer: {
          bg: '#1a2e1a',
          border: '#2d4a2d',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
