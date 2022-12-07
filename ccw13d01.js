// 1. OBJECT
// An object is an instance of class. An object is a data structure containing
// properties and methods. Consider a student.
// A student will have characteristics like name, roll number, and class, and he
// will
// perform an action, let's say, giving an exam.
let person = {
first_name:'Asif',
last_name: 'Ansari',
getFunction : function(){
return (`The name of the person is
${person.first_name} ${person.last_name}`)
},
phone_number : {
mobile:'12345',
landline:'6789'
}
}
console.log(person.getFunction());
console.log(person.phone_number.landline);


// 2. CLASSES
// A class defined the blueprint of the object. It demonstrates all characteristics
// its
// instance can have and all functions/actions it can perform.
class Person {
constructor(name) {
this.name = name;
}
}
const person1 = new Person('mohsin');
const person2 = new Person('atif');
console.log(person1.name);
console.log(person2.name);

// 3. Encapsulation –
// The process of wrapping properties and functions within a single unit is known
// as encapsulation.
// Encapsulation is the bundling of data and the methods that act on that data such
// that access to that data is restricted from outside
class employee{
constructor(name,id){
this.name = name;
this.id = id;
}
add_Address(add){
this.add = add;
}
getDetails(){
console.log(`Name is ${this.name},Address is: ${this.add}`);
}
}
let employee1 = new employee('mohsin',48);
employee1.add_Address('Gujarat');
employee1.getDetails();


// 4. INHERITANCE
// inheritance is a mechanism that allows us to create new classes on the
// basis of already existing classes. It provides flexibility to the child class to
// reuse the methods and variables of a parent class.
// parent class
class Person {
function Student(firstName, lastName, schoolName, grade)
{
Person.call(this, firstName, lastName);
this.SchoolName = schoolName || "unknown";
this.Grade = grade || 0;
}
Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;
