const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    app: ['../index.ts']
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts'],
    modules: [
      path.join(__dirname, '../node_modules')
    ],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  context: path.resolve(__dirname, 'src'),
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: require.resolve('awesome-typescript-loader'),
            options: {
              configFileName: 'tsconfig.json',
              // Compile with TypeScript, then transpile with Babel
              useBabel: true,
              babelCore: '@babel/core'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  // Produce sourcemap
  devtool: 'source-map'
};
