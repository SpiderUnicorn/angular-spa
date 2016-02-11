/*jslint node: true */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var config = require('../config')();
var utils = require('../gulp.utils')();

gulp.task('lint', function () {
    utils.log('Analyzing code quality with jshint and jscs');

    return gulp
        .src(config.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish')) /* Formatted reports */
        .pipe(jshint.reporter('fail')) /* Fail on error */
        .pipe(jscs());
});
