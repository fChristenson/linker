var client = require('../lib/client')

casper.then(function() {
  this.echo('--- Likes ---');
  this.echo(this.getTitle());
});

casper.then(function() {
  for(var i = 0; i < LIKES_SCROLL_TIMES; i++) {
    this.wait(WAIT_TIME, function() {
      this.scrollToBottom();
    });
  }
});

casper.then(function() {
  likeButtons = this.evaluate(client.clickLikeButtons)
});

casper.then(function() {
  this.echo('Clicked ' + likeButtons.length + ' likes!');
});

casper.then(function() {
  this.wait(TIME_TO_WAIT_FOR_REQUESTS_TO_FINISH);
});

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});
