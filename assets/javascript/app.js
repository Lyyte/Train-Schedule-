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
    var first = moment($("#first-input").val().trim(), "HH:mm").format();
    var freq = $('#frequency-input').val().trim();

    var traininfo = {
        name: trainname,
        destin: destination,
        firsttrain: first,
        frequency: freq,
    }

    database.ref().push(traininfo);

    // console.log(traininfo.name);
    // console.log(traininfo.destin);
    // console.log(database);

  });

  database.ref().on("child_added", function(childSnapShot) {

   var dtrainname = childSnapShot.val().name;
   var ddestination = childSnapShot.val().destin;
   var dfirsttrain = childSnapShot.val().firsttrain;
   var dfrequency = childSnapShot.val().frequency;

   var timedifftillnow = moment().diff(moment(dfirsttrain), "minutes");
   var timeremainder = timedifftillnow % dfrequency;
   var timelefttillnext = dfrequency - timeremainder;
   var timeofnext = moment().add(timelefttillnext, "minutes");
   var timeofnextT = moment(timeofnext).format("HH:mm A");

    console.log(timedifftillnow);
    console.log(timeremainder);
    console.log(timelefttillnext);
    console.log(timeofnext);
    console.log(timeofnextT);

  });

  });