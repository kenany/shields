#!/usr/bin/env node

var readJson = require('read-package-json');
var minimist = require('minimist');
var path = require('path');
var url = require('url');

var shields = require('../')();

var argv = minimist(process.argv.slice(2), {
  alias: {
    v: 'version'
  }
});

if (argv.version) {
  console.log(require('../package.json').version);
  return;
}

// no args
if (!argv._.length) {
  var usage = [
    'Shield generator for your current project.',
    '',
    'Usage:',
    '  shields [travis] [gemnasium]',
    '  shields -v | --version',
    '',
    'Options:',
    '  -v --version  Show version'
  ];

  console.log(usage.join('\n'));

  return;
}

var p = path.resolve('./package.json');

readJson(p, function(error, pkg) {
  if (error) {
    throw error;
  }

  var slug = url.parse(pkg.repository.url).path.slice(1);

  var links = [''];

  argv._.forEach(function(service) {
    var shield = shields(service, {
      repo: slug,
      npmName: pkg.name,
    });

    console.log('[![' + shield.text + '][' + service + '-svg]][' + service + ']');
    links.push('   [' + service + ']: ' + shield.link);
    links.push('   [' + service + '-svg]: ' + shield.image);
  });
  console.log(links.join('\n'));
});
