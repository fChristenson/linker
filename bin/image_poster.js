var Log    = require('../lib/utils/logging_utils');
var client = require('../lib/client');

var casper = require('casper').create({
  pageSettings: {
    loadImages:  true,
    loadPlugins: false
  }
});

var IMG_FILE_NAME = 'quote_img.png';
var IMG_URL       = '';

casper.start('http://www.brainyquote.com/quotes_of_the_day.html');

casper.then(Log.logStartTime);

casper.then(Log.makeEcho('--- Quote Image ---'));

casper.then(function() {
  IMG_URL = this.evaluate(client.findQuoteImage);
  if(IMG_URL) {
    this.download(IMG_URL, IMG_FILE_NAME);
  }
});

casper.run();
