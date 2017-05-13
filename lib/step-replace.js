#!/usr/bin/env node

module.exports = (function() {
    'use strict';
    var shell = require('shelljs');

    return doReplace;

    ///////////


    function doReplace (tag, newText) {
        shell.ls('*').forEach(function(file) {
            shell.sed('-i', tag, newText, file);
            //fixme: I don't work on multiple replacement in the same line.
            shell.sed('-i', tag, newText, file);
        });
    }
})();
