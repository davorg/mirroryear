$(document).ready(function() {
  $('#born').on('keyup', function() {
    var born = $('#born').val();
    if (born.length >= 4) {
      var year = new Date().getFullYear();
      var bornYear = parseInt(born);
      
      // Calculate user's age
      var age = year - bornYear;
      
      var past   = born - age;
      var future = year + age;

      $('#age').text(age);
      $('#past').text(past);
      $('#future').text(future);
      $('#results').show();
      
      // Check if user claims to be born in the future
      if (bornYear > year) {
        $('#time-travel-warning').show();
      } else {
        $('#time-travel-warning').hide();
      }
    } else {
      $('#results').hide();
      $('#time-travel-warning').hide();
    }
  }); 
});
