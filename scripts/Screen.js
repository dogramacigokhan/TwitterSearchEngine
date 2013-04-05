var givePercentageHeight = {
	
	".main_container": 0.8
}

$(document).ready(function() {

	// Set a fixed size for childs perc. sizes
	for (var element in givePercentageHeight)
    {
        $(element).css("height", window.innerHeight *  givePercentageHeight[element]);
    }
});


var ShowLoading = function()
{
	$(".tweet_not_found").hide();
	$(".tweet_results").show();
	
	$(".tweet").css({ opacity: 0.3 });
	$(".loading_bar_container").css({ width: $(".tweet_results").css("width"), height: $(".tweet_results").css("height") });
	
	$(".loading_bar_container").css("height", $(".loading_bar_container").css("height").replace("px", "") < 100 ? "100px" : $(".loading_bar_container").css("height"));
	$(".loading_bar_container").show();
}

var HideLoading = function()
{
	$(".loading_bar_container").hide();
	$(".tweet").css({ opacity: 1 });
	
	SetTweetEffects();
}

var SetTweetEffects = function()
{
	$(".tweet_text").each(function(index) {
		
		var parsed = $(this).text().split(" ");
		
		for (var i = 0; i < parsed.length; i++)
			$(this).html($(this).html().replace(parsed[i], processTweetLinks(parsed[i])));
	});
	
	// Add event listeners
	$(".tweet_img_container img, #tweet_user, #tweet_date").hover(function() {
		$(this).parent().parent().parent().find("#tweet_user_name").addClass("tweet_user_name_hover");
	}, function() {
		$(this).parent().parent().parent().find("#tweet_user_name").removeClass("tweet_user_name_hover");
	});
}

function processTweetLinks(text) {
	
	// Link
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    text = text.replace(exp, "<a href='$1' target='_blank'>$1</a>");
    // Hashtag
    exp = /(^|\s)#(\w+)/g;
    text = text.replace(exp, "$1<a href='http://search.twitter.com/search?q=%23$2' target='_blank'>#$2</a>");
    // User
    exp = /(^|\s)@(\w+)/g;
    text = text.replace(exp, "$1<a href='http://www.twitter.com/$2' target='_blank'>@$2</a>");
    return text;
}
