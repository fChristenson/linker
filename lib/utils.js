module.exports.quotesJsonToQuote = function (json) {
  if(!json) return {};

  var contents = json.contents   ? json.contents   : {};
  var quotes   = contents.quotes ? contents.quotes : [];
  var quote    = quotes[0]       ? quotes[0]       : {};

  return {
    text: quote.quote,
    author: quote.author
  };
};
