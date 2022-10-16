/*  Q-1) Take an integer array(length >10) as input from the user, and extract numbers from index 2, 7
numbers into a new array, using the inbuilt function.
Elements should be removed from the original array.
Input -> Arr = [4,8,1,4,2,9,10,7,3,6,5]
Output -> NewArr = [1,4,2,9,10,7,3]
Arr = [4,8,6,5] */

let arr = [4,8,1,4,2,9,10,7,3,6,5]
let newarr=arr.splice(2,7) 
console.log(newarr)
console.log(arr)


/* OUTPUT
    New array-:[1, 4, 2, 9,10, 7, 3]
    Orignal array-:[ 4, 8, 6, 5 ]        */