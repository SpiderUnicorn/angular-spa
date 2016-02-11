/*jslint node: true */

var gulp = require('gulp');
var protractor = require('gulp-angular-protractor');

gulp.task('e2e', function (done) {
    gulp
        .src(['test/e2e/**/*.js'])
        .pipe(protractor({
            'configFile': 'protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function (error) {
            console.log(error);
        })
        .on('end', done);
});
