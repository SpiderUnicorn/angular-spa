/*jslint node: true */

var util = require('gulp-util');

exports.log = function(message) {

    util.log(util.colors.magenta(message));
}

exports.errorHandler = function(title) {
    'use strict';

    return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
