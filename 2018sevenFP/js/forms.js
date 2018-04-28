//function required()
//{
//var empt = document.forms["form"]["names"].value;
//{
//alert("Please input a Value");
//return false;
//}
//else
//{
//alert('Code has accepted : you can try another');
//return true; 
//}
//}


//function validateForm() {
 //  var x = document.forms["myForm"]["fname"].value;
 //  if (x == "") {
  //      alert("Name must be filled out");
 //       return false;
 //   }
 //  }



function required()
{
var empt = document.forms["form"]["names"].value;
if (empt == "")
{
alert("Please enter a name");
return false;
}
else 
{
alert('Reservation Accepted');
return true; 
}
}
