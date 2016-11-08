var system = require('system');
var env    = system.env;
var casper = require('casper').create({
    pageSettings: {
        loadImages:  false,
        loadPlugins: false
    }
});

// globals
var EMAIL                     = env.LINKEDIN_USERNAME;
var PASSWORD                  = env.LINKEDIN_PASSWORD;
var TIME_TO_WAIT_FOR_REQUESTS = env.LINKEDIND_TIME_TO_WAIT_FOR_REQUESTS || 5000;
var LIKES_SCROLL_TIMES        = env.LINKEDIND_LIKES_SCROLL_BUFFER       || 0;
var SCROLL_WAIT_TIME          = env.LINKEDIND_TIME_TO_WAIT_PER_SCROLL   || 500;
var CONTACTS_SCROLL_TIMES     = env.LINKEDIND_CONTACTS_SCROLL_TIMES     || 50;
var LIKE_BUTTONS              = [];
var CONTACT_BUTTONS           = [];
var CONNECT_BUTTONS           = [];

// modules
require('./login');
require('./liker');
require('./linker');

casper.run();
