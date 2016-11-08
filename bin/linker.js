var client = require('../lib/client')

casper.thenOpen('https://www.linkedin.com/people/pymk/hub?ref=global-nav&trk=nav_utilities_add_connx', function() {
  this.echo('--- Contacts ---');
  this.echo(this.getTitle());
});

casper.then(function() {
  this.waitForSelector('.card-container');
});

casper.then(function() {
  CONNECT_BUTTONS = this.evaluate(client.clickConnectButtons)
});

casper.then(function() {
  this.echo('Clicked ' + CONNECT_BUTTONS.length + ' connects!');
});

casper.then(function() {
  for(var i = 0; i < CONTACTS_SCROLL_TIMES; i++) {
    this.wait(SCROLL_WAIT_TIME, function() {
      this.scrollToBottom();
    });
  }
});

casper.then(function() {
  CONTACT_BUTTONS = this.evaluate(client.clickContactButtons)
});

casper.then(function() {
  this.echo('Clicked ' + CONTACT_BUTTONS.length + ' contacts!');
});

casper.then(function() {
  this.wait(TIME_TO_WAIT_FOR_REQUESTS);
});

casper.then(function() {
  this.echo('----------------');
  this.echo(new Date());
});
