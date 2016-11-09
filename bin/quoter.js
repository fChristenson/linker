var U         = require('../lib/utils');
var client    = require('../lib/client');
var constants = require('../lib/constants');

var casper = require('casper').create({
    pageSettings: {
        loadImages:  false,
        loadPlugins: false
    }
});

var CATEGORIES = ['inspire', 'funny'];
var QUOTE_TEXT = '';

casper.start(U.categoriesToDailyQuoteUrl(CATEGORIES));

casper.then(function() {
  this.echo('--- Quote ---');
});

casper.then(function() {
  var json   = JSON.parse(this.getPageContent());
  var quote  = U.quotesJsonToQuote(json);
  QUOTE_TEXT = U.quoteToQuoteString(quote);

  this.echo(U.quoteToQuoteString(quote));
});

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});

casper.thenOpen(constants.LINKEDIN_URL, function() {
  this.echo('--- Login ---');
  this.echo(this.getTitle());
});

require('../lib/form_login');

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});

casper.then(function() {
  this.echo('--- Post quote ---');
  this.echo(QUOTE_TEXT);
});

casper.then(function() {
  if (QUOTE_TEXT && QUOTE_TEXT.length > 0) {
    this.evaluate(client.postUpdate, QUOTE_TEXT);
  }
});

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});

casper.then(function() {
  this.wait(constants.TIME_TO_WAIT_FOR_REQUESTS);
});

casper.then(function() {
  this.echo(new Date());
});

casper.run();
