//Q-1) Write a function to create an object, that calculates the number of times each element occurs in the following array. 

const num=["Orange","Orange","banana","apple","apple","banana","apple","apple","apple","apple","Orange","Orange","Orange","Orange","banana"]
const count = {};

num.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});

console.log(count);

// OUTPUT-:  { Orange: 6, banana: 3, apple: 6 }