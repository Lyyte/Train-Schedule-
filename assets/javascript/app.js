// $( document ).ready(function() {
//     console.log( "ready!" );

//     var firebaseConfig = {
//         apiKey: "AIzaSyBb3pWojzBMwl_9m1e7be0fzA45pLceDPQ",
//         authDomain: "train-schedule-hw-94645.firebaseapp.com",
//         databaseURL: "https://train-schedule-hw-94645.firebaseio.com",
//         projectId: "train-schedule-hw-94645",
//         storageBucket: "train-schedule-hw-94645.appspot.com",
//         messagingSenderId: "264902581767",
//         appId: "1:264902581767:web:1b8e652a0e2e15fbb294a2",
//         measurementId: "G-GWYRYBQ6JW"
//       };
//       // Initialize Firebase
//       firebase.initializeApp(firebaseConfig);
// });
console.log("hello");

function displayTime() {
    var time = moment().format('HH:mm:ss');
    $('#clock').html("Current Time: " + time + " CT");
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});
