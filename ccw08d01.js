// Q-1) Take an integer array(length >10) as input from the user, and use reduce function to find the
// average of the whole array.

var myinputarr = [];
var size = 10 ; // Array size
var  prompt = require("prompt-sync")();
for(var a=0; a<size; a++) 
{
 myinputarr[a] = parseInt(prompt('Enter array Element'+(a+1)));
var average = myinputarr.reduce(function(sum,value){
return sum + value; }, 0) / myinputarr.length
}
console.log(myinputarr)
console.log(average)

/*
OUTPUT
[
   4, 48, 34, 25, 45,
  98, 15,  9, 15, 47
]
Adv-: 34
*/