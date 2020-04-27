// Javascript here
var timer;
clearInterval(timer);
timer = setInterval(function () {
  var currentDate = new Date();
  var currentTime = currentDate.toLocaleTimeString();
  var displayClock = document.getElementById('digital-clock');
  displayClock.innerHTML = currentTime;
});