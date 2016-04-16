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

test('coveralls for branch', function(t) {
  t.plan(1);

  var s = shielder()('coveralls', {
    repo: 'KenanY/shields',
    branch: 'dev'
  });
  t.deepEqual(s, {
    text: 'Test coverage for dev',
    image: 'https://img.shields.io/coveralls/KenanY/shields/dev.svg?style=flat',
    link: 'https://coveralls.io/r/KenanY/shields?branch=dev'
  });
});

test('standard shield when branch shield not supported', function(t) {
  t.plan(1);

  var s = shielder()('npm', {
    npmName: 'shields',
    branch: 'dev'
  });
  t.deepEqual(s, {
    text: 'NPM version',
    image: 'https://img.shields.io/npm/v/shields.svg?style=flat',
    link: 'https://www.npmjs.com/package/shields'
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
