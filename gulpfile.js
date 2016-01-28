/* Gulp */
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    lazy: true
});

/* Utils */
var color = plugins.util.colors;

/* Path variables */
var client = './src/';
var path = {
    client: client,
    css: client + '**/*.css',
    index: client + 'index.html',
    js: [client + '**/*.js', './*.js'],
    injectableJs: [
        client + '**/*.js',
        '!src/**/*.spec.js'
    ]
};

/* setup */
var Server = require('karma').Server;

gulp.task('serve', function() {
    log('watching for new / modified files');
    var watch = require('gulp-watch');

    watch(path.client + '**/*.js', function() {
        gulp.start('inject');
    });
    watch(path.client + '**/*.css', function() {
        gulp.start('styles');
    });
})


gulp.task('test', ['lint'], function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
    }, done).start();
});

/**
    Task: lint

    Checks for error in JS files using jshint and jscs.
    Error checks can be configured in .jscsrc and .jshintrc
    respectivly.

*/
gulp.task('lint', function () {
    log('Analyzing code quality with jshint and jscs');

    return gulp
        .src(path.js)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish')) /* Formatted reports */
        .pipe(plugins.jshint.reporter('fail')) /* Fail on error */
        .pipe(plugins.jscs());
});


gulp.task('styles', function () {
    return gulp
        .src(path.css)
        .pipe(plugins.autoprefixer({ browsers: ['last 2 versions', '> 5%']}))
        .pipe(gulp.dest(path.client));
})

/**
    Task: inject

    Automaticly injects css and js into index.html.

*/
gulp.task('inject', ['inject-vendor', 'inject-angular', 'inject-css'], function () {
    log('Injecting css/js into index.html');
});

/**********************
 * Task: inject-vendor
 **********************/
gulp.task('inject-vendor', function () {
    log('Injecting bower components into index.html');

    var wiredep = require('wiredep').stream;

    return gulp
        .src(path.index)
        .pipe(wiredep())
        .pipe(gulp.dest(path.client));
});

/**********************
 * Task: inject-angular
 **********************/
gulp.task('inject-angular', function () {
    log('Injecting angular-files into index.html');

    var sort = require('gulp-angular-filesort');

    return gulp
        .src(path.index)
        .pipe(plugins.inject(
            gulp.src(path.injectableJs)
            .pipe(sort())
        ))
        .pipe(gulp.dest(path.client));
});


/**********************
 * Task: inject-css
 **********************/
gulp.task('inject-css', function () {
    log('Injecting css into index.html');

    return gulp
        .src(path.index)
        .pipe(plugins.inject(
            gulp.src(path.css), {
                read: false
            }))
        .pipe(gulp.dest(path.client));
});


/**
 * Logging
 *
 * Log a message to the console to give user information
 * about an executing gulp task, or the progress of task.
 *
 * @param {string} message the message to log
 */

function log(message) {
    plugins.util.log(color.magenta(message));
}
