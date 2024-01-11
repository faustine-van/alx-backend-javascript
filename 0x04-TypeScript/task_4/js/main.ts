let cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
}
const subjectInstance = new Subjects.Subject(cTeacher);
console.log(subjectInstance);
export const cpp :Subjects.Cpp = new Subjects.Cpp(cTeacher);
export const java :Subjects.Java = new Subjects.Java(cTeacher);
export const react :Subjects.React = new Subjects.React(cTeacher);

// C++
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());
// java
console.log(java.getAvailableTeacher());
console.log(java.getRequirements());
// react
console.log(react.getAvailableTeacher());
console.log(react.getRequirements());