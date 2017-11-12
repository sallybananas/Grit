// var queryURL = "https://www.googleapis.com/youtube/v3/activities?key=AIzaSyA44JNFenQSXyFooA4maMWQ3qfJsiHesx0";
// $("#youGrit").on("click", function(){
//   queryURL = queryURL+"type=video"+"&"+""




// //   $("#well-section").append('<iframe width="300" height="200" src="https://www.youtube.com/embed/H14bBuluwB8" frameborder="0" allowfullscreen></iframe>');
  
// // });

// we already have the api key & we dont need the authorization
//need to add ?key=AIzaSyA44JNFenQSXyFooA4maMWQ3qfJsiHesx0 to https://www.googleapis.com/youtube/v3/search


var queryURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyA44JNFenQSXyFooA4maMWQ3qfJsiHesx0"
var result0;
var result1;
var result2;
var result3;
var result4;
var ref =0;

$(document).on("click", "#youGrit", function(){
// $("#youGrit").on("click", function(){

    queryURL = queryURL+"&part=snippet&type=video&q=Grit"



    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
// $("#results").empty()
      console.log(queryURL);
      console.log(response);
      console.log(response.items["0"].id.videoId);
      console.log(response.items["1"].id.videoId);
      console.log(response.items["2"].id.videoId);
      console.log(response.items["3"].id.videoId);
      console.log(response.items["4"].id.videoId);
      result0 = response.items["0"].id.videoId;
      result1 = response.items["1"].id.videoId;
      result2 = response.items["2"].id.videoId;
      result3 = response.items["3"].id.videoId;
      result4 = response.items["4"].id.videoId;
     

      $("#title0").html(response.items["0"].snippet.title);
      $("#content0").html(response.items["0"].snippet.description);
      $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

      $("#title1").html(response.items["1"].snippet.title);
      $("#content1").html(response.items["1"].snippet.description);
      $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

      $("#title2").html(response.items["2"].snippet.title);
      $("#content2").html(response.items["2"].snippet.description);
      $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

      $("#title3").html(response.items["3"].snippet.title);
      $("#content3").html(response.items["3"].snippet.description);
      $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

      $("#title4").html(response.items["4"].snippet.title);
      $("#content4").html(response.items["4"].snippet.description);
      $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);

    });

    // use on click function to it
    // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);

 });


// $("#youGrit").on("click", function(){

//     queryURL = queryURL+"&part=snippet&type=video&q=Grit"
//     $.ajax({
//       url: queryURL,
//       method: 'GET'
//     }).done(function(response) {
//       console.log(queryURL);
//       console.log(response);
//       console.log(response.items["0"].id.videoId);
//       console.log(response.items["1"].id.videoId);
//       console.log(response.items["2"].id.videoId);
//       console.log(response.items["3"].id.videoId);
//       console.log(response.items["4"].id.videoId);
//       result0 = response.items["0"].id.videoId;
//       result1 = response.items["1"].id.videoId;
//       result2 = response.items["2"].id.videoId;
//       result3 = response.items["3"].id.videoId;
//       result4 = response.items["4"].id.videoId;
      
//       $("#title0").html(response.items["0"].snippet.title);
//       $("#content0").html(response.items["0"].snippet.description);
//       $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

//       $("#title1").html(response.items["1"].snippet.title);
//       $("#content1").html(response.items["1"].snippet.description);
//       $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

//       $("#title2").html(response.items["2"].snippet.title);
//       $("#content2").html(response.items["2"].snippet.description);
//       $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

//       $("#title3").html(response.items["3"].snippet.title);
//       $("#content3").html(response.items["3"].snippet.description);
//       $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

//       $("#title4").html(response.items["4"].snippet.title);
//       $("#content4").html(response.items["4"].snippet.description);
//       $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);
      
//     });

//     // use on click function to it
//     // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);
    
//  });




// On clicking Determination

$(document).on("click", "#youDetermination", function(){
// $("#youDetermination").on("click", function(){

    queryURL = queryURL+"&part=snippet&type=video&q=Determination+vs+Grit";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
// $("#results").empty()
      
      console.log(queryURL);
      console.log(response);
      console.log(response.items["0"].id.videoId);
      console.log(response.items["1"].id.videoId);
      console.log(response.items["2"].id.videoId);
      console.log(response.items["3"].id.videoId);
      console.log(response.items["4"].id.videoId);
      result0 = response.items["0"].id.videoId;
      result1 = response.items["1"].id.videoId;
      result2 = response.items["2"].id.videoId;
      result3 = response.items["3"].id.videoId;
      result4 = response.items["4"].id.videoId;

      $("#title0").html(response.items["0"].snippet.title);
      $("#content0").html(response.items["0"].snippet.description);
      $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

      $("#title1").html(response.items["1"].snippet.title);
      $("#content1").html(response.items["1"].snippet.description);
      $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

      $("#title2").html(response.items["2"].snippet.title);
      $("#content2").html(response.items["2"].snippet.description);
      $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

      $("#title3").html(response.items["3"].snippet.title);
      $("#content3").html(response.items["3"].snippet.description);
      $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

      $("#title4").html(response.items["4"].snippet.title);
      $("#content4").html(response.items["4"].snippet.description);
      $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);
      
    });

    // use on click function to it
    // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);
    
 });




// On clicking Perseverance

$(document).on("click", "#youPerseverance", function(){
// $("#youPerseverance").on("click", function(){

    queryURL = queryURL+"&part=snippet&type=video&q=Perseverance";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.items["0"].id.videoId);
      console.log(response.items["1"].id.videoId);
      console.log(response.items["2"].id.videoId);
      console.log(response.items["3"].id.videoId);
      console.log(response.items["4"].id.videoId);
      result0 = response.items["0"].id.videoId;
      result1 = response.items["1"].id.videoId;
      result2 = response.items["2"].id.videoId;
      result3 = response.items["3"].id.videoId;
      result4 = response.items["4"].id.videoId;
      
      $("#title0").html(response.items["0"].snippet.title);
      $("#content0").html(response.items["0"].snippet.description);
      $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

      $("#title1").html(response.items["1"].snippet.title);
      $("#content1").html(response.items["1"].snippet.description);
      $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

      $("#title2").html(response.items["2"].snippet.title);
      $("#content2").html(response.items["2"].snippet.description);
      $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

      $("#title3").html(response.items["3"].snippet.title);
      $("#content3").html(response.items["3"].snippet.description);
      $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

      $("#title4").html(response.items["4"].snippet.title);
      $("#content4").html(response.items["4"].snippet.description);
      $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);
      
    });

    // use on click function to it
    // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);
    
 });


// On clicking Persistance

$(document).on("click", "#youPersistance", function(){
// $("#youPersistance").on("click", function(){

    queryURL = queryURL+"&part=snippet&type=video&q=Persistance";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.items["0"].id.videoId);
      console.log(response.items["1"].id.videoId);
      console.log(response.items["2"].id.videoId);
      console.log(response.items["3"].id.videoId);
      console.log(response.items["4"].id.videoId);
      result0 = response.items["0"].id.videoId;
      result1 = response.items["1"].id.videoId;
      result2 = response.items["2"].id.videoId;
      result3 = response.items["3"].id.videoId;
      result4 = response.items["4"].id.videoId;
      
      $("#title0").html(response.items["0"].snippet.title);
      $("#content0").html(response.items["0"].snippet.description);
      $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

      $("#title1").html(response.items["1"].snippet.title);
      $("#content1").html(response.items["1"].snippet.description);
      $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

      $("#title2").html(response.items["2"].snippet.title);
      $("#content2").html(response.items["2"].snippet.description);
      $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

      $("#title3").html(response.items["3"].snippet.title);
      $("#content3").html(response.items["3"].snippet.description);
      $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

      $("#title4").html(response.items["4"].snippet.title);
      $("#content4").html(response.items["4"].snippet.description);
      $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);
      
    });

    // use on click function to it
    // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);
    
 });





// On clicking Hard Work

$(document).on("click", "#youHardwork", function(){
// $("#youHardwork").on("click", function(){

    queryURL = queryURL+"&part=snippet&type=video&q=Hardwork+vs+Grit";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.items["0"].id.videoId);
      console.log(response.items["1"].id.videoId);
      console.log(response.items["2"].id.videoId);
      console.log(response.items["3"].id.videoId);
      console.log(response.items["4"].id.videoId);
      result0 = response.items["0"].id.videoId;
      result1 = response.items["1"].id.videoId;
      result2 = response.items["2"].id.videoId;
      result3 = response.items["3"].id.videoId;
      result4 = response.items["4"].id.videoId;
      
      $("#title0").html(response.items["0"].snippet.title);
      $("#content0").html(response.items["0"].snippet.description);
      $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

      $("#title1").html(response.items["1"].snippet.title);
      $("#content1").html(response.items["1"].snippet.description);
      $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

      $("#title2").html(response.items["2"].snippet.title);
      $("#content2").html(response.items["2"].snippet.description);
      $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

      $("#title3").html(response.items["3"].snippet.title);
      $("#content3").html(response.items["3"].snippet.description);
      $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

      $("#title4").html(response.items["4"].snippet.title);
      $("#content4").html(response.items["4"].snippet.description);
      $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);
      
    });

    // use on click function to it
    // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);
    
 });


// On clicking Angela Duckworth

$(document).on("click", "#youAngelaDuckworth", function(){
// $("#youAngelaDuckworth").on("click", function(){

    queryURL = queryURL+"&part=snippet&type=video&q=Angela+Duckworth";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.items["0"].id.videoId);
      console.log(response.items["1"].id.videoId);
      console.log(response.items["2"].id.videoId);
      console.log(response.items["3"].id.videoId);
      console.log(response.items["4"].id.videoId);
      result0 = response.items["0"].id.videoId;
      result1 = response.items["1"].id.videoId;
      result2 = response.items["2"].id.videoId;
      result3 = response.items["3"].id.videoId;
      result4 = response.items["4"].id.videoId;
      location.reload();
      $("#title0").html(response.items["0"].snippet.title);
      $("#content0").html(response.items["0"].snippet.description);
      $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

      $("#title1").html(response.items["1"].snippet.title);
      $("#content1").html(response.items["1"].snippet.description);
      $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

      $("#title2").html(response.items["2"].snippet.title);
      $("#content2").html(response.items["2"].snippet.description);
      $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

      $("#title3").html(response.items["3"].snippet.title);
      $("#content3").html(response.items["3"].snippet.description);
      $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

      $("#title4").html(response.items["4"].snippet.title);
      $("#content4").html(response.items["4"].snippet.description);
      $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);
      
    });

    // use on click function to it
    // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);
    
 });


// On clicking Carol Dweck

$(document).on("click", "#youCarolDweck", function(){
// $("#youCarolDweck").on("click", function(){

    queryURL = queryURL+"&part=snippet&type=video&q=Carol+Dweck";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.items["0"].id.videoId);
      console.log(response.items["1"].id.videoId);
      console.log(response.items["2"].id.videoId);
      console.log(response.items["3"].id.videoId);
      console.log(response.items["4"].id.videoId);
      result0 = response.items["0"].id.videoId;
      result1 = response.items["1"].id.videoId;
      result2 = response.items["2"].id.videoId;
      result3 = response.items["3"].id.videoId;
      result4 = response.items["4"].id.videoId;
      
      $("#title0").html(response.items["0"].snippet.title);
      $("#content0").html(response.items["0"].snippet.description);
      $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

      $("#title1").html(response.items["1"].snippet.title);
      $("#content1").html(response.items["1"].snippet.description);
      $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

      $("#title2").html(response.items["2"].snippet.title);
      $("#content2").html(response.items["2"].snippet.description);
      $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

      $("#title3").html(response.items["3"].snippet.title);
      $("#content3").html(response.items["3"].snippet.description);
      $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

      $("#title4").html(response.items["4"].snippet.title);
      $("#content4").html(response.items["4"].snippet.description);
      $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);
      
    });

    // use on click function to it
    // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);
    
 });



// On clicking Growth Mindset

$(document).on("click", "#youGrowthMidnset", function(){
// $("#youGrowthMidnset").on("click", function(){

    queryURL = queryURL+"&part=snippet&type=video&q=Growth+Mindset";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.items["0"].id.videoId);
      console.log(response.items["1"].id.videoId);
      console.log(response.items["2"].id.videoId);
      console.log(response.items["3"].id.videoId);
      console.log(response.items["4"].id.videoId);
      result0 = response.items["0"].id.videoId;
      result1 = response.items["1"].id.videoId;
      result2 = response.items["2"].id.videoId;
      result3 = response.items["3"].id.videoId;
      result4 = response.items["4"].id.videoId;
      
      $("#title0").html(response.items["0"].snippet.title);
      $("#content0").html(response.items["0"].snippet.description);
      $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

      $("#title1").html(response.items["1"].snippet.title);
      $("#content1").html(response.items["1"].snippet.description);
      $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

      $("#title2").html(response.items["2"].snippet.title);
      $("#content2").html(response.items["2"].snippet.description);
      $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

      $("#title3").html(response.items["3"].snippet.title);
      $("#content3").html(response.items["3"].snippet.description);
      $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

      $("#title4").html(response.items["4"].snippet.title);
      $("#content4").html(response.items["4"].snippet.description);
      $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);
      
    });

    // use on click function to it
    // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);
    
 });




// On clicking Grit Scale

$(document).on("click", "#youGritScale", function(){
// $("#youGritScale").on("click", function(){

    queryURL = queryURL+"&part=snippet&type=video&q=Grit+Scale";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(queryURL);
      console.log(response);
      console.log(response.items["0"].id.videoId);
      console.log(response.items["1"].id.videoId);
      console.log(response.items["2"].id.videoId);
      console.log(response.items["3"].id.videoId);
      console.log(response.items["4"].id.videoId);
      result0 = response.items["0"].id.videoId;
      result1 = response.items["1"].id.videoId;
      result2 = response.items["2"].id.videoId;
      result3 = response.items["3"].id.videoId;
      result4 = response.items["4"].id.videoId;
      
      $("#title0").html(response.items["0"].snippet.title);
      $("#content0").html(response.items["0"].snippet.description);
      $("#img0").attr("src", response.items["0"].snippet.thumbnails.default.url);

      $("#title1").html(response.items["1"].snippet.title);
      $("#content1").html(response.items["1"].snippet.description);
      $("#img1").attr("src", response.items["1"].snippet.thumbnails.default.url);

      $("#title2").html(response.items["2"].snippet.title);
      $("#content2").html(response.items["2"].snippet.description);
      $("#img2").attr("src", response.items["2"].snippet.thumbnails.default.url);

      $("#title3").html(response.items["3"].snippet.title);
      $("#content3").html(response.items["3"].snippet.description);
      $("#img3").attr("src", response.items["3"].snippet.thumbnails.default.url);

      $("#title4").html(response.items["4"].snippet.title);
      $("#content4").html(response.items["4"].snippet.description);
      $("#img4").attr("src", response.items["4"].snippet.thumbnails.default.url);
      
    });

    // use on click function to it
    // $("#result0").append("<div>").attr("src","https://www.youtube.com/watch?v="+result0);
    
 });
