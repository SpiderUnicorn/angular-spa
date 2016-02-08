/*
    Avalible tasks:

    gulp inject      ->    inject js / css into index.html
    gulp lint        ->    analyze javascript code quality
    gulp styles      ->    autoprefix css
    gulp test        ->    run all unit tests
    gulp watch       ->    watch for file changes and call inject

    gulp --tasks     ->    view all avalible tasks

    You'll find the implementations of the tasks under
    /gulp

*/


/*jslint node: true */
var requireDir = require('require-dir');
requireDir('./gulp');
