var prompt = require('prompt-sync')();

var n = prompt('Enter a number');

function findSum(n) {

  let result = 0;

  for (let i = 1; i <= n; i++) {

      result = result + i;
  }
  return result
}


console.log(`Sum of numebers from 1 to ${n} is ${findSum(n)}`)
