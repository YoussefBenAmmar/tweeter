/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
   const data = [ ]




const createTweetElement = function (data) {


const tweetHTML =
  `<article class="tweet">
  <header>
    <div class="user">
    <img src="${data.user.avatars}"> 
    "${data.user.name}"
    </div>
    <div>"${data.user.handle}"</div>
  </header>
  <div>"${data.content.text}"</div>
  <footer> 
    <div>"${timeago.format(data.created_at, 'en_US')}"</div>
    <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i> </div>
  </footer>
</article>`


$(`#tweet-container`).append(tweetHTML)

};



const renderTweets = function(data) {


  $('#tweets-container').empty();
  for (let tweet of data) {
    $('#tweets-container').prepend(createTweetElement(tweet));
    
  }

  $("form").on("submit", (e) => {
    console.log("tweet sent");
    e.preventDefault();
    console.log( $( "form" ).serialize());

    $.ajax( 'tweets', {
      method: 'POST',
      data:$("form").serialize()
    })
  });



};

const loadTweets = function(data){

  $.get('/tweets',  function(data) {
    $('#tweets-container').empty();
    renderTweets(data);
  })

}

loadTweets(data);

});





