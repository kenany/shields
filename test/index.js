var shielder = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(shielder));
});

test('travis', function(t) {
  t.plan(1);

  var s = shielder()('travis', {
    repo: 'KenanY/shields'
  });
  t.deepEqual(s, {
    text: 'Build status',
    image: 'https://img.shields.io/travis/KenanY/shields.svg?style=flat',
    link: 'https://travis-ci.org/KenanY/shields'
  });
});

test('flat square styled travis', function(t) {
  t.plan(1);

  var shields = shielder({
    style: 'flat-square'
  });
  var s = shields('travis', {
    repo: 'KenanY/shields'
  });
  t.deepEqual(s, {
    text: 'Build status',
    image: 'https://img.shields.io/travis/KenanY/shields.svg?style=flat-square',
    link: 'https://travis-ci.org/KenanY/shields'
  });
});

test('gemnasium', function(t) {
  t.plan(1);

  var s = shielder()('gemnasium', {
    repo: 'KenanY/shields'
  });
  t.deepEqual(s, {
    text: 'Gemnasium',
    image: 'https://img.shields.io/gemnasium/KenanY/shields.svg?style=flat',
    link: 'https://gemnasium.com/KenanY/shields'
  });
});
