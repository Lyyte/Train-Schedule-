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

  database.ref().on("child_added", function(childSnapShot) {

    dtrainname = childSnapShot.val().name;
    ddestination = childSnapShot.val().destin;
    dfirsttrain = childSnapShot.val().firsttrain;
    dfrequency = childSnapShot.val().frequency;

    var currentmomment = moment();
    console.log("current moment: " + currentmomment);


  });


  });
