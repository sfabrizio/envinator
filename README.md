# envinator

A enviroment code generator for work with npm packages.

- This command line tool will generate for you:
-- `package.json` with all the relevant data and the testing dependencies with coverage include just ready to go.
-- `.gitignore` for node js projects.
-- `.npmignore` files excluding only the test folder.
-- `.eslint` with the recommended settings.
-- `.editorconfig` file
-- `README` file with some relevant pkg info.. and with the links the the CIs like travis, bithound, codeclimate, etc. Also you will find a reference to the testing coverage tool.
-- `index.js` file.. Just the entry point to your project.


> This tool will generate your npm package boilerplate with some CI link enviroment, a testing library ready to run (jasmine) and a nice readme file with all this magic already there.
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
