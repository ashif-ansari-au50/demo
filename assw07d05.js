/*Q-1) Write a program to create a copy of an object, like, obj2 = obj1 edit any property of obj2, and see
if the change is reflected to obj1 or not?
Explain your observation.  */

obj1={
    firstname:"Mohsin",
    middlename:"qureshi",
    lastname:"arif",
}
let obj2 = obj1
obj2.firstname="khan",
obj2.middlename="adnan",
obj2.lastname="abdulla",

console.log(obj2)
console.log(obj1)
// observation : yes it is changing the value of obj1 because it is storing the reference address of obj1
