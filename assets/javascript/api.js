function dataFinder() {
    var $nyArticles = $('#ny-times-articles');
    var articleName = $(".nySearch").val();


    $nyArticles.text("");




    var nyUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + articleName + '=&sort=newest&api-key=YG2rJcx5xtzFkFgiVftpGYaUKjld3qDA';

    $.getJSON(nyUrl, function(data) {

        nyArticles = data.response.docs;
        console.log(nyArticles);

        for (var i = 0; i < nyArticles.length; i++) {
            var articles = nyArticles[i];


            $nyArticles.append('<li class="article">' +
                '<a href="' + articles.web_url + '">' + articles.headline.main + '</a>' +
                '<p>' + articles.snippet + '</p>' +
                '</li>');

        };

    }).fail(function(e) {
        $nyArticles.text("Your Request could not be found");
        console.log("Your request failed.")
    });

    return false;

}