function pluck(array, property) {
var props = array.map(function(elem) {
  return elem[property]
  })
  return props;
}