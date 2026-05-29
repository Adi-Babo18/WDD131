// 1. 

let names = ["Nark", "Mathen", "Markthaniel", "Nathark"];
console.log(names);

console.log(names[2]);

let grades = [89, 39, 55, 100];
console.log(grades[1]);

// 2. Javascript objects
// own custom datatype
let studentName = "Brother Warner";
let studentClasses = ["WDD131", "CSE110"];
let studentGrades = [67, 88];

let studentName1 = "Brother Warner";
let studentClasses1 = ["WDD131", "CSE110"];
let studentGrades1 = [67, 88];

// This is an object
let student = {
    // Key/Value pairs
    name:"Brother Warner",
    classes:["WDD131", "CSE110"],
    grades:[67, 88]
}

// This is an object literal
let student = {
    // Key/Value pairs
    name:"Brother Warner",
    classes:["WDD131", "CSE110"],
    grades:[67, 88]
}

// accessable pairs of objects
console.log(student.name);

// 3. Array methods
names.forEach((name) => {
    // Runs this function once for every element
    // in the array one at a time
    console.log(name);
});

let newName = names.map((name) => {
    return name + "Hatchley";
});

console.log(newNames);

let filteredName = names.filter((name) => {
    return name[0] === "M";

})