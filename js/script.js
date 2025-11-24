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



// =====================================
// 3. Add New Student Using Spread Operator
// =====================================

let newStudent = {
    name: "Zahra",
    age: 20,
    grade: 95,
    city: "Muscat"
};

let updatedStudents = [...students, newStudent];
console.log(newStudent);


// =====================================
// 4. Destructuring (First Student)
// =====================================

const { name, grade } = students[0];
console.log("First Student Name:", name);
console.log("First Student Grade:", grade);


// =====================================
// 5. Conditions: Grade Check + Switch for City
// =====================================

function checkGrade(student) {
    if (student.grade >= 90) {
        console.log("Excellent");
    } else if (student.grade >= 75) {
        console.log("Good");
    } else if (student.grade >= 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

function checkCity(student) {
    switch (student.city) {
        case "Cairo":
            console.log("City: Cairo");
            break;
        case "Alex":
            console.log("City: Alexandria");
            break;
        default:
            console.log("City: Other");
    }
}

//  apply this to the first student only as an example.
console.log("=== Grade and City Check for First Student ===");
checkGrade(students[0]);
checkCity(students[0]);


// =====================================
// 6. Array Methods
// =====================================

// push()
students.push({ name: "Khalid", age: 23, grade: 60, city: "Salalah" });
console.log("After push:", students);


// pop()
students.pop();
console.log("After pop:", students);


// unshift()
students.unshift({ name: "Mona", age: 19, grade: 77, city: "Cairo" });
console.log("After unshift:", students);