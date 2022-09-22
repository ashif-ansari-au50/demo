let array = [0, -10, 30, 45, 5, 6, -2, 17];
maxValue=0
for (item of array) {
              
    // find maximum value
    if (item > maxValue)
    maxValue = item;
}
console.log(maxValue)