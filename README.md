[![Build Status](https://travis-ci.org/sfabrizio/envinator.svg?)](https://travis-ci.org/sfabrizio/envinator)
[![codecov](https://codecov.io/gh/sfabrizio/envinator/branch/master/graph/badge.svg)](https://codecov.io/gh/sfabrizio/envinator)
[![npm](https://img.shields.io/npm/v/envinator.svg?style=flat)](https://www.npmjs.com/package/envinator)
[![Turbo Commit](https://img.shields.io/badge/Turbo_Commit-on-3DD1F2.svg)](https://github.com/labs-js/turbo-git/blob/master/CONVENTION.md)
[![bitHound](https://www.bithound.io/github/sfabrizio/envinator/badges/score.svg)](https://www.bithound.io/github/sfabrizio/envinator)
[![Code Climate](https://codeclimate.com/github/sfabrizio/envinator/badges/gpa.svg)](https://codeclimate.com/github/sfabrizio/envinator)

# envinator

A environment code generator for work with npm packages.

- This command line tool will generate for you:
  - `package.json` with all the relevant data and the testing dependencies with coverage include just ready to go.
  - `.gitignore` for node js projects.
  - `.npmignore` file excluding the test folder on the npm repository.
  - `.eslint` a complete eslint confing with the recommended settings.
  - `.editorconfig` file with some basic conf
  - `README` file with some relevant pkg info.. Badges for access and see the CIs: travis, bithound, codeclimate, etc. Also you will find a reference to the testing coverage tool.
  - `index.js` file.. Just the entry point to your project.


> This tool will generate your npm package boilerplate with some CI's already pointing to your enviroment, a testing library ready to run (jasmine) and a nice readme file with all this magic already there.
> In order to activate the CI's for your project you only need go to the links on your generated readme file. With those link you can just activate the CIs that are free for open source projects ;)

## Install

```
npm i -g envinator
```


## How to use

On an empty folder when you want to start your project just run:

```
envinator
```

You will get a prompt asking you for your package information.
Complete the prompt and you are ready to go...


## Considerations

This is the first version of `envinator` it's not considering all posibles custom options yet.. But It might be, with some help this can grew up a lot. so


**Contribution are always welcome!**

# TODO

- create a way to create a config file.. so `envinator` will work with another project templates.
