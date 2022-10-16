
// Q-1) Write a program to print maximum value of an array of numbers using for…of

let array = [1,102,100,200,-500,333];

let array = [60, 30, 30, 45, 5, 6, 8, 17];
maxValue=0
for (item of array) {
              
    // find maximum value
    if (item > maxValue)
    maxValue = item;
}
console.log(maxValue)

// Output -: 333