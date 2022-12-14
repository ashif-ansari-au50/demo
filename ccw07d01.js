// Q-1) Write a function that would allow you to do this.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
// You can create a closure to keep the value passed to the function createBase even after the inner
// function is returned. The inner function that is being returned is created within an outer function,
// making it a closure, and it has access to the variables within the outer function


function createBase(baseNumber) {
    return function(N) {
      
      return baseNumber + N;
    }
  }
  var addSix = createBase(6);
  console.log(addSix(10));
  console.log(addSix(21));


 
  