var util = require('util');
var objectAssign = require('object-assign');

var shieldsList = require('./lib/shields-list');

function format(str, params) {
  return str.replace(/{([^{}]+)}/g, function(str, match) {
    return params[match];
  });
}

function shielder(opts) {
  opts = opts || {};

  var ext = opts.ext || 'svg';
  var style = opts.style || 'flat';

  function getShieldImage(imagePath, info) {
    var branchSuffix = info.branch && ('/' + info.branch) || '';
    return util.format(
      'https://img.shields.io/%s%s.%s?style=%s',
      format(imagePath, info), branchSuffix, ext, style
    );
  }

  function shields(service, info) {
    info = objectAssign({}, info)

    if (!service) {
      throw new TypeError('`service` is required');
    }

    var shieldTemplate = shieldsList[service.toLowerCase()];

    if (!shieldTemplate) {
      return undefined;
    }

    if (!shieldTemplate.hasBranchVersion) {
      delete info.branch;
    }

    var linkTemplate = info.branch && shieldTemplate.branchLink || shieldTemplate.link;

    return {
      text: shieldTemplate.text + (info.branch ? ' for ' + info.branch : ''),
      link: format(linkTemplate, info),
      image: getShieldImage(shieldTemplate.path, info)
    };
  }

  return shields;
}

module.exports = shielder;
