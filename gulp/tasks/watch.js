/*jslint node: true */

var gulp = require('gulp');
var config = require('../config')();
var utils = require('../gulp.utils')();

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

    browserSync.use(spa({
        selector: "[ng-app]",
        history: {
            index: '/index.html'
        }
    }));

    browserSync.init({

        server: {
            baseDir: './',
            routes: {

            }
        },
        open: false
    });

    watch(config.paths.src + "**/*.html").on('change', browserSync.reload);
});

