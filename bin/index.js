var system = require('system');
var env    = system.env;
var casper = require('casper').create({
    pageSettings: {
        loadImages:  false,
        loadPlugins: false
    }
});

// modules
require('./login');
require('./liker');
require('./linker');

casper.run();
