var system    = require('system');
var Log       = require('../lib/utils/logging_utils');
var Quote     = require('../lib/utils/quote_utils');
var Wait      = require('../lib/utils/wait_utils');
var constants = require('../lib/constants');
var client    = require('../lib/client');

var casper = require('casper').create({
  pageSettings: {
    loadImages:  false,
    loadPlugins: false
  }
});

var env        = system.env;
var CATEGORY   = env.LINKEDIN_QUOTE_CATEGORY || 'funny';
var QUOTE_TEXT = '';

casper.start(Quote.categoryToDailyQuoteUrl(CATEGORY));

casper.then(Log.logStartTime);

casper.then(Log.makeEcho('--- Quote ---'));

casper.then(function() {
  var json   = JSON.parse(this.getPageContent());
  var quote  = Quote.quotesJsonToQuote(json);
  QUOTE_TEXT = Quote.quoteToQuoteString(quote);
  this.echo(Quote.quoteToQuoteString(quote));
});

casper.then(Log.logEndLine);

casper.thenOpen(constants.LINKEDIN_URL);

casper.then(Log.makeEcho('--- Login ---'));

casper.then(Log.logPageTitle);

require('../lib/form_login');

casper.then(Log.logEndLine);

casper.then(Log.makeEcho('--- Post quote ---'));

casper.then(Log.logPageTitle);

casper.then(function() {
  if (QUOTE_TEXT && QUOTE_TEXT.length > 0) {
    this.evaluate(client.postUpdate, QUOTE_TEXT);
    this.echo('Quote posted!');
  }
  else {
    this.echo('QUOTE_TEXT was empty, skipping quote!');
  }
});

casper.then(Log.logEndLine);

casper.then(Wait.wait);

casper.then(Log.logEndTime);

casper.run();
