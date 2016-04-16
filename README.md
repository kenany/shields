# shields

[![Build Status][travis-svg]][travis]
[![Dependency Status][gemnasium-svg]][gemnasium]

Generate [shields](http://shields.io) for your current project's `README.md`.

## Example

From the command-line:

``` bash
$ shields travis gemnasium
[![Build Status][travis-svg]][travis]
[![Dependency Status][gemnasium-svg]][gemnasium]

   [travis]: https://travis-ci.org/KenanY/shields
   [travis-svg]: https://img.shields.io/travis/KenanY/shields.svg
   [gemnasium]: https://gemnasium.com/KenanY/shields
   [gemnasium-svg]: https://img.shields.io/gemnasium/KenanY/shields.svg
```

Or from the API:

``` javascript
var shields = require('shields')();

shields('travis', {
  repo: 'KenanY/shields'
});
// => {
// =>   text: 'Build status',
// =>   image: 'https://img.shields.io/travis/KenanY/shields.svg?style=flat',
// =>   link: 'https://travis-ci.org/KenanY/shields'
// => }
```

## Installation

For the command-line executable:

``` bash
$ npm install -g shields
```

For the API:

``` bash
$ npm install shields
```

## API

``` javascript
var shielder = require('shields');
```

### `var shields = shielder(opts)`

  - `opts.style` is the style of the shield. The available styles are: flat (the
    default one), flat-square and plastic.

``` js
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


   [travis]: https://travis-ci.org/KenanY/shields
   [travis-svg]: https://img.shields.io/travis/KenanY/shields.svg
   [gemnasium]: https://gemnasium.com/KenanY/shields
   [gemnasium-svg]: https://img.shields.io/gemnasium/KenanY/shields.svg
