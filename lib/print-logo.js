#!/user/bin/env node
(function() {
    'use strict';
    var figlet = require('figlet'),
	version = 'v' + require('../package.json').version,
	description = require('../package.json').description;
    require('colors');

    figlet('Envinator', 'Standard', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.rainbow, version)
        console.log(description)
        console.log('\n')
    });
})();
