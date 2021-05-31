const json = require('@rollup/plugin-json');

module.exports = {
  input: './src/index.js',
  output: {
    dir: './dist',
    entryFileNames: '[name].[hash].js',
    chunkFileNames: '[name].[hash].js'
  },
  plugins: [
    json()
  ]
};