// interface named Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
// Create two students
let student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    location: "La",
}
let student2: Student = {
    firstName: "Bob",
    lastName: "Doe",
    age: 12,
    location: "NewYork",
}
let studentsList: Student[] = [student1, student2];
console.log(studentsList);

const table = document.createElement('table');
const row = table.insertRow(0);
const col1 = row.insertCell(0);
const col2 = row.insertCell(1);
col1.textContent = "First Name";
col2.textContent = "Location";

studentsList.forEach((student) => {
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.body.appendChild(table);
