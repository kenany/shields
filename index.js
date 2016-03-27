var util = require('util');

var shieldsList = require('./lib/shields-list');

function format(str, params) {
  return str.replace(/{([^{}]+)}/, function(str, match) {
    return params[match];
  });
}

function shielder(opts) {
  opts = opts || {};

  var ext = opts.ext || 'svg';
  var style = opts.style || 'flat';

  function getShieldImage(imagePath, info) {
    return util.format(
      'https://img.shields.io/%s.%s?style=%s',
      format(imagePath, info), ext, style
    );
  }

  function shields(service, info) {
    if (!service) {
      throw new TypeError('`service` is required');
    }

    var shieldTemplate = shieldsList[service.toLowerCase()];

    if (!shieldTemplate) {
      return undefined;
    }

    return {
      text: shieldTemplate.text,
      link: format(shieldTemplate.link, info),
      image: getShieldImage(shieldTemplate.path, info)
    };
  }

  return shields;
}

module.exports = shielder;
