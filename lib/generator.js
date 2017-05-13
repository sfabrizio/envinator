#!bin/env node

(function() {
    'use strict';
    var tempFolder = require('./step-temp-folder'),
        copy = require('./step-copy'),
        replace = require('./step-replace'),
        shell = require('shelljs'),
        tempFolderPath,
        generatorFiles;

    require('colors');

    module.exports = generateProject;

    ///////////

    function generateProject(userValue) {
        //TODO: improve this code and split it on modules..
        //add path.join for start.. remove comments and create some methods/modules instead.

        //prepare temp folder
        tempFolderPath = tempFolder.create() + '/';
        generatorFiles = require.main.paths[0] + '/../../generator/';
        copy(generatorFiles + '*', tempFolderPath);
        copy(generatorFiles + '.*', tempFolderPath);
        shell.cd(tempFolderPath);
        //replaces step
        replace('PACKAGE_NAME', userValue.name);
        replace('PACKAGE_DESC', userValue.desc);
        replace('AUTHOR_NAME', userValue.author);
        replace('GITHUB_NAMESPACE', userValue.namespace);
        //move replaced files
        shell.cd('../');
        shell.mv(tempFolderPath + '*', './');
        shell.mv(tempFolderPath + '.*', './');
        //clean up temp folder
        shell.rm('-rf', '.envinator');
        //print sucess
        shell.exec('ls -la');
        console.log('All done.'.green);
    }

})();
