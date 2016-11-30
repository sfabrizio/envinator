#!bin/env node

(function() {
    'use strict';
    var inquirer = require('inquirer'),
        generator = require('./generator'),
        questions;

    questions = [{
        type: 'input',
        name: 'name',
        message: 'Enter the package name',
        validate: function(value) {
            var pass = value.match("^(?:@([^/]+?)[/])?([^/]+?)$");
            if (pass) {
                return true;
            }
            return 'Please enter a valid npm package name';
        }
    }, {
        type: 'input',
        name: 'desc',
        message: 'Insert the package description'
   }];

    require('./print-logo');
    setTimeout(promptQuestions,10);

    //////////

    function promptQuestions() {
        inquirer.prompt(questions).then(function(answers) {
            generator(answers);
        });
    }

})();