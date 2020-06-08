module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/pages/**/*.{js,jsx,ts,tsx,svg}',
      './src/components/**/*.{js,jsx,ts,tsx,svg}',
    ],
  },
  theme: {
    extend: {
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
      borderRadius: {
        thin: '0.5px',
      },
      inset: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '12': '3rem',
        '-full': '-100%',
      },
      rotate: {
        '-135': '-135deg',
      },
      zIndex: {
        '-10': '-10',
      },
      strokeWidth: {
        '3': '3',
      },
    },
  },
  variants: {},
  plugins: [],
};
