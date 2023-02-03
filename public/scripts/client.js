/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [];


  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(data) {
    const $tweetHTML = `<article class="tweet">
  <header>
    <div class="user">
    <img src="${escape(data.user.avatars)}"> 
    "${escape(data.user.name)}"
    </div>
    <div>"${escape(data.user.handle)}"</div>
  </header>
  <div>"${escape(data.content.text)}"</div>
  <footer> 
    <div>"${escape(timeago.format(data.created_at, "en_US"))}"</div>
    <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i> </div>
  </footer>
</article>`;

return $tweetHTML;
  };


// Tweet submission:

    $("form").on("submit", (e) => {
      e.preventDefault();

      const text = 140 - $('.counter').val();

  console.log("this is our text console.log", text);
  console.log($('.counter').val());

      if (text > 140) {
        $('.errorMsg').text("Too Long. You need to relax, cut it down to the essential. Attention span is too short for your monologue.").slideDown();
        return;
      } else if (text === 0) {
        $('.errorMsg').text("Too Short. I am sure you got something to say. Don't be shy.").slideDown();
        return;
      } else {
        $('.errorMsg').slideUp().text("");

        $.ajax("tweets", {
          method: "POST",
          data: $("form").serialize(),
          success: function(){
            loadTweets()

            $('textarea').val('');

            $('.counter').text(140);}
        });

        console.log($("form").serialize());
      }
    });
    


  const renderTweets = function(data) {
    $("#tweet-container").empty();
    for (let tweet of data) {
 
      const $tweet = createTweetElement(tweet)
      $("#tweet-container").prepend($tweet);
    }
      
    }


  const loadTweets = function() {

    $.get("/tweets", function(data) {
      renderTweets(data);
    });
  };

  loadTweets();
});


