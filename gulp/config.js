/*jslint node: true */

module.exports = function() {
    var client = './src/client/';
    var server = './src/server/';

    var config = {
        css: './.tmp/*.css',

        js: [
            client + '**/*.js',
            './gulp/*.js',
            './*.js'
        ],
        html: client + '**/*.html',
        source: 'src/',
        temp: './.tmp/',
        build: './dist/',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: client + '/images/**/*.*',
        htmlTemplates: client + 'app/**/*.html',

        paths: {
            src: client,
            nodeServer: './src/server/app.js',
            server: server,
            client: client,
            test: './test',
            index: client + 'index.html',
            injectableJs: [
                client + '**/*.js',
                '!src/**/*.spec.js'
            ],
            css: client + 'styles/*.css'
        },
        defaultPort: 7203,
        /* delay for browser sync */
        browserReloadDelay: 1000,

        /* templatecache */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        }
    };

    return config;
};
