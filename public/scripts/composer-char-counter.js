$(document).ready(function() {

  $('#tweet-text').on("input", function(e) {
    let x = $(this).val().length;
    let charCounter = 140 - x;

    $('.counter').text(charCounter);
    if(charCounter < 0){
      $('.counter').css("color", "red")
    } else {
      $('.counter').css("color", "#5f5c53")
    }

  });


  // $('#submit').on("click", e =>{
  //   alert( "Handler for .submit() called." );
  //   e.preventDefault();
  // })
});