var client = require('../lib/client')

casper.then(function() {
  this.echo('--- Likes ---');
  this.echo(this.getTitle());
});

casper.then(function() {
  for(var i = 0; i < LIKES_SCROLL_TIMES; i++) {
    this.wait(SCROLL_WAIT_TIME, function() {
      this.scrollToBottom();
    });
  }
});

casper.then(function() {
  LIKE_BUTTONS = this.evaluate(client.clickLikeButtons)
});

casper.then(function() {
  this.echo('Clicked ' + LIKE_BUTTONS.length + ' likes!');
});

casper.then(function() {
  this.wait(TIME_TO_WAIT_FOR_REQUESTS);
});

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});
