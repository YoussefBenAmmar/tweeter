/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

const renderTweets = function (data) {

   //empties container as to not duplicate tweets
   $('#tweets-container').empty();
   for (let tweet of data) {
     $('#tweets-container').prepend(createTweetElement(tweet));
   }


  // for (let tweet of data) {
  //   $("#tweet-container").createTweetElement(tweet);
  // }
};

const createTweetElement = function (data) {
  let $tweet = $(`<article class="tweet">
  <header>
    <div class="user">
    <img src=document.querySelector('avatars')> 
     document.querySelector("name")
    </div>
    <div>document.querySelector("handle")</div>
  </header>
  <div>document.querySelector("content") </div>
  <footer> 
    <div> document.querySelector("created_at")</div>
    <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i> </div>
  </footer>
</article>
  `);
  return $tweet;
};

renderTweets(data);
r
