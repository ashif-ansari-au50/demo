/*Q-1) Write a curryfied function for the following function:
function fun(a,b,c)
{
return a+b+c
}                                                    */

function sum(a, b, c) {
  return a + b + c;

}

let curriedSum = sum;

console.log(curriedSum(1, 2, 3)); 
