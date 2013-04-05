var GetTweetTemplate = function(imgPath, userName, user, date, tweetText, userLink, lastTweet)
{
	return '<div class="tweet' + (lastTweet ? 'lastTweet' : '') + '">'
		   +	'<div class="tweet_img_container">'
		   +		'<a target="_blank" href="' + userLink + '"><img alt="" src="' + imgPath + '" /></a>'
		   +	'</div>'
		   +	'<div class="tweet_info">'
		   +		'<div class="user_info">'
		   +			'<a target="_blank" href="' + userLink + '"><span id="tweet_user_name">' + userName + '</span></a>'
		   +			'<a target="_blank" href="' + userLink + '"><span id="tweet_user">' + user + '</span></a>'
		   +			'<a target="_blank" href="' + userLink + '"><span id="tweet_date">' + date + '</span></a>'
		   +		'</div>'
		   +		'<div class="tweet_text">' + tweetText + '</div>'
		   +	'</div>'
		   +'</div>';
}