/*jslint node: true */

var gulp = require('gulp');
var config = require('./gulp.config')();
var utils = require('./gulp.utils')();

var spa         = require("browser-sync-spa");
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    utils.log('watching for new / modified files');

    var watch = require('gulp-watch');

    watch(config.paths.src + '**/*.js', function () {
        gulp.start('inject');
    });
    watch(config.paths.src + '**/*.css', function () {
        gulp.start('styles');
    });

    browserSync.init({

        server: {
            baseDir: ['./'],
            directory: false,
            index: 'src/index.html'
        },
        open: true
    });

    watch(config.paths.src + "**/*.html").on('change', browserSync.reload);
});
