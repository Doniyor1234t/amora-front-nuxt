import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MontserratLight', 'ui-sans-serif', 'system-ui'],
        myfont: ['masvol', 'sans-serif'],
      },
    },
  },
  plugins: [],
}