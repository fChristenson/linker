var casper = require('casper').create({
    pageSettings: {
        loadImages:  false,
        loadPlugins: false
    }
});

// globals
var TIME_TO_WAIT_FOR_REQUESTS_TO_FINISH = 5000;
var LIKES_SCROLL_TIMES                  = 0;
var WAIT_TIME                           = 500;
var likeButtons                         = [];
var CONTACTS_SCROLL_TIMES               = 50;
var contactButtons                      = [];
var connectButtons                      = [];

// modules
require('./login');
require('./liker');
require('./linker')

casper.run();
