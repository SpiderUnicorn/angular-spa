/*jslint node: true */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

var config = require('./config')();
var utils = require('./gulp.utils')();

var port = process.env.PORT || config.defaultPort;

gulp.task('serve-dev', ['inject'], function () {

    var isDev = true;

    var options = {
        script: config.paths.nodeServer,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.paths.server]
    };

    return nodemon(options)
        .on('restart', ['lint'], function (event) {
            utils.log('**** nodemon restarted *****');
            utils.log('Files changed: ' + event);
            /* timeout to give server a chanse to reload */
            setTimeout(function () {
                browserSync.notify('reloading browsersync...');
                browserSync.reload({
                    stream: false
                });
            }, config.browserReloadDelay);
        })
        .on('start', function () {
            utils.log('**** nodemon started *****');
            startBrowserSync();
        })
        .on('crash', function () {
            utils.log('**** nodemon crashed: script crash  ****');
        })
        .on('exit', function () {
            utils.log('**** nodemon exited ****');
        });


    function startBrowserSync() {
        if (browserSync.active) {
            return;
        }
        utils.log('Starting browser-sync on port: ' + port);

        gulp.watch([config.css], ['styles'])
            .on('change', function (event) {
                logEvent(event);
            });

        var options = {
            proxy: 'localhost:' + port,
            port: 3000,
            files: [
                config.paths.client + '**/*.*',
                '!' + config.css
            ],
            ghostMode: {
                clicks: true,
                location: false,
                forms: true,
                scrolling: true
            },
            injectChanges: true,
            logFileChanges: true,
            logLevel: 'debug',
            logPrefix: 'gulp-patterns',
            notify: true,
            reloadDelay: 0
        };

        browserSync(options);

    }

    function logEvent(event) {
        var src = new RegExp('/.*(?=/' + config.source + ')/');
        utils.log('File ' + event.path.replace(src, '') + ' ' + event.type);
    }

});
