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
    storageBucket: "train-schedule-hw-94645.appspot.com",
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


    // var newRow = $("<tr>").append(
    //     $("<td>").text(trainname),
    //     $("<td>").text(destination),
    //     $("<td>").text(first),
    //     $("<td>").text(freq),

  });
  });
