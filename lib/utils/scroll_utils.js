module.exports.makeScrollToBottom = function(numScrolls, waitTime) {
  return function() {
    for(var i = 0; i < numScrolls; i++) {
      this.wait(waitTime, function() {
        this.scrollToBottom();
      });
    }
  };
};
