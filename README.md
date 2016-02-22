## Overview
This project is intended to be a POC for Angular2 and TypeScript built on top of some new and current JavaScript
build tools.  Specific objectives include:

- Use [Angular2][]
- Use [TypeScript][]
- Use a module loading system
- One package manager (eg. No [Bower][] _and_ [NPM][])
- Emphasis on [ES6][] compatibility
- Interop with [Gulp][]

Tools under consideration

- [JSPM][] / [SystemJS][] (polyfill for [ES6 modules][])
- [Browserify][] (not monolithic, uses [CommonJS][] `require('some-module')` syntax
- [Webpack][] (complete asset bundler, but emphasizes configuration files, like Grunt)
- ES6 classes, module loading

A good article on all the current module loading libraries can be found [here][]

[Angular2]: https://angular.io/
[TypeScript]: http://www.typescriptlang.org/
[Bower]: http://bower.io/
[NPM]: https://www.npmjs.com/
[ES6]: http://es6-features.org/#Constants
[Gulp]: http://gulpjs.com/
[JSPM]: http://jspm.io/
[SystemJS]: https://github.com/systemjs/systemjs
[ES6 Modules]: http://www.2ality.com/2014/09/es6-modules-final.html
[Browserify]: http://browserify.org/
[CommonJS]: http://requirejs.org/docs/commonjs.html
[Webpack]: http://webpack.github.io/

[here]: http://survivejs.com/webpack_react/webpack_compared/

## Running the POC
To view this POC locally, please do the following

1. If not not installed, install `npm install -g http-server`

2. Run `http-server` in the root of the project

3. Load `localhost:8080` in your browser

4. ???

5. Profit


http://chariotsolutions.com/blog/post/typescript-angular2-starter-project-walkthrough-integrating-typescript/
https://html5hive.org/getting-started-with-angular-2/