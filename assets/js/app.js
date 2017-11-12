// // Select all tabs
// $('#fixtab').click(function(){
//     console.log("how button clicked");
//     $(this).tab('show');
// })

// // Select tab by name

// $('.nav-tabs a[href="#how"]').tab('show')

// $('.nav-tabs a[href="#how"]').tab('show')
$('select').change(function() {
  if ($(this).children('option:first-child').is(':selected')) {
    $(this).addClass('placeholder');
  } else {
   $(this).removeClass('placeholder');
  }
 });
// SETUP VARIABLES
// ==========================================================

// This variable will be pre-programmed with our authentication key
// (the one we received when we registered)
var authKey = "b6ec86a0452f432099e1531a148b3894";

// These variables will hold the results we get from the user's inputs via HTML
// var searchTerm = "";
// var numResults = 0;
// var startYear = 0;
// var endYear = 0;
var articleCounter = 0;

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
authKey + "&q=";

$(document).on("click", "#search", function(){
console.log($(this).attr("data-value"))
console.log("button clicked");
var clickedBtnVal = $(this).attr("data-value");
var searchURL = queryURLBase + clickedBtnVal;



$.ajax({
  url: searchURL,
  method: "GET"
}).done(function(NYTData){
  console.log(NYTData);
  //this empties our well section and resets counter
  articleCounter = 0;
  $("#well-section").empty()
      // Loop through and provide the correct number of articles
  for (var i = 0; i < 10; i++) {

          // Add to the Article Counter (to make sure we show the right number)
          articleCounter++;

          // Create the HTML well (section) and add the article content for each
          var wellSection = $("<div>");
          wellSection.addClass("well");
          wellSection.attr("id", "article-well-" + articleCounter );
          $("#well-section").append(wellSection);

          // Confirm that the specific JSON for the article isn't missing any details
          // If the article has a headline include the headline in the HTML
          if (NYTData.response.docs[i].headline !== "null") {
            $("#article-well-" + articleCounter).append("<a href="+NYTData.response.docs[i].web_url+'>'+NYTData.response.docs[i].headline.main+"</a>")
            // $("a").attr("href",)
            $("a").attr("target", "_blank")
            .addClass("articleHeadline")
            .append("<span class=label label-primary>" + "<span>");
              // .append(
              //   "<a target='_blank' href="+NYTData.response.docs[i].web_url + "class=articleHeadline>" + "<span class='label label-primary'>" +
              //   articleCounter + "</span>.  " +
              //   NYTData.response.docs[i].headline.main + "</a>")
            // Log the first article's headline to console
            console.log(NYTData.response.docs[i].headline.main);
          }

          // If the article has a byline include the headline in the HTML
          if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.original) {
            $("#article-well-" + articleCounter )
              .append("<p>" + NYTData.response.docs [i].byline.original + "</p>");

            // Log the first article's Author to console.
            console.log(NYTData.response.docs [i].byline.original);
          }

          // Then display the remaining fields in the HTML (Section Name, Date, URL)
          $("#articleWell-" + articleCounter )
            .append("<p>Section: " + NYTData.response.docs [i].section_name + "</p>");
          $("#articleWell-" + articleCounter )
            .append("<p>" + NYTData.response.docs [i].pub_date + "</p>");
          $("#articleWell-" + articleCounter )
            .append(
              "<a href='" + NYTData.response.docs [i].web_url + "'>" +
              NYTData.response.docs [i].web_url + "</a>"
            );

          // Log the remaining fields to console as well
          console.log(NYTData.response.docs[i].pub_date);
          console.log(NYTData.response.docs[i].section_name);
          console.log(NYTData.response.docs[i].web_url);
        }
})
})