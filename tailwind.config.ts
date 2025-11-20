import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FFD700',
          DEFAULT: '#D4AF37',
          dark: '#8B6914',
        },
      },
      fontSize: {
        base: ['18px', '1.6'],
        lg: ['20px', '1.6'],
        xl: ['24px', '1.5'],
        '2xl': ['28px', '1.4'],
        '3xl': ['32px', '1.3'],
      },
    },
  },
  plugins: [],
}

export default config
