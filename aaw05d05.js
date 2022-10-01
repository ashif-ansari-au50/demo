// Q-1) Write a function to sort an array of numbers.
// Input: [8,5,6,3]
// Output: [3,5,6,8]

var sortArray = [8,5,6,3];
sortArray.sort(function(a, b) {
  return a - b;
});

console.log(sortArray)

//OUTPUT -:  [ 3, 5, 6, 8 ]