var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDay();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
document.addEventListener('DOMContentLoaded', function() {
  var friday = document.getElementById('friday');
  var monThurs = document.getElementById("mon-thurs");
  var open = document.getElementById("open");
  var closed = document.getElementById("closed");

  function openClose() {
    //reset display each time this function runs
    [monThurs, friday, open, closed].forEach(function(element) {
      element.classList.remove('hidden');
    });
    if (currentDay >= 1 && currentDay <= 4) {
      friday.classList.add('hidden');
      if (currentHour >= 8 && currentHour <= 21) {
        closed.classList.add('hidden');
      } else {
        open.classList.add('hidden');
      }
    }
    if (currentDay === 5) {
      monThurs.classList.add('hidden');
      if (currentHour >= 8 && currentHour <= 17.5) {
        closed.classList.add('hidden');
      } else {
        open.classList.add('hidden');
      }
    }
    if (currentDay === 0 || currentDay === 6) {
      open.classList.add('hidden');
      friday.classList.add('hidden');
    }
  };

  setInterval(openClose, 5000);
  openClose();
});