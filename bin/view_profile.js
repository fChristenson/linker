var casper = require('casper').create({
  pageSettings: {
    loadImages:  false,
    loadPlugins: false
  }
});

var client = require('../lib/client');
var Log    = require('../lib/utils/logging_utils');

require('../lib/login');

var RANDOM_PROFILE_CLICKED = false;

casper.then(Log.makeEcho('--- Open profile ---'));

casper.then(Log.logPageTitle);

casper.then(function() {
  RANDOM_PROFILE_CLICKED = this.evaluate(client.clickRandomProfileLink);

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

casper.then(Log.logEndLine);

casper.then(Log.logEndTime);

casper.run();
