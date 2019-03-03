
// store api key
var apiKey = "0IjhpI7O7SDDQhlVmi1iK2Nik0fTeg58"


$(".search-buttons").text("This works?????");

var topics = ["space", "dogs", "cats", "pizza", "beach", "snowboarding"]
$(document).ready(function () {

    var topics = ["space", "dogs", "cats", "pizza", "beach", "snowboarding"]

    for (var i = 0; i < topics.length; i++) {

        console.log("topics button loop working")

        var newButton = $("<button>");
        newButton.addClass("btn btn-dark");
        newButton.attr("data-name", topics[i])
        newButton.attr("value", topics[i])
        newButton.text(topics[i]);

        console.log("button ", newButton.val())

        $(".search-buttons").append(newButton);

    }


    // event for on the search button click
    $("#button-addon2").on("click", function () {


        // gets the search input
        var searchTerm = $("#search-term").val().trim();

        console.log(searchTerm)


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + apiKey + "&limit=2";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                var results = response.data;


                for (var i = 0; i < results.length; i++) {

                    var gifDisplay = $("<div>");

                }


            });

    });

});
