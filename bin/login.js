var client = require('../lib/client');

casper.start('https://www.linkedin.com/', function() {
  this.echo('--- Login ---');
  this.echo(this.getTitle());
});

casper.then(function() {
  this.waitForSelector('#login-email');
});

casper.then(function() {
  this.evaluate(client.enterCredentials, EMAIL, PASSWORD);
});

casper.then(function() {
  this.evaluate(client.submitForm);
});

casper.then(function() {
  this.waitForSelector('.feed');
});

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});
