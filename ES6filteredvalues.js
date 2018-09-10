//filter the array of numbers using the filter helper, create a new array containing only numbers greater than 50. 
//assign this new array to a variable called filteredNumbers.


var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

;

var filteredNumbers = numbers.filter (function(number)  {
    return number > 50;
});