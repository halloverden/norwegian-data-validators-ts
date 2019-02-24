// karma.conf.ts

module.exports = ( config: any ) => {
  config.set({
    basePath: '.',
    files: [
      { pattern: "src/**/*.ts" },
      { pattern: "test/**/*.ts" }
    ],
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    preprocessors: {
      "src/**/*.ts": ["karma-typescript", "coverage"],
      "test/**/*.ts": ["karma-typescript"]
    },
    frameworks: ['jasmine', 'karma-typescript'],
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json'
    },
    plugins: [
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-typescript')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ["progress", "coverage", "karma-typescript"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
