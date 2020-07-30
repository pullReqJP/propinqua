module.exports = {
  purge: [
    './src/pages/**/*.{js,jsx,ts,tsx,svg}',
    './src/components/**/*.{js,jsx,ts,tsx,svg}',
  ],
  theme: {
    extend: {
      textColor: {
        trend: '#6cbb59',
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '60': '0.6',
        '70': '0.7',
        '95': '0.95',
      },
      fontFamily: {
        body: [
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'ヒラギノ角ゴ ProN W3',
          'Meiryo',
          'メイリオ',
          'sans-serif',
        ],
        display: ['Comfortaa', 'sans-serif'],
      },
      borderColor: {
        trend: '#6cbb59',
      },
      borderRadius: {
        thin: '0.5px',
        '4rem': '4rem',
      },
      inset: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '12': '3rem',
        '1/2': '50%',
        '-full': '-100%',
        'offset-16': 'calc(50% + 4rem)',
      },
      rotate: {
        '-135': '-135deg',
      },
      zIndex: {
        '-10': '-10',
      },
      strokeWidth: {
        regular: '1.5',
      },
    },
  },
  variants: {},
  plugins: [],
};
