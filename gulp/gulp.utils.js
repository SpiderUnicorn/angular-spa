/*jslint node: true */

module.exports = function() {
    var util = require('gulp-util');

    var utils = {
        color: util.colors,
        log: log
    };

    function log(message) {
        util.log(util.colors.magenta(message));
    }

    return utils;
};
