/*jslint node: true */

var gulp = require('gulp');
var inject = require('gulp-inject');

var config = require('./gulp.config')();
var util = require('./gulp.utils')();

gulp.task('inject', ['inject-vendor', 'inject-angular', 'inject-css'], function () {
    util.log('Injecting css/js into index.html');
});


gulp.task('inject-vendor', function () {
    util.log('Injecting bower components into index.html');

    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.paths.index)
        .pipe(wiredep())
        .pipe(gulp.dest(config.paths.client));
});


gulp.task('inject-angular', function () {
    util.log('Injecting angular-files into index.html');

    var sort = require('gulp-angular-filesort');

    return gulp
        .src(config.paths.index)
        .pipe(inject(
            gulp.src(config.paths.injectableJs)
            .pipe(sort())
        ))
        .pipe(gulp.dest(config.paths.client));
});


gulp.task('inject-css', function () {
    util.log('Injecting css into index.html');

    return gulp
        .src(config.paths.index)
        .pipe(inject(
            gulp.src(config.css)))
        .pipe(gulp.dest(config.paths.client));
});
