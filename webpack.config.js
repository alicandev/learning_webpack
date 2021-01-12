const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist',
    path: path.resolve(__dirname, 'dist'),
  },
};
