var sec = 00;
var min = 00;
var hr = 00;
var intervalAdd;

//  starting stopwatch
function start() {
  intervalAdd = setInterval(() => {
    sec++;

    //    to change minute 
    if (sec == 60) {
      sec = 00;
      min++;

    // to change hour
      if (min == 60) {
        min = 00;
        hr++;
        // to change 
        if (hr < 10) {
          document.getElementById("hour").innerHTML = "0" + hr;
        } else {
          document.getElementById("hour").innerHTML = hr;
        }
      }

      if (min < 10) {
        document.getElementById("mins").innerHTML = "0" + min;
      } else {
        document.getElementById("mins").innerHTML = min;
      }
    }

    // for second
    if (sec < 10) {
      document.getElementById("secs").innerHTML = "0" + sec;
    } else {
      document.getElementById("secs").innerHTML = sec;
    }
  }, 1000);
}

// stop timer function
function stop(){
  clearInterval(intervalAdd);
}

//reset timer function
function reset(){
  clearInterval(intervalAdd);
  min = 00;
  document.getElementById("mins").innerHTML = min + "0";
  sec = 00;
  document.getElementById("secs").innerHTML = sec + "0";
  hr = 00;
  document.getElementById("hour").innerHTML = hr + "0";
}