$(document).ready(function(){
  $('#set-alarm').submit(function(event){
    event.preventDefault();
    var alarm = $('#alarm').val();
    // $('#fav-color').hide();
    $('#alert').text(alarm);
  });
});
