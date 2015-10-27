## BullsFirst implementation

The implementation follows the document 'BullsFirst Instructions.pdf' by William Jiang on 17-18, Oct, 2015.

### Quick Start

```
$ cd bullsfirst-2015
$ npm install
```
If in Webstorm, then directly click app/index.html to run.

or:
```bash
$ http-server .
```
After that, go to browser: http://localhost:3000/ by default

1. structure
The root folder is standard angluar layout which refers to Angular-Seed and Yeoman AngularApp.
```
BullsFirst Instructions.pdf
bower.json
Q_A.md
karma.conf.js
README.md
node_modules
app
package.json
```

All the SPA is in `app` folder:
```
app/
   bower_components/
   images/
   scripts/
   styles/
   test/
   views/
   app.js
   index.html
```

### index.html

The 3rd components:

1. angular.js
1. angular-route.js
1. lodash.js
1. moment.js

### modules:

There are several dependency modules:
```
    var app = angular.module('bullsfirst', [
        'ngRoute',
        'bullsfirst.service',
        'bullsfirst.directive',
        'bullsfirst.controller'
    ]);
```


### unit test
```
  $ cd bullsfirst-2015
  $ karma start
  //or:
  $ karma start karma.conf.js
```

There are 2 test files in app/test folder:
1. controller.test.js
1. routes.test.js

Total 6 jasmine tests are passed.


### grunt jshint
to check the syntax:
```bash
  $ grunt jshint
```

### SASS
in app/styles/ there are 2 folders:
1. sass for source scss files
1. css for target css file

```bash
  $ cd app/styles/sass
  $ sass app.scss ../css/app.css
```
