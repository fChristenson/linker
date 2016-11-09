var system             = require('system');
var client             = require('../lib/client');
var constants          = require('../lib/constants');

var env                = system.env;
var LIKES_SCROLL_TIMES = env.LINKEDIN_LIKES_SCROLL_BUFFER || 0;
var CHANCE_TO_LIKE     = env.LINKEDIN_CHANCE_TO_LIKE      || 5;
var LIKE_BUTTONS       = [];

casper.then(function() {
  this.echo('--- Likes ---');
  this.echo(this.getTitle());
});

casper.then(function() {
  for(var i = 0; i < LIKES_SCROLL_TIMES; i++) {
    this.wait(constants.SCROLL_WAIT_TIME, function() {
      this.scrollToBottom();
    });
  }
});

casper.then(function() {
  LIKE_BUTTONS = this.evaluate(client.clickLikeButtons, CHANCE_TO_LIKE)
});

casper.then(function() {
  this.echo('Clicked ' + LIKE_BUTTONS.length + ' likes!');
});

casper.then(function() {
  this.wait(constants.TIME_TO_WAIT_FOR_REQUESTS);
});

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});
