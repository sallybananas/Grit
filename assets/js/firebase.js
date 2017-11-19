 /// Initialize Firebase
 var config = {
  apiKey: "AIzaSyDjE5u2MtLHc_plVVUjQlgn-LoBZ_Vt0U0",
  authDomain: "grit-scale.firebaseapp.com",
  databaseURL: "https://grit-scale.firebaseio.com",
  projectId: "grit-scale",
  storageBucket: "grit-scale.appspot.com",
  messagingSenderId: "334387451925"
};
firebase.initializeApp(config);

    var database = firebase.database();
    var data= [];
    // var genderToSend = "";
    // var selectAge = "";
    // var birthOrderToSend = "";
    // var zipToSend = "";
    // var educationToSend = "";


  //Entire Form (handler)
  $('#submit-grit-score').on('click', function(event){
    event.preventDefault();
      var gender = document.getElementsByName("optionsRadios");
      console.log(gender)
      var genderToSend;
      for(var i = 0; i < gender.length; i++){
        if(gender[i].checked){
           genderToSend = gender[i].value;
          console.log(genderToSend)
          break;
        }
      }

      var ethnicity = document.getElementById("ethnicity").value;
      // var selectAge = ethnicity.options[ethnicity.selectedIndex].value;
      console.log(ethnicity)

      var selectAge = document.getElementById("selectAge").value;
      // var selectAge = age.options[age.selectedIndex].value;
      console.log(selectAge)

      var bo = document.getElementById("bo").value;
      // var birthOrderToSend = bo.options[bo.selectedIndex].value;
      console.log(bo)
      var zip = document.getElementById("zip").value;
      // var zipToSend = zip.options[zip.selectedIndex].value;

      var education = document.getElementById("education").value;
      // var educationToSend = education.options[education.selectedIndex].value;
    // var $form = $(this);
    // console.log("Submit to Firebase");

    // //disable submit button
    // $form.find("#saveForm").prop('disabled', true);

    //get values to send to Firebase
    // var genderToSend = $('#gender').val();
    // console.log(genderToSend);

    // var selectAge = $('#selectAge').val();
    // console.log(selectAge);

    // var birthOrderToSend = $('#bo').val();
    // console.log(birthOrderToSend);

    // var zipToSend = $('#zip').val();
    // console.log(zipToSend);

    // var educationToSend = $('#education').val();
    // console.log(educationToSend);

    //take the values from the form, and put them in an object
    database.ref("/youth").push({
      ethnicity: ethnicity,
      gender: genderToSend,
      age: selectAge,
      birthOrder: bo,
      zip: zip,
      education: education
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
      //this is how we are going to reset all the values for forms
      document.getElementById("zip").value = "";
      document.getElementById("bo").value = "";
      document.getElementsByName("optionsRadios")[0].checked = "checked";
      document.getElementById("ethnicity").value = "";
      document.getElementById("selectAge").value = "";
      document.getElementById("education").value = ""
  })
