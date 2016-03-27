'use strict';

module.exports = {
  npm: {
    text: 'NPM version',
    path: 'npm/v/{npmName}',
    link: 'https://npmjs.org/package/{npmName}'
  },
  travis: {
    text: 'Build status',
    path: 'travis/{repo}',
    link: 'https://travis-ci.org/{repo}'
  },
  coveralls: {
    text: 'Test coverage',
    path: 'coveralls/{repo}',
    link: 'https://coveralls.io/r/{repo}?branch=master'
  },
  climate: {
    text: 'Code climate',
    path: 'codeclimate/github/{repo}',
    link: 'https://codeclimate.com/github/{repo}'
  },
  deps: {
    text: 'Dependency status',
    path: 'david/{repo}',
    link: 'https://david-dm.org/{repo}'
  },
  devdeps: {
    text: 'devDependency status',
    path: 'david/dev/{repo}',
    link: 'https://david-dm.org/{repo}#info=devDependencies'
  },
  peerdeps: {
    text: 'peerDependency status',
    path: 'david/peer/{repo}',
    link: 'https://david-dm.org/{repo}#info=peerDependencies'
  },
  gemnasium: {
    text: 'Gemnasium',
    path: 'gemnasium/{repo}',
    link: 'https://gemnasium.com/{repo}'
  }
};
