function isOpen(timeRangeEl, date) {
    var day = '' + date.getDay();
    //var hhmm = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    var hhmm = ('0' + date.getHours()).slice(+2) + ':' + ('0' + date.getMinutes()).slice(+2);


    var days = timeRangeEl.getAttribute('data-days');
    var openTime = timeRangeEl.getAttribute('data-open');
    var closeTime = timeRangeEl.getAttribute('data-close');
    return days.indexOf(day) >= 0 && openTime <= hhmm && hhmm < closeTime;
}

function openClose() {
    var date = new Date();
    var display = document.getElementById('open-display');
    var els = display.getElementsByClassName('timerange');
    var anyActive = false;
    for (var i = 0; i < els.length; i++) {
        if (isOpen(els[i], date)) {
            anyActive = true;
            els[i].className = els[i].className.replace(/ *inactive\b/g, '');
        } else if (els[i].className.indexOf('inactive') < 0) {
            els[i].className += ' inactive';
        }
    }
    if (anyActive) {
        display.className = 'open';
    } else {
        display.className = 'closed';
    }
}

setInterval(openClose, 5000);
openClose();
