var system             = require('system');
var client             = require('../../lib/client');
var constants          = require('../../lib/constants');
var Log                = require('../../lib/utils/logging_utils');
var Scroll             = require('../../lib/utils/scroll_utils');
var Wait               = require('../../lib/utils/wait_utils');

var env                = system.env;
var LIKES_SCROLL_TIMES = env.LINKEDIN_LIKES_SCROLL_BUFFER || 0;
var CHANCE_TO_LIKE     = env.LINKEDIN_CHANCE_TO_LIKE      || 5;
var LIKE_BUTTONS       = [];

casper.then(Log.makeEcho('--- Likes ---'));

casper.then(Log.logPageTitle);

casper.then(Scroll.makeScrollToBottom(LIKES_SCROLL_TIMES, constants.SCROLL_WAIT_TIME));

casper.then(function() {
  LIKE_BUTTONS = this.evaluate(client.clickLikeButtons, CHANCE_TO_LIKE);
});

casper.then(function() {
  this.echo('Clicked ' + LIKE_BUTTONS.length + ' likes!');
});

casper.then(Wait.wait);

casper.then(Log.logEndLine);
