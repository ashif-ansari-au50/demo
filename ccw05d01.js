const prompt = require("prompt-sync")(); 
n=prompt("Enter a no of elements in array: ")
inArray=[]; 

for (i = 0; i < n; i++) {
inArray[i] = prompt ("Enter Array Element " + (i + 0) + " : " );        
   

}
console.log("Your input Array is " + inArray);
console.log("array of length is : " + inArray.length)

/* Output
Enter a no of elements in array: 6
Enter Array Element 0 : 1
Enter Array Element 1 : 2
Enter Array Element 2 : 3
Enter Array Element 3 : 4
Enter Array Element 4 : 5
Enter Array Element 5 : 6
Your input Array is 1,2,3,4,5,6
array of length is 6    */