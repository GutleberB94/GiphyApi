
// store api key
var apiKey = "&api_key=0IjhpI7O7SDDQhlVmi1iK2Nik0fTeg58"




var topics = ["space", "dogs", "cats", "pizza", "beach", "snowboarding"]


$(document).ready(function () {

    function renderButtons() {
        $(".search-buttons").empty();

        for (var i = 0; i < topics.length; i++) {

            var newButton = $("<button>");
            newButton.addClass("btn btn-dark");
            newButton.addClass("gifButton")
            newButton.attr("data-name", topics[i])
            newButton.attr("value", topics[i])
            newButton.text(topics[i]);

            console.log("button ", newButton.val())

            $(".search-buttons").append(newButton);

        }
    }

    // event for on the search button click
    $(".searchbuttons").on("click", function () {

        // gets the search input
        var searchTerm = $("#search-term").val().trim();
        topics.push(searchTerm);
        renderButtons();

    });

    function displayGif() {

        var queryTerm = $(this).val();

        console.log("query: " + queryTerm)


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + queryTerm + apiKey + "&limit=2";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var rating = results[i].rating;

                    var ratingDisplay = $("<p>").text("Rating: " + rating);

                    var gifDisplay = $("<div>");

                    var gifURL = $("<img>")
                    gifDisplay.addClass("gif");

                    gifURL.attr("src", results[i].images.fixed_height.url);

                    gifDisplay.append(ratingDisplay);
                    gifDisplay.append(gifURL);

                    $(".gifs-show-here").prepend(gifDisplay);
                }
                renderButtons();

            });

    };

    $(document).on("click", ".gifButton", displayGif);

    renderButtons();

}); //document ready close