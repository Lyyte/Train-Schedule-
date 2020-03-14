console.log("hello");
function displayTime() {
    var time = moment().format('HH:mm:ss');
    $('#clock').html("Current Time: " + time + " CT");
    setTimeout(displayTime, 1000);
};
$(document).ready(function() {
    displayTime();
    var config = {
        apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
        authDomain: "time-sheet-55009.firebaseapp.com",
        databaseURL: "https://time-sheet-55009.firebaseio.com",
        storageBucket: "time-sheet-55009.appspot.com"
      };
  
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

    // var newRow = $("<tr>").append(
    //     $("<td>").text(trainname),
    //     $("<td>").text(destination),
    //     $("<td>").text(first),
    //     $("<td>").text(freq),

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
    $("<td>").text(trainname));
    var newRow1 = $("<tr>").append(
    $("<td>").text(traindestin));
    var newRow3 = $("<tr>").append(
    $("<td>").text(trainfirst));
    var newRow2 = $("<tr>").append(
    $("<td>").text(trainfreq));
    $("#train-table > tbody").append(newRow);
    $("#train-table > tbody").append(newRow1);
    $("#train-table > tbody").append(newRow2);
    $("#train-table > tbody").append(newRow3);

    





  });




  });
