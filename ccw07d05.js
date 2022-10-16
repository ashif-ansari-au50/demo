//Q-1) Write a function that would take one variable as a parameter and log on the screen using Template Literal Interpolation

function fun(Attendence){
    console.log(`Hello hamza your Attendence is ${Attendence} `)
    }
    fun("100%")


// Q-2) Write a tagged function to print the following sentence: Homework must be at least 80% to ensure my future. 
//      Attendance must be at least 80% to ensure my success. 1 variable for
//      Homework/Attendance. 1 variable for 80 (percentage). 1 variable for future/success.

let hom = "Homework"
let att = "attendence"
let pre = "80%"
let fut = "future"
let suc = "success" 

function myfunc(str , work , percent , result){
    console.log(work + str[1] + percent + str[2] + result)
}

myfunc `${hom} must be atleast ${pre} to ensure my ${fut}`
