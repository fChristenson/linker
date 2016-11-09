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

module.exports.quoteToQuoteString = function (quote) {
  if(!quote) return '';

  var text   = quote.text   ? quote.text   : '';
  var author = quote.author ? quote.author : '';

  if(!text || !author) return '';

  return text.trim() + '\n- ' + author.trim();
};

module.exports.categoriesToDailyQuoteUrl = function(array) {
  if(!array || !Array.isArray(array)) return '';

  var index = Math.floor(Math.random() * array.length);
  return 'http://quotes.rest/qod.json?category=' + array[index];
};
