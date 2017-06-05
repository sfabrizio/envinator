#!/user/bin/env node

(function() {
    'use strict';
    var logoCli = require('cli-logo'),
        version = 'v' + require('../package.json').version,
        description = require('../package.json').description,
        logoConfig = {
            "name": "Envinator",
            "description": description,
            "version": version
        };


    logoCli.print(logoConfig);
})();
