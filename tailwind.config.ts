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
      fontWeight: {
        'zero': '0', // You can name it anything you like, e.g., 'hairline-zero'
      },
    },
  },
  plugins: [],
}