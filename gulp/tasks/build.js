/*jslint node: true */

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
const del = require('del');
var templateCache = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');
var plumber = require('gulp-plumber');
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

var config = require('../config')();
var util = require('../gulp.utils')();

gulp.task('fonts', ['clean-fonts'], function () {
    util.log('Copying fonts');
    return gulp.src(config.fonts)
        .pipe(gulp.dest(config.build + 'fonts'));
});

gulp.task('images', ['clean-images'], function () {
    util.log('Copying images');
    return gulp.src(config.images)
        .pipe(imagemin({
            optimizationlevel: 4
        }))
        .pipe(gulp.dest(config.build + 'images'));
});

gulp.task('clean', function (done) {
    util.log('Removing distribution folder')
    var files = [].concat(config.build);
    return del(files);
});

gulp.task('clean-fonts', function (done) {
    var files = config.build + 'fonts/**/*.*';
    return clean(files);
});

gulp.task('clean-images', function (done) {
    var files = config.build + 'images/**/*.*';
    return clean(files);
});

gulp.task('clean-code', function (done) {
    var files = [].concat(
        config.build + '**/*.html',
        config.build + 'js/**/*.js'
    );
    return clean(files);
});

gulp.task('templatecache', ['clean-code'], function () {
    util.log('Creating $templateCache for Angular');

    return gulp
        .src(config.htmlTemplates)
        .pipe(minifyHtml({
            empty: true
        }))
        .pipe(templateCache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.temp));
})

gulp.task('optimize', ['inject', 'fonts', 'images'], function () {
    util.log('Optimizing js, css, html');

    var templateCache = config.temp + config.templateCache.file;
    var cssFilter = filter('**/*.css', {restore:true});
    var jsLibFilter = filter('**/lib.js', {restore:true});
    var jsAppFilter = filter('**/app.js', {restore:true});

    return gulp
        .src(config.paths.index)
        .pipe(plumber())
        .pipe(inject(gulp.src(templateCache, {
            read: false
        }), {
            starttag: '<!-- inject:templates:js -->'
        }))
        .pipe(useref({ searchPath: './' }))
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(jsLibFilter)
        .pipe(uglify())
        .pipe(jsLibFilter.restore)
        .pipe(jsAppFilter)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(jsAppFilter.restore)
        .pipe(gulp.dest(config.build));
});

//////

function clean(files) {
    return del(files);
}
