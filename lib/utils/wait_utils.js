var constants = require('../constants');

module.exports.wait = function() {
  this.wait(constants.TIME_TO_WAIT_FOR_REQUESTS);
};

module.exports.makeWaitForSelector = function(selector) {
  return function() {
    this.waitForSelector(selector);
  };
};
