const webpackConfig = require('./webpack.config.test');

module.exports = ( config: any ) => {
  config.set({
    basePath: '.',
    files: [
      { pattern: 'src/utilities/*.ts' },
      { pattern: 'src/validators/*.ts' },
      { pattern: 'test/**/*.ts' }
    ],
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    preprocessors: {
      'src/**/*.ts': ['webpack', 'coverage'],
      'test/**/*.ts': ['webpack']
    },
    frameworks: ['jasmine'],
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json'
    },
    plugins: [
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ],
    webpack: webpackConfig,
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
