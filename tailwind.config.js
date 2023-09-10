module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  variants: {},
  plugins: [],
  theme: {
    fontSize: {
      'xs': '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'gray-200': '#e2e8f0',
      'gray-300': '#d1d5db',
      'gray-400': '#9ca3af',
      'gray-900': '#0f172a',
      'hard-blue': '#000760',
      'lime': '#a3e635',
      'slate-700': '#334155',
      'slate-800': '#1e293b',
      'slate-400': '#94a3b8',
    },
    extend: {
      height: {
        '128': '32rem',
        '150': '42rem',
      }
    }
  },
};
