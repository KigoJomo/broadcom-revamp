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
        gray: 'var(--gray)',
        purple: 'var(--purple)',
        indigo: 'var(--indigo)',
        blue: 'var(--blue)',
        'dark-blue': 'var(--dark-blue)',
        cyan: 'var(--cyan)',
        'light-gray': 'var(--light-gray)',
        'rose-pink': 'var(--rose-pink)',
        'mint-green': 'var(--mint-green)',

        'light-blue': 'var(--light-blue)',
        'darker-blue': 'var(--darker-blue)',
      },
    },
  },
  plugins: [],
}
