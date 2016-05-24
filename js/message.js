exports.Message = function(to, from, messageText){
  this.to = to;
  this.from = from;
  this.messageText = messageText;
};

exports.Message.prototype.read = function() {
  return "<p>Dear " + this.to + ", </p>" +
         "<p>" + this.messageText + "</p>" +
         "<p>Yours truly, " + this.from + "</p>";

//  return "<p>" + this.to  + this.messageText + "Yours truly, " + this.from + "</p>";
};
