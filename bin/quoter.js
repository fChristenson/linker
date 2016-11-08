var U = require('../lib/utils');

var casper = require('casper').create({
    pageSettings: {
        loadImages:  false,
        loadPlugins: false
    }
});

casper.start('http://quotes.rest/qod.json?category=inspire');

casper.then(function() {
  var quote = U.quotesJsonToQuote(JSON.parse(this.getPageContent()));
  this.echo(quote.text);
  this.echo(quote.author);
});

casper.run();
