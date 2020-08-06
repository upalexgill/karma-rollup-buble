module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      { pattern: 'test/**/*.spec.js', watched: false }
    ],
    preprocessors: {
      'src/*.js': ['rollup'],
      'test/**/*.spec.js': ['rollup']
    },
    rollupPreprocessor: {
      plugins: [require('rollup-plugin-buble')()],
      output: {
        format: 'iife',
        name: 'test',
        sourcemap: 'inline'
      }
    },
    browsers: ['Chrome'],
    singleRun: false
  })
}
