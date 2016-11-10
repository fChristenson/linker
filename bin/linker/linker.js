var system                = require('system');
var client                = require('../../lib/client');
var constants             = require('../../lib/constants');
var Log                   = require('../../lib/utils/logging_utils');
var Wait                  = require('../../lib/utils/wait_utils');
var Scroll                = require('../../lib/utils/scroll_utils');

var env                   = system.env;
var CONTACTS_SCROLL_TIMES = env.LINKEDIN_CONTACTS_SCROLL_TIMES || 50;
var CONTACT_BUTTONS       = [];
var CONNECT_BUTTONS       = [];

casper.thenOpen('https://www.linkedin.com/people/pymk/hub?ref=global-nav&trk=nav_utilities_add_connx');

casper.then(Log.makeEcho('--- Contacts ---'));

casper.then(Log.logPageTitle);

casper.then(Wait.makeWaitForSelector('.card-container'));

casper.then(function() {
  CONNECT_BUTTONS = this.evaluate(client.clickConnectButtons);
});

casper.then(function() {
  this.echo('Clicked ' + CONNECT_BUTTONS.length + ' connects!');
});

casper.then(Scroll.makeScrollToBottom(CONTACTS_SCROLL_TIMES, constants.SCROLL_WAIT_TIME));

casper.then(function() {
  CONTACT_BUTTONS = this.evaluate(client.clickContactButtons);
});

casper.then(function() {
  this.echo('Clicked ' + CONTACT_BUTTONS.length + ' contacts!');
});

casper.then(Wait.wait);

casper.then(Log.logEndLine);

casper.then(Log.logEndTime);
