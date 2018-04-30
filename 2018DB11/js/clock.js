var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDay();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
document.addEventListener('DOMContentLoaded', function() {
  var sunday = document.getElementById('sunday');
  var monWed = document.getElementById("mon-wed");
  var thursday = document.getElementById('thursday');
  var friSat = document.getElementById('fri-sat');
  var open = document.getElementById("open");
  var closed = document.getElementById("closed");
  console.log(sunday);

  

  function openClose() {
    //reset display each time this function runs
   

    //sunday open 0-4am and 6am-midnight

    if (currentDay >= 0 && currentDay <= 1) {
      
      if (currentHour >= 4 && currentHour <= 6) {
        open.classList.add('hidden');
      } else {
        closed.classList.add('hidden');
      }

      //monday through wednesday  open 0-130am and 6am-midnight

    }
    if (currentDay >= 1 && currentDay <= 4) {
      
      if (currentHour >= 1.5 && currentHour <= 6) {
        open.classList.add('hidden');
      } else {
        closed.classList.add('hidden');
      }
    }

    //thursday open 0-130am and 4am- midnight

    if (currentDay >= 4 && currentDay <= 5) {
      
      if (currentHour >= 1.5 && currentHour <= 4) {
        open.classList.add('hidden');
      } else {
        closed.classList.add('hidden');
      }
    }

    // friday and saturday open 24 hours

    if (currentDay >= 5 && currentDay <= 7) {
      

      closed.classList.add('hidden');

    }

}


  setInterval(openClose, 5000);
  openClose();
});
