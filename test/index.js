var shields = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(shields));
});

test('travis', function(t) {
  t.plan(1);

  var s = shields('KenanY/shields', 'travis');
  t.deepEqual(s, {
    svg: 'https://img.shields.io/travis/KenanY/shields.svg',
    link: 'https://travis-ci.org/KenanY/shields'
  });
});

test('gemnasium', function(t) {
  t.plan(1);

  var s = shields('KenanY/shields', 'gemnasium');
  t.deepEqual(s, {
    svg: 'https://img.shields.io/gemnasium/KenanY/shields.svg',
    link: 'https://gemnasium.com/KenanY/shields'
  });
});