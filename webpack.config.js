const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    app: ['./index.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    chunkFilename: 'app-[id].js',
    publicPath: './'
  },
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
  mode: "development",
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
