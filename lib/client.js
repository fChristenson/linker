module.exports.enterCredentials = function (email, password) {
  var emailField      = document.querySelector("#login-email");
  var passwordField   = document.querySelector("#login-password");
  emailField.value    = email;
  passwordField.value = password;
};

module.exports.submitForm = function () {
  var form = document.querySelector(".login-form");
  form.submit();
};

module.exports.clickConnectButtons = function() {
  var buttons = __utils__.findAll('.bt-invite-accept');
  return buttons
  .map(function(btn) {
    btn.click();
    return btn.innerHTML;
  })
};

module.exports.clickContactButtons = function() {
  var buttons = __utils__.findAll('.bt-request-buffed');
  return buttons
  .map(function(btn) {
    btn.click();
    return btn.innerHTML;
  })
};

module.exports.clickLikeButtons = function(chanceToLike) {
  var buttons = __utils__.findAll('button.like');
  return buttons
  .filter(function(button) {
    return button.getAttribute('data-liked') !== 'true'
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

module.exports.postUpdate = function(text) {
  var form = document.querySelector('#postmodule-container');
  var textArea = document.querySelector('#postmodule-text');

  textArea.value = text;
  form.submit();
};
