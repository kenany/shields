<!--@h1([pkg.name])-->
# shields
<!--/@-->

<!--@shields('npm', 'travis', 'gemnasium')-->
[![NPM version](https://img.shields.io/npm/v/shields.svg?style=flat)](https://www.npmjs.com/package/shields) [![Build status for master](https://img.shields.io/travis/KenanY/shields/master.svg?style=flat)](https://travis-ci.org/KenanY/shields) [![Gemnasium](https://img.shields.io/gemnasium/KenanY/shields.svg?style=flat)](https://gemnasium.com/KenanY/shields)
<!--/@-->

Generate [shields](http://shields.io) for your current project's `README.md`.

## Example

From the command-line:

```bash
$ shields travis gemnasium
[![Build Status][travis-svg]][travis]
[![Dependency Status][gemnasium-svg]][gemnasium]

   [travis]: https://travis-ci.org/KenanY/shields
   [travis-svg]: https://img.shields.io/travis/KenanY/shields.svg
   [gemnasium]: https://gemnasium.com/KenanY/shields
   [gemnasium-svg]: https://img.shields.io/gemnasium/KenanY/shields.svg
```

Or from the API:

<!--@example('example.js')-->
```js
var shields = require('shields')();

var shieldProps = shields('travis', {
  repo: 'KenanY/shields'
});

console.log(shieldProps);
//> { text: 'Build status',
//    link: 'https://travis-ci.org/KenanY/shields',
//    image: 'https://img.shields.io/travis/KenanY/shields.svg?style=flat' }
```
<!--/@-->

## Installation

For the command-line executable:

```bash
$ npm install -g shields
```

For the API:

```bash
$ npm install shields
```

## API

```javascript
var shielder = require('shields');
```

### `var shields = shielder(opts)`

- `opts.style` is the style of the shield. The available styles are: flat (the
  default one), flat-square and plastic.

```js
var shields = shielder({
  style: 'plastic'
})
```

### `shields(service, opts)`

- `service` is a _String_ representing the service for which the shield will
  be created. Currently supported values are: npm, travis, coveralls, climate,
  deps, devdeps, peerdeps, gemnasium.
- `opts.repo` is the GitHub repo targeted by the shield. For the current repo
  the value would be `KenanY/shields`.
- `opts.branch` is the branch name for which the shield is created.
- `opts.npmName` is the npm name of the package for which the shield is
  created. This value is currently required only by the `npm` shield.

The shields function returns an _Object_ `obj` which has three keys:

- `obj.image` is a _String_ link to the SVG of the shield for _String_
  `service`
- `obj.link` is a _String_ link to the project page of `repo` on the website
  of `service`
- `obj.text` is a _String_ label for the `service`

<!--@license()-->
## License

[MIT](./LICENSE) © [Kenan Yildirim](http://kenany.me/)
<!--/@-->

* * *

<!--@dependencies({ shield: 'flat' })-->
## <a name="dependencies">Dependencies</a> [![Dependency status for master](https://img.shields.io/david/KenanY/shields/master.svg?style=flat)](https://david-dm.org/KenanY/shields/master)

- [minimist](https://github.com/substack/minimist): parse argument options
- [object-assign](https://github.com/sindresorhus/object-assign): ES2015 Object.assign() ponyfill
- [read-package-json](https://github.com/npm/read-package-json): The thing npm uses to read package.json files with semantics and defaults and validation

<!--/@-->

<!--@devDependencies({ shield: 'flat' })-->
## <a name="dev-dependencies">Dev Dependencies</a> [![devDependency status for master](https://img.shields.io/david/dev/KenanY/shields/master.svg?style=flat)](https://david-dm.org/KenanY/shields/master#info=devDependencies)

- [lodash.isfunction](https://github.com/lodash/lodash): The lodash method `_.isFunction` exported as a module.
- [mos](https://github.com/zkochan/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers

<!--/@-->
