//Q-2) Write a program to pass spread operator as argument and rest operator as parameter of a function.

function sum(...fun){
    console.log(fun)
    }
    const arr = [,5,6,9,2,4,3,3,5,2]
    sum("Mohsin Qureshi","your","bank","id.no","is", ...arr)