var getYesterdaysISODateString = function() {
  var today = new Date();
  var yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  var iosString = yesterday.toISOString();
  var dateString = iosString.split('T')[0];
  return dateString;
};

module.exports.getYesterdaysISODateString = getYesterdaysISODateString;

module.exports.appendDate = function(str) {
  var dateString = getYesterdaysISODateString();

  if(!str || typeof str !== 'string') return dateString;

  return str + dateString;
};

// http://www.commitstrip.com/en/2016/11/23/if-coders-were-footballers-2/
module.exports.commitStripUrlToDate = function(url) {
  var regex   = /(20[0-9]{2}\/[0-9]{2}\/[0-9]{2})/; // matches 20##/##/##
  var matches = url.match(regex);
  var firstMatch = matches ? matches[0] : '';
  var dateStr = firstMatch.trim().split('/').join('-');
  return dateStr;
};
