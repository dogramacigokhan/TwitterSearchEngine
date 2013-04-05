var SearchInterval;

var SearchTweets = function()
{
	searchTerm = $("#search-text").val();
	
	window.clearInterval(SearchInterval);
	
	ShowLoading(); 
	GetTweets(searchTerm, SetTweets);
	
	SearchInterval = self.setInterval(function(){ShowLoading(); GetTweets(searchTerm, SetTweets);}, 10000);
}

var SetTweets = function(data)
{
	// Clear the tweet list first
	$(".tweet").remove();
	
	// There is an error or no tweets found..
	if (typeof data.error !== "undefined" || data.results.length == 0)
	{
		HideLoading();
		$(".tweet_not_found").show();
		window.clearInterval(SearchInterval);
		return;
	}
	
	for (var i = 0; i < 5 && i < data.results.length; i++)
	{
		// Now place the new tweets
		tweet = data.results[i];
		$(".tweet_results").append(GetTweetTemplate(tweet.profile_image_url, tweet.from_user_name, "@" + tweet.from_user, "(" + tweet.created_at + ")", tweet.text, "http://twitter.com/" + tweet.from_user, false));
	}
	
	HideLoading();
}
