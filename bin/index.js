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
var TIME_TO_WAIT_FOR_REQUESTS = env.LINKEDIN_TIME_TO_WAIT_FOR_REQUESTS || 5000;
var LIKES_SCROLL_TIMES        = env.LINKEDIN_LIKES_SCROLL_BUFFER       || 0;
var CHANCE_TO_LIKE            = env.LINKEDIN_CHANCE_TO_LIKE            || 5;
var SCROLL_WAIT_TIME          = env.LINKEDIN_TIME_TO_WAIT_PER_SCROLL   || 500;
var CONTACTS_SCROLL_TIMES     = env.LINKEDIN_CONTACTS_SCROLL_TIMES     || 50;
var LIKE_BUTTONS              = [];
var CONTACT_BUTTONS           = [];
var CONNECT_BUTTONS           = [];

// modules
require('./login');
require('./liker');
require('./linker');

casper.run();
