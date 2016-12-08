module.exports.enterCredentials = function (email, password) {
  var emailField      = document.querySelector('#login-email');
  var passwordField   = document.querySelector('#login-password');
  emailField.value    = email;
  passwordField.value = password;
};

module.exports.submitForm = function () {
  var form = document.querySelector('.login-form');
  form.submit();
};

module.exports.clickOneOfFirst10EndorseButtons = function() {
  var links = __utils__.findAll('.endorse-button');
  var first10 = links.slice(0, 10);
  var index = Math.floor(Math.random() * first10.length);
  first10[index].click();
  return true;
};

module.exports.clickRandomConnectionLink = function() {
  var links = __utils__.findAll('.image');
  var index = Math.floor(Math.random() * links.length);
  links[index].click();
  return true;
};

module.exports.clickRandomProfileLink = function() {
  var links = __utils__.findAll('.image.member');
  var index = Math.floor(Math.random() * links.length);
  links[index].click();
  return true;
};

module.exports.clickConnectButtons = function() {
  var buttons = __utils__.findAll('.bt-invite-accept');
  return buttons
  .map(function(btn) {
    btn.click();
    return btn.innerHTML;
  });
};

module.exports.clickContactButtons = function() {
  var buttons = __utils__.findAll('.bt-request-buffed');
  return buttons
  .map(function(btn) {
    btn.click();
    return btn.innerHTML;
  });
};

module.exports.clickLikeButtons = function(chanceToLike) {
  var buttons = __utils__.findAll('button.like');
  return buttons
  .filter(function(button) {
    return button.getAttribute('data-liked') !== 'true';
  })
  .map(function(btn) {
    if (Math.floor(Math.random() * 100) <= chanceToLike) {
      btn.click();
      return btn.innerHTML;
    }
  })
  .filter(function(val) {
    return !!val;
  });
};

module.exports.click = function(selector) {
  var btn = document.querySelector(selector);
  return btn.click();
};

module.exports.postUpdate = function(text) {
  var form = document.querySelector('#postmodule-container');
  var textArea = document.querySelector('#postmodule-text');

  textArea.value = text;
  form.submit();
};

module.exports.typeUpdate = function(text) {
  var textArea = document.querySelector('#postmodule-text');
  textArea.value = text;

  var e = document.createEvent('HTMLEvents');
  e.initEvent('keyup', false, true);

  textArea.dispatchEvent(e);
};

module.exports.findQuoteImage = function() {
  return document.querySelector('.bqPhotoDefault').src;
};

module.exports.findAllCommitStripLinks = function() {
  return __utils__.findAll('.excerpt a')
  .map(function(a) {
    return a.href;
  });
};
