function shields(slug, service) {
  var ret = {
    svg: 'https://img.shields.io/' + service + '/' + slug + '.svg',
    link: ''
  };

  switch (service) {
    case 'travis':
      ret.link = 'https://travis-ci.org/' + slug;
      break;
    case 'gemnasium':
      ret.link = 'https://gemnasium.com/' + slug;
      break;
  }

  return ret;
}

module.exports = shields;