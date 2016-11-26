var Log       = require('../lib/utils/logging_utils');
var Wait      = require('../lib/utils/wait_utils');
var constants = require('../lib/constants');
var client    = require('../lib/client');
var Str       = require('../lib/utils/string_utils');

var casper = require('casper').create({
  pageSettings: {
    loadImages:  true,
    loadPlugins: true
  }
});

var DILBERT_URL = Str.appendDate('http://dilbert.com/strip/');

casper.start(constants.LINKEDIN_URL);

casper.then(Log.logStartTime);

casper.then(Log.makeEcho('--- Login ---'));

casper.then(Log.logPageTitle);

require('../lib/form_login');

casper.then(Log.logEndLine);

casper.then(Log.makeEcho('--- Post Dilbert comic ---'));

casper.then(Log.logPageTitle);

casper.then(function() {
  this.evaluate(client.click, 'button.share');
});

casper.then(function() {
  this.echo('Posting link: ' + DILBERT_URL);
  this.evaluate(client.postUpdate, DILBERT_URL);
});

casper.then(Wait.wait);

casper.then(function() {
  this.evaluate(client.click, 'button.postmodule-submit');
  this.echo('Dilbert comic posted!');
});

casper.then(Log.logEndLine);

casper.then(Wait.wait);

casper.then(Log.logEndTime);

casper.run();
