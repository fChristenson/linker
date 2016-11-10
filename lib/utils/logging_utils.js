module.exports.makeEcho = function(text) {
  return function() {
    this.echo(text);
  };
};

module.exports.logPageTitle = function() {
  this.echo(this.getTitle());
};

module.exports.logStartTime = function() {
  this.echo('Started: ' + new Date());
  this.echo('');
};

module.exports.logEndTime = function() {
  this.echo('Ended: ' + new Date());
  this.echo('');
};

module.exports.logEndLine = function() {
  this.echo('-------------');
  this.echo('');
};