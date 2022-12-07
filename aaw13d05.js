// Q1. Create a Student class and initialize it with a name and roll number.
// create an object of that class in the same file and print name and roll number

class Student{
    constructor(name, roll){
    this.name = name;
    this.roll = roll;
    }
    }
    let Stu = new Student("Hamza", 22);
    console.log(Stu.name , Stu.roll )
    
//Q2.Write the above code to enter details of 10 students, and take input
// from the user.
// Hint: use loops.

    let studentName = new Student();
    for(let i=1;i<=10;i++){
      studentName = require('prompt-sync')()('Enter name of the student:');
      console.log(studentName)
    }