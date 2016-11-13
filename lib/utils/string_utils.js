module.exports.appendDate = function(str) {
  var iosString = new Date().toISOString();
  var dateString = iosString.split('T')[0];

  if(!str || typeof str !== 'string') return dateString;

  return str + dateString;
};
