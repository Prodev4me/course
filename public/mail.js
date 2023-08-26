
$('#courseForm').submit(function(event) {
  event.preventDefault();
  $('#submit').text('Please wait...')
    $('#submit').prop('disabled', true);
    $('#submit').addClass('disabled-btn');

  $.ajax({
    url: '/sendEmail',
    method: 'POST',
    data: $(this).serialize(),
    success: function(response) {
      $('#submit').text('Sign up')
      $('#submit').prop('disabled', false);
      $('#submit').removeClass('disabled-btn');

      swal({
        title: 'Yoo! Hooray ✨',
        text: 'You have successfully registered for the course 🥳',
        icon: "success",
        button: "Ok"
      });
    },
    error: function(error) {
      console.log(error);
      $('#submit').text('Sign up')
      $('#submit').prop('disabled', false);
      $('#submit').removeClass('disabled-btn');
      swal({
        title: 'Oops!',
        text: 'An error occured while processing your registration. Try again later',
        icon: "error",
        button: "Ok"
      });
    }
  })
});