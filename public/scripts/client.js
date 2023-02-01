/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $( "#submit" ).submit(function( event ) {
//   alert( "Handler for .submit() called." );
//   event.preventDefault();
// });

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]




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
    <div>"${data.created_at}"</div>
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
};

renderTweets(data);

});


// const renderTweets = function(data) {

// $(() => {
//   createTweetElement(data);
//   $('#tweet-container').on('submit', (evt) => {
//     evt.preventDefault();
//     const str = $('#search-input').val();
//     getMovies(str);
//   });
// })

// }





// const submitTweet = function (e) {
//   $("#submit").on("submit", (e) => {
//     alert("tweet sent");
//     e.preventDefault();
//   });

//   $.ajax( 'tweets', {
//     method: 'POST',
//     body: $(this).serialize()
//   })
// };



// const loadTweets = function(data){
//   $.get('/tweets',  (data) => {
//     console.log("Loading your tweet");
//     console(tweet)
//   })

//   timeago.format('created_at')
// }