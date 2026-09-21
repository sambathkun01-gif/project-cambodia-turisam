import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        'khmer-navy': '#032B43',
        'khmer-gold': '#E0A526',
        'khmer-red': '#C0392B',
        'khmer-cream': '#FDF6EC',
      },
    },
  },
  plugins: [daisyui],
}
