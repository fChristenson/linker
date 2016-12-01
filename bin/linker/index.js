var casper = require('casper').create({
  pageSettings: {
    loadImages:  false,
    loadPlugins: false
  }
});

// modules
require('../../lib/login');
require('./liker');
require('./linker');

casper.run();
