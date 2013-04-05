var ApiAddress = "http://search.twitter.com/";

var GetTweets = function(searchTerm, callback)
{
    $.ajax({
        type: "POST",
        url: ApiAddress + "search.json?" + jQuery.param({q: searchTerm}),
        dataType: "jsonp",
        success: callback,
        error: callback
    });
}
