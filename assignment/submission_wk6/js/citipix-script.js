window.onload = function() {
  console.log("Testing 1 2 3");

  $(document).ready(function() {
    var myArr = ['NYC', 'SF', 'LA', 'ATX', 'SYD', 'SG']; // Assigns the city name options to an array

    for (i = 0; i < myArr.length; i++) { // For loop from position 0 to 5 of the array
      $('#city-type').append('<option>' + myArr[i] + '</option>'); //appends the name of the city(position is defined by the for loop) to the dropdown options.
    }

    $('#city-type').change(function() {
      var selected = $("#city-type").val(); //Storing the input chosen by user in a variable called 'selected'

      //Multiple cases for each city's background + default background
      switch (selected) {
        case 'NYC':
          $('body').attr('class', 'nyc');
          break;

        case 'SF':
          $('body').attr('class', 'sf');
          break;

        case 'LA':
          $('body').attr('class', 'la');
          break;

        case 'ATX':
          $('body').attr('class', 'austin');
          break;

        case 'SYD':
          $('body').attr('class', 'sydney');
          break;

        case 'SG':
          $('body').attr('class', 'sg');
          break;

        default:
          $('body').attr('class', 'default');
          break;

      }

    })
  })
}
