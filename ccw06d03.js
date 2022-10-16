/*Q-1) Take an integer array(length >10) as input from the user,
and extract numbers from index 2 to 8 into a new array, using inbuilt function.
Elements should not be removed from the original array.   */

let arr = [4,8,1,4,2,9,10,7,3,6,5]
let newarr=arr.slice(2,8) 
console.log(newarr)
console.log(arr)


// OUTPUT 
//         New array-:[ 1, 4, 2, 9, 10, 7 ]
//         Orignal array-:[4,  8, 1, 4, 2,9, 10, 7, 3, 6,5]





