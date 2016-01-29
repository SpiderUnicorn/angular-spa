/*jslint node: true */

var gulp = require('gulp');
var config = require('./gulp.config')();
var utils = require('./gulp.utils')();

gulp.task('watch', function () {
    utils.log('watching for new / modified files');

    var watch = require('gulp-watch');

    watch(config.paths.src + '**/*.js', function () {
        gulp.start('inject');
    });
    watch(config.paths.src + '**/*.css', function () {
        gulp.start('styles');
    });
});
