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
var shields = require('shields');

shields('KenanY/shields', 'travis');
// => {
// =>   svg: 'https://img.shields.io/travis/KenanY/shields.svg',
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
var shields = require('shields');
```

### `shields(slug, service)`

Given a _String_ GitHub `slug`, returns an _Object_ `obj` which has two keys:

  - `obj.svg` is a _String_ link to the SVG of the shield for _String_ `service`
  - `obj.link` is a _String_ link to the project page of `slug` on the website
    of `service`


   [travis]: https://travis-ci.org/KenanY/shields
   [travis-svg]: https://img.shields.io/travis/KenanY/shields.svg
   [gemnasium]: https://gemnasium.com/KenanY/shields
   [gemnasium-svg]: https://img.shields.io/gemnasium/KenanY/shields.svg