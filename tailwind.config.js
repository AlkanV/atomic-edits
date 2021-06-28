module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      'primary-hover': 'var(--primary-hover)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
