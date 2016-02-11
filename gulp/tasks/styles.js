/*jslint node: true */

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

var config = require('../config')();

gulp.task('styles', function () {
    return gulp
        .src(config.paths.css)
        .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});
