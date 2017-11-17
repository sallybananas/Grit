 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBePGAjREPI1LZUsZGc9B9f4KF-yYMDe3A",
  authDomain: "youth-grit-scale.firebaseapp.com",
  databaseURL: "https://youth-grit-scale.firebaseio.com",
  projectId: "youth-grit-scale",
  storageBucket: "youth-grit-scale.appspot.com",
  messagingSenderId: "481575498972"
};
firebase.initializeApp(config);

    var database = firebase.database();
    var data= [];
    var genderToSend = "";
    var selectAge = "";
    var birthOrderToSend = "";
    var zipToSend = "";
    var educationToSend = "";

  //Entire Form (handler)
  $('#submit-grit-score').on('click', function(event){
    event.preventDefault();

    // var $form = $(this);
    // console.log("Submit to Firebase");

    // //disable submit button
    // $form.find("#saveForm").prop('disabled', true);

    //get values to send to Firebase
    var genderToSend = $('#gender').val();
    console.log(genderToSend);

    var selectAge = $('#selectAge').val();
    console.log(selectAge);

    var birthOrderToSend = $('#bo').val();
    console.log(birthOrderToSend);

    var zipToSend = $('#zip').val();
    console.log(zipToSend);

    var educationToSend = $('#education').val();
    console.log(educationToSend);

    //take the values from the form, and put them in an object
    database.ref("/youth").push({
      gender: genderToSend,
      selectage: selectAge,
      bo: birthOrderToSend,
      zip: zipToSend,
      education: educationToSend
    });
    //put new object in data array
    // data.push(newActivity);
    // console.log(data);

      //send the new data to Firebase
      //     ref.set(data, function(err){
      //   if(err){
      //     alert("Data no go");
      //   }
      // });

  })
