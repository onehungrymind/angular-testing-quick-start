// Karma configuration
// Generated on Sat Nov 08 2014 19:20:47 GMT-0700 (MST)

module.exports = function (config)
{
    'use strict';

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/bower_components/angular-ui-router/release/angular-ui-router.js',
            'test/unit-test-helpers.js',
            'app/**/*.html',
            'app/**/*.spec.js',
            'app/**/*.js'
        ],

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/',
            //stripSufix: '.ext',

            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'myAppTemplates'
        },

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/app/**/*.html': ['ng-html2js'],
            'src/**/*.js': 'coverage',
            'app/!(bower_components)/**/*.js': 'coverage'
        },

        coverageReporter: {
            dir: 'target/',
            type: 'html'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage', 'progress'],

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

        // Which plugins to enable
        plugins: ['karma-phantomjs-launcher', 'karma-jasmine', 'karma-spec-reporter', 'karma-coverage', 'ng-html2js'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
