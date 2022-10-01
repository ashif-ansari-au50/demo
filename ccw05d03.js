//Q-1) Write a program to print even numbers of an array of numbers using for…of

const arr = [10,25,36,45,53,66,58];

const evens = [];
for ( num of arr) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}
console.log(evens);


//Output  [ 10,36,66,58 ]
