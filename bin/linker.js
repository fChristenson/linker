var client = require('../lib/client')
casper.thenOpen('https://www.linkedin.com/people/pymk/hub?ref=global-nav&trk=nav_utilities_add_connx', function() {
  this.echo('--- Contacts ---');
  this.echo(this.getTitle());
});

casper.then(function() {
  this.waitForSelector('.card-container');
});

casper.then(function() {
  connectButtons = this.evaluate(client.clickConnectButtons)
});

casper.then(function() {
  this.echo('Clicked ' + connectButtons.length + ' connects!');
});

casper.then(function() {
  for(var i = 0; i < CONTACTS_SCROLL_TIMES; i++) {
    this.wait(WAIT_TIME, function() {
      this.scrollToBottom();
    });
  }
});

casper.then(function() {
  contactButtons = this.evaluate(client.clickContactButtons)
});

casper.then(function() {
  this.echo('Clicked ' + contactButtons.length + ' contacts!');
});

casper.then(function() {
  this.wait(TIME_TO_WAIT_FOR_REQUESTS_TO_FINISH);
});

casper.then(function() {
  this.echo('----------------');
  this.echo(new Date());
});
