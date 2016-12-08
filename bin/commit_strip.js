var Log       = require('../lib/utils/logging_utils');
var Wait      = require('../lib/utils/wait_utils');
var Str       = require('../lib/utils/string_utils');
var constants = require('../lib/constants');
var client    = require('../lib/client');

var casper = require('casper').create({
  pageSettings: {
    loadImages:  true,
    loadPlugins: true
  }
});

var URL = 'http://www.commitstrip.com/en/';
var COMIC_URL = '';

casper.start(URL);

casper.then(Log.logStartTime);

casper.then(Log.makeEcho('--- Getting Comic URL ---'));

casper.then(Log.logPageTitle);
 
casper.then(function() {
  var links = this.evaluate(client.findAllCommitStripLinks);
  var yesterday = Str.getYesterdaysISODateString();

  for (var i = 0; i < links.length; i++) {
    var dateStr = Str.commitStripUrlToDate(links[i]);

    if(dateStr && dateStr === yesterday) {
      COMIC_URL = links[i];
    }

  }

  if(COMIC_URL) {
    this.echo('Match found: ' + COMIC_URL);
  }
  else {
    this.echo('No matching comic found!'); 
  }

});

casper.then(Log.logEndLine);

casper.thenOpen(constants.LINKEDIN_URL);

casper.then(Log.makeEcho('--- Login ---'));

casper.then(Log.logPageTitle);

require('../lib/form_login');

casper.then(Log.logEndLine);

casper.then(Log.makeEcho('--- Post Commit strip comic ---'));

casper.then(Log.logPageTitle);

casper.then(function() {
  this.evaluate(client.click, 'button.share');
});

casper.then(function() {
  if(COMIC_URL) {
    this.echo('Posting link: ' + COMIC_URL);
    this.evaluate(client.typeUpdate, COMIC_URL);
  }
  else {
    this.echo('COMIC_URL not found, skipping post!');
  }
});

casper.then(Wait.wait);

casper.then(function() {
  if(COMIC_URL) {
    this.evaluate(client.click, 'button.postmodule-submit');
    this.echo('Commit strip comic posted!');
  }
  else {
    this.echo('COMIC_URL not found, skipping submit!');
  }
});

casper.then(Log.logEndLine);

casper.then(Wait.wait);

casper.then(Log.logEndTime);

casper.run();
