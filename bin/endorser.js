var casper = require('casper').create({
  pageSettings: {
    loadImages:  false,
    loadPlugins: false
  }
});

var system = require('system');
var client = require('../lib/client');
var Log = require('../lib/utils/logging_utils');
var constants = require('../lib/constants');
var Scroll = require('../lib/utils/scroll_utils');

require('../lib/login');

var env = system.env;
var RANDOM_PROFILE_CLICKED = false;
var ENDORSE_SCROLL_TIMES = env.LINKEDIN_ENDORSER_SCROLL_BUFFER || 5;

casper.thenOpen('https://www.linkedin.com/connected/#?filter=recent&');

casper.then(Log.makeEcho('--- Open profile ---'));

casper.then(Log.logPageTitle);

casper.then(Scroll.makeScrollToBottom(ENDORSE_SCROLL_TIMES, constants.SCROLL_WAIT_TIME));

casper.then(function() {
  RANDOM_PROFILE_CLICKED = this.evaluate(client.clickRandomConnectionLink);

  if(RANDOM_PROFILE_CLICKED) {
    this.echo('Random profile link clicked!');
  }
  else {
    this.echo('Failed to find profile link to click!');
  }
});

casper.then(Log.logEndLine);

casper.then(function() {
  if(RANDOM_PROFILE_CLICKED) {
    this.waitForSelector('.profile-picture');
  }
});

casper.then(Log.makeEcho('--- Profile ---'));

casper.then(Log.logPageTitle);

casper.then(function() {
  this.evaluate(client.clickOneOfFirst10EndorseButtons);
  this.echo('Made random top 10 skills endorse!');
});

casper.then(Log.logEndLine);

casper.then(Log.logEndTime);

casper.run();
