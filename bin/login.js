var constants = require('../lib/constants')

casper.start(constants.LINKEDIN_URL, function() {
  this.echo('--- Login ---');
  this.echo(this.getTitle());
});

require('../lib/form_login');

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});
