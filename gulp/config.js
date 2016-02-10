/*jslint node: true */

module.exports = function() {
    var client = './src/client/';
    var server = './src/server/';

    var config = {
        css: client + '**/*.css',

        js: [
            client + '**/*.js',
            './gulp/*.js',
            './*.js'
        ],
        source: 'src/',

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
            ]
        },
        defaultPort: 7203,
        /* delay for browser sync */
        browserReloadDelay: 1000
    };

    return config;
};
