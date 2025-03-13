// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if you have different extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config