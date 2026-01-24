/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#050B18',
        'navy-light': '#0A1628',
        'scanium-blue': '#1F4BFF',
        'scanium-cyan': '#00D4FF',
        'scanium-purple': '#A259FF',
        'scanium-yellow': '#FFD400',
        'text-primary': '#E8ECF4',
        'text-muted': 'rgba(232, 236, 244, 0.6)',
      },
      fontFamily: {
        sans: [
          '"Space Grotesk"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
