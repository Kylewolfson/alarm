// var moment = require('moment');
// var update = require('./../js/alarm.js').update;

$(document).ready(function(){
  var datetime = null,
          date = null;

  var update = function () {
      date = moment(new Date())
      $('#time').html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
  };
  // datetime = $('#time');
  update();
  setInterval(update, 1000);
  // datetime.text(moment());
});
