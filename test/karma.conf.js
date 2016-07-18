// Karma configuration
// Generated on Wed Dec 02 2015 20:54:52 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/views/*.html',
      'app/scripts/app.js',
      'app/scripts/controllers/*.js',
      'app/scripts/factory/*.js',
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: ['app/lib/angular/angular-scenario.js'],



	proxies: {
	  '/favicon.ico': '/favicon.ico'
	},


	coverageReporter: {
		  type: 'html',
		  dir: 'coverage'
		},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

 // Don't forget to add 'karma-coverage' to your list of plugins
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ]
  });
};
