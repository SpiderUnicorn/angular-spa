/*jslint node: true */

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

var config = require('./gulp.config')();

gulp.task('styles', function () {
    return gulp
        .src(config.css)
        .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%']}))
        .pipe(gulp.dest(config.paths.client));
});
