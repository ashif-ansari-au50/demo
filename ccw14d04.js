/*Q2. Write a program to show data type of each element of the array .
Input: [8,5,5,6,”7”,8]
Output:
8 Number
5 Number
5 Number
6 Number
7 String
8 Number    */
var array = [8,5,5,6,"7",8];
for(var i=0;i<array.length;i++){
    console.log("Data type of "+array[i]+" is "+typeof(array[i]));
}
