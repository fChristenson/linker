var constants = require('./constants');
var Log       = require('./utils/logging_utils');

casper.thenOpen(constants.LINKEDIN_URL);

casper.then(Log.makeEcho('--- Login ---'));

casper.then(Log.logPageTitle);

require('../lib/form_login');

casper.then(Log.logEndLine);
