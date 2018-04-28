$('input').on('focus', function () {
  $('p').html('input is in focus!');
});

$('input').on('blur', function () {
  $('p').html('input is no longer in focus.');
});