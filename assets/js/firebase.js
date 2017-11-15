$(function(){
    //make a variable to keep track of data coming from firebase

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBePGAjREPI1LZUsZGc9B9f4KF-yYMDe3A",
    authDomain: "youth-grit-scale.firebaseapp.com",
    databaseURL: "https://youth-grit-scale.firebaseio.com",
    projectId: "youth-grit-scale",
    storageBucket: "",
    messagingSenderId: "481575498972"
  };
  firebase.initializeApp(config);

    var data= [];

    //create new connection to firebase
      var ref= new Firebase('https://data-application1.firebaseio.com/activities');

    //listen to data updates from firebase
      ref.on("value", function (snapshot){
      console.log(snapshot.val());
     //when the data updates at firebase, put it in the data variable
      data= snapshot.val();
    })
  //Entire Form (handler)
  $('#newActivity').submit(function(event) {

    var $form = $(this);
    console.log("Submit to Firebase");

    //disable submit button
    $form.find("#saveForm").prop('disabled', true);

    //get values to send to Firebase
    var genderToSend = $('#gender').val();
    console.log(genderToSend);

    var selectAge = $('#selectAge').val();
    console.log(selectAge);

    var birthOrderToSend= $('#bo').val();
    console.log(birthOrderToSend);

    var zipToSend= $('#zip').val();
    console.log(zipToSend);

    var educationToSend= $('#education').val();
    console.log(educationToSend);

    //take the values from the form, and put them in an object
    var newActivity= {
      "gender": genderToSend,
      "selectAge": selectAge,
      "bo": birthOrderToSend,
      "zip": zipToSend,
      "education": educationToSend
    }
    //put new object in data array
    data.push(newActivity);
    console.log(data);

      //send the new data to Firebase
          ref.set(data, function(err){
        if(err){
          alert("Data no go");
        }
      });

      return false;
    })
})