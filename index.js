module.exports = shielder;

var util = require('util');
var shieldsList = require('./lib/shields-list');

function shielder(opts) {
  opts = opts || {};

  var ext = opts.ext || 'svg';
  var style = opts.style || 'flat';

  return shields;

  function shields(service, info) {
    if (!service) throw new TypeError('`service` is required')

    var shieldTemplate = shieldsList[service.toLowerCase()];

    if (!shieldTemplate) return undefined;

    return {
      text: shieldTemplate.text,
      link: format(shieldTemplate.link, info),
      image: getShieldImage(shieldTemplate.path, info)
    };
  }

  function getShieldImage(imagePath, info) {
    return util.format(
      'https://img.shields.io/%s.%s?style=%s',
      format(imagePath, info), ext, style
    );
  };

  function format(str, params) {
    return str.replace(/{([^{}]+)}/, function (str, match) {
      return params[match];
    });
  };
}
