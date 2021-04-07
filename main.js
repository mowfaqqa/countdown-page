let countDownDate = new Date ("April 21, 2021 08:00:00").getTime()

let x = setInterval(() => {
  var now = new Date().getTime()

  // countdown interval
  var distance = countDownDate - now;

  // time calculations
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / (1000));

  document.getElementById('days').innerHTML = days
  document.getElementById('hours').innerHTML = hours
  document.getElementById('mins').innerHTML = minutes
  document.getElementById('secs').innerHTML = seconds

  if (distance < 0) {
    clearInterval(x)
    document.getElementById('expire').innerHTML = `<p class="display-5 lead text-danger"> The Countdown has expired. Thank you for your patience </p> `
  }
}, 1000);