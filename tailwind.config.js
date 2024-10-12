/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'deep-blue': 'var(--deep-blue)',
        'soft-blue': 'var(--soft-blue)',
        'light-gray': 'var(--light-gray)',
        'rose-pink': 'var(--rose-pink)',
        'mint-green': 'var(--mint-green)',
      },
    },
  },
  plugins: [],
}
