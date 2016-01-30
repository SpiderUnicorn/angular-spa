/*jslint node: true */

module.exports = function() {
    var client = './src/';

    var config = {
        css: client + '**/*.css',

        js: [
            client + '**/*.js',
            './gulp/*.js',
            './*.js'
        ],

        paths: {
            src: client,
            client: client,
            test: './test',
            index: client + 'index.html',
            injectableJs: [
                client + '**/*.js',
                '!src/**/*.spec.js'
            ]
        }
    };

    return config;
};
