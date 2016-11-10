var Log         = require('../lib/utils/logging_utils');

var casper = require('casper').create({
  pageSettings: {
    loadImages:  false,
    loadPlugins: false
  }
});

var IMG = '.bqPhotoDefault';

casper.start('http://www.brainyquote.com/quotes_of_the_day.html');

casper.then(Log.logStartTime);

casper.then(function() {
  this.echo('--- Quote Image ---');
});

casper.then(Log.logEndLine);

require('../lib/then_login');

casper.then(function() {
  this.echo('--- Post quote ---');
});

casper.then(Log.logEndLine);

casper.then(Log.logEndTime);

casper.run();
