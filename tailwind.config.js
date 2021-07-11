const palette = {
  // Primary
  themePrimary: '#0078d4',
  themeSecondary: '#2b88d8',
  themeTertiary: '#71afe5',

  // Foreground
  black: '#000000',
  neutralPrimary: '#323130',
  neutralSecondary: '#605e5c',
  neutralTertiary: '#a19f9d',
  white: '#ffffff',
};

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: { ...palette },
    fontFamily: {
      body: [
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      ],
    },
  },
  variants: {},
  plugins: [],
};
