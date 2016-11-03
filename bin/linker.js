var casper = require('casper').create({
    pageSettings: {
        loadImages:  false,
        loadPlugins: false
    }
});

var SCROLL_TIMES = 50;
var WAIT_TIME = 500;
var likeButtons = [];
var contactButtons = [];
var connectButtons = [];

casper.start('https://www.linkedin.com/', function() {
  this.echo('--- Login ---');
  this.echo(this.getTitle());
});

casper.then(function() {
  this.waitForSelector('#login-email');
});

casper.then(function() {
  this.evaluate(enterCredentials);
});

casper.then(function() {
  this.evaluate(submitForm);
});

casper.then(function() {
  this.waitForSelector('.feed');
});

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});

casper.then(function() {
  this.echo('--- Likes ---');
  this.echo(this.getTitle());
});

casper.then(function() {
  for(var i = 0; i < SCROLL_TIMES; i++) {
    this.wait(WAIT_TIME, function() {
      this.scrollToBottom();
    });
  }
});

casper.then(function() {
  likeButtons = this.evaluate(function() {
    var buttons = __utils__.findAll('button.like');
    return buttons
    .filter(function(button) {
      return button.getAttribute('data-liked') !== 'true'
    })
    .map(function(btn) {
      btn.click();
      return btn.innerHTML;
    })
  })
});

casper.then(function() {
  this.echo('Clicked ' + likeButtons.length + ' likes!');
});

casper.then(function() {
  this.wait(5000);
});

casper.then(function() {
  this.echo('-------------');
  this.echo('');
});

casper.thenOpen('https://www.linkedin.com/people/pymk/hub?ref=global-nav&trk=nav_utilities_add_connx', function() {
  this.echo('--- Contacts ---');
  this.echo(this.getTitle());
});

casper.then(function() {
  this.waitForSelector('.card-container');
});

casper.then(function() {
  connectButtons = this.evaluate(function() {
    var buttons = __utils__.findAll('.bt-invite-accept');
    return buttons
    .map(function(btn) {
      btn.click();
      return btn.innerHTML;
    })
  })
});

casper.then(function() {
  this.echo('Clicked ' + connectButtons.length + ' connects!');
});

casper.then(function() {
  for(var i = 0; i < SCROLL_TIMES; i++) {
    this.wait(WAIT_TIME, function() {
      this.scrollToBottom();
    });
  }
});

casper.then(function() {
  contactButtons = this.evaluate(function() {
    var buttons = __utils__.findAll('.bt-request-buffed');
    return buttons
    .map(function(btn) {
      btn.click();
      return btn.innerHTML;
    })
  })
});

casper.then(function() {
  this.echo('Clicked ' + contactButtons.length + ' contacts!');
});

casper.then(function() {
  this.wait(5000);
});

casper.then(function() {
  this.echo('----------------');
  this.echo(new Date());
});

casper.run();

function enterCredentials() {
  var emailField      = document.querySelector("#login-email");
  var passwordField   = document.querySelector("#login-password");
  emailField.value    = 'fredrik.christenson@gmail.com';
  passwordField.value = 'fidde19870102';
}

function submitForm() {
  var form = document.querySelector(".login-form");
  form.submit();
}
