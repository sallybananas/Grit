// // Select all tabs
// $('#fixtab').click(function(){
//     console.log("how button clicked");
//     $(this).tab('show');
// })

// // Select tab by name
// $('.nav-tabs a[href="#how"]').tab('show')
$('select').change(function() {
    if ($(this).children('option:first-child').is(':selected')) {
      $(this).addClass('placeholder');
    } else {
     $(this).removeClass('placeholder');
    }
   });