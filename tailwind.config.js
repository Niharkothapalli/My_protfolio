/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#000000',
        base: '#ffffff',
        surface: '#f4f4f5',
        muted: '#71717a',
        line: '#e4e4e7',
        dark: '#18181b',
      },
      fontFamily: {
        sans: ['Rajdhani', 'system-ui', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      boxShadow: {
        hard: '4px 4px 0px rgba(0,0,0,0.12)',
        'hard-hover': '6px 6px 0px rgba(0,0,0,0.9)',
        'hard-sm': '2px 2px 0px rgba(0,0,0,0.9)',
      },
    },
  },
  plugins: [],
}
