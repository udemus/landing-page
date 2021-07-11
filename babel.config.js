module.exports = {
  plugins: [
    'babel-plugin-twin',
    'babel-plugin-macros',
    ['styled-components', { ssr: true }],
  ],
  presets: [['next/babel']],
};
