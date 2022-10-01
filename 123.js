// Q-1) Write a function to print all elements of an array using any loop (except for…of)

//By Using for loop.

var arr=[1,2,3,4,5]
for (var i=0; i<arr.length; i++)
    console.log(arr[i]);
    

   // Q-2) Write a function to print all elements of an array using for…of loop.

   //By Using for...of loop.
   
   let number = [1, 2, 3, 4, 5];
for(let element of number) {
  console.log(element);
}