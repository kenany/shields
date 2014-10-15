var readJson = require('read-package-json');
var minimist = require('minimist');
var path = require('path');
var url = require('url');

var shields = require('../');

var argv = minimist(process.argv.slice(2));

var p = path.resolve('./package.json');

readJson(p, function(error, pkg) {
  if (error) {
    throw error;
  }

  var slug = url.parse(pkg.repository.url).path.slice(1);

  var links = [''];

  argv._.forEach(function(service) {
    var shield = shields(slug, service);
    var status = service === 'travis' ? 'Build' : 'Dependency';
    console.log('[![' + status + ' Status][' + service + '-svg]][' + service + ']');
    links.push('   [' + service + ']: ' + shield.link);
    links.push('   [' + service + '-svg]: ' + shield.svg);
  });
  console.log(links.join('\n'));
});