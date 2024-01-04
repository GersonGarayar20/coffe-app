import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary': 'rgb(0,0,0)',
        'second': 'rgb(253 230 138)',
        'third':'rgb(146 64 14)'
      },
      gridTemplateColumns:{
        'responsive':'repeat(auto-fill, minmax(150px, 1fr))',
        'responsiveCart':'repeat(auto-fill, minmax(400px, 1fr))'
      }
    },
  },
  plugins: [],
}
export default config
