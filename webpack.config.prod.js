const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.min.js',
    publicPath: './'
  },
  mode: 'production'
});
