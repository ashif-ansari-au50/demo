    // Q-1 )Write a program to print “hello world” n times, take n as input from the user

    var prompt = require('prompt-sync')();

    var n = prompt('How many  times? ');
    for (let i = 0; n > i; i++) {
        console.log("hello world")
    }

    //Q-2 )Write a program to print n powers of 2, take n as input from the user.

    var prompt = require('prompt-sync')();

     var n = prompt('How many more times? ');
     for (var i=1; i<=n; i++){
        console.log(2**i);
      }
    

//     Q-3) FizzBuzz - take n as input from the user,
// From 1 to n, print Fizz if a number is divisible by 3,
// print Fuzz if a number is divisible by 5.
// print FizzFuzz if a number is divisible by 3 and 5 both

var prompt = require('prompt-sync')();
 var num = prompt('Enter a number ')
 if ((num% 3 === 0 && num % 5 ===0))
     {
      console.log("fizzfuzz")
        
     }
    else if((num%3)==0){
    console.log("Fizz")
    
 }   else if((num%5)==0){
      console.log("Fuzz")    
 

 }

