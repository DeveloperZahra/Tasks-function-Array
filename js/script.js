// =====================================
// 1. Create Data for 5 Students
// =====================================

let students = [
    { name: "Ali", age: 20, grade: 90, city: "Cairo" },
    { name: "Sara", age: 19, grade: 82, city: "Muscat" },
    { name: "Saif", age: 21, grade: 76, city: "Alex" },
    { name: "Noor", age: 18, grade: 55, city: "Dubai" },
    { name: "Amal", age: 22, grade: 40, city: "Cairo" }
];


// =====================================
// 2. Function: Print Student Info
// =====================================

function printStudent(student) {
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Grade:", student.grade);
    console.log("City:", student.city);
    console.log("----------------------------");
}


// Call the function for each student
students.forEach(s => printStudent(s));