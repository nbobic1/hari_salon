import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
          'a':'0 0 24px 4px rgba(208,208,208,1)'
      },
      colors:{
        "dark":"#333333",
        "mid":"#f4f4f5",
        "light":"#ffffff",
      },
      borderRadius:{
        'DEFAULT':'12px',
        "sm":"6px",
      }
    },
  },
  plugins: [],
}
export default config
