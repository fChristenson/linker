var constants = require('../../lib/constants');
var Log       = require('../../lib/utils/logging_utils');

casper.start(constants.LINKEDIN_URL);

casper.then(Log.logStartTime);

casper.then(Log.makeEcho('--- Login ---'));

casper.then(Log.logPageTitle);

require('../../lib/form_login');

casper.then(Log.logEndLine);
