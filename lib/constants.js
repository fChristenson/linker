var system = require('system');
var env    = system.env;

module.exports.TIME_TO_WAIT_FOR_REQUESTS = env.LINKEDIN_TIME_TO_WAIT_FOR_REQUESTS || 5000;
module.exports.SCROLL_WAIT_TIME          = env.LINKEDIN_TIME_TO_WAIT_PER_SCROLL   || 500;
module.exports.LINKEDIN_URL              = 'https://www.linkedin.com/';
