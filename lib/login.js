var constants = require('./constants');
var Log       = require('./utils/logging_utils');

casper.start(constants.LINKEDIN_URL);

casper.then(Log.logStartTime);

casper.then(Log.makeEcho('--- Login ---'));

casper.then(Log.logPageTitle);

require('./form_login');

casper.then(Log.logEndLine);
