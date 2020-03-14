console.log("hello");
function displayTime() {
    var time = moment().format('HH:mm:ss');
    $('#clock').html("Current Time: " + time + " CT");
    setTimeout(displayTime, 1000);
};
$(document).ready(function() {
    displayTime();
    var config = {
      apiKey: "AIzaSyBb3pWojzBMwl_9m1e7be0fzA45pLceDPQ",
      authDomain: "train-schedule-hw-94645.firebaseapp.com",
      databaseURL: "https://train-schedule-hw-94645.firebaseio.com",
      projectId: "train-schedule-hw-94645",
      storageBucket: "train-schedule-hw-94645.appspot.com",
      messagingSenderId: "264902581767",
      appId: "1:264902581767:web:1b8e652a0e2e15fbb294a2",
      measurementId: "G-GWYRYBQ6JW"}
  
  
  firebase.initializeApp(config);

  var database = firebase.database();

  $('#add-train').on("click", function(event) {
    event.preventDefault();
    var trainname = $('#train-name-input').val().trim();
    var destination = $('#destination-input').val().trim();
    var first = $('#first-input').val().trim();
    var freq = $('#frequency-input').val().trim();

    var traininfo = {
        name: trainname,
        destin: destination,
        firsttrain: first,
        frequency: freq,
    }

    database.ref().push(traininfo);

    console.log(traininfo.name);
    console.log(traininfo.destin);
    console.log(database);

  });

  database.ref().on("child_added", function(childSnapshot) {

    var trainname = childSnapshot.val().name;
    console.log(trainname);

    var traindestin = childSnapshot.val().destin;
    console.log(traindestin);

    var trainfirst = childSnapshot.val().firsttrain;
    console.log(trainfirst);

    var trainfreq = childSnapshot.val().frequency;
    console.log(trainfreq);





    var newRow = $("<tr>").append(
    // $("<td>").text(trainname));
    // var newRow1 = $("<tr>").append(
    // $("<td>").text(traindestin));
    // var newRow3 = $("<tr>").append(
    // $("<td>").text(trainfirst));
    // var newRow2 = $("<tr>").append(
    // $("<td>").text(trainfreq));
    // $("#train-table > tbody").append(newRow);
    // $("#train-table > tbody").append(newRow1);
    // $("#train-table > tbody").append(newRow2);
    // $("#train-table > tbody").append(newRow3);

    

  });


  });
