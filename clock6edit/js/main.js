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

  //var friday = document.getElementById('friday');
  //var monThurs = document.getElementById("mon-thurs");
  //var open = document.getElementById("open");
  //var closed = document.getElementById("closed");

  //function openClose() {
    //reset display each time this function runs
   // [monThurs, friday, open, closed].forEach(function(element) {
   //   element.classList.remove('hidden');
   // });

  function openClose() {
    //reset display each time this function runs
    [sunday, monWed, thursday,friSat, open, closed].forEach(function(element) {
      element.classList.remove('hidden');
    });

    //sunday open 0-4am and 6am-midnight

    if (currentDay >= 0 && currentDay <= 1) {
      monWed.classList.add('hidden');
      thursday.classList.add('hidden');
      friSat.classList.add('hidden');
      
      if (currentHour >= 0 && currentHour <= 4 && currentHour >= 6 && currentHour <= 24) {
        closed.classList.add('hidden');
      } else {
        open.classList.add('hidden');
      }
      
      //monday through wednesday  open 0-130am and 6am-midnight

    }
    if (currentDay >= 1 && currentDay <= 4) {
      sunday.classList.add('hidden');
      thursday.classList.add('hidden');
      friSat.classList.add('hidden');
      if (currentHour >= 0 && currentHour <= 1.5  && currentHour >= 6 && currentHour <= 24) {
        closed.classList.add('hidden');
      } else {
        open.classList.add('hidden');
      }
    }

    //thursday open 0-130am and 4am- midnight

    if (currentDay >= 4 && currentDay <= 5) {
      sunday.classList.add('hidden');
      monWed.classList.add('hidden');
      friSat.classList.add('hidden');
      if (currentHour >= 0 && currentHour <= 1.5  && currentHour >= 4 && currentHour <= 24) {
        closed.classList.add('hidden');
      } else {
        open.classList.add('hidden');
      }
    }

    // friday and saturday open 24 hours

    if (currentDay >= 5) {
      sunday.classList.add('hidden');
      monWed.classList.add('hidden');
      thursday.classList.add('hidden');
      
      closed.classList.add('hidden');
      
    }


//if (currentDay === 0 || currentDay === 6) {
   //   open.classList.add('hidden');
   //   friday.classList.add('hidden');
   // }
  //};

  setInterval(openClose, 5000);
  openClose();
});