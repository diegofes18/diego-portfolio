/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta principal
        'bg': '#0f0f12',
        'surface': '#17171c',
        'text': '#f4f4f5',
        'text-secondary': '#a1a1aa',
        'border': '#2a2a32',
        'accent-cyan': '#06b6d4',
        'accent-violet': '#8b5cf6',
        'accent-green': '#10b981',
      },
      fontFamily: {
        'sans': ['Onest', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
};
