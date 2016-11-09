var client   = require('./client');
var system   = require('system');

var env      = system.env;
var EMAIL    = env.LINKEDIN_USERNAME;
var PASSWORD = env.LINKEDIN_PASSWORD;

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
