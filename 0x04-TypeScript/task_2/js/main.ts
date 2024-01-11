interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};
/***************
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
console.log(teacher3);
*/
interface Directors extends Teacher {
    numberOfReports: number;
}
/********************** 
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
console.log(director1);*/

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}
let printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName.substring(0, 1)}. ${lastName}`;
}

console.log(printTeacher('John', 'Doe'));

/*************/
// Interface describing the constructor parameters
interface StudentClassConst {
    new(firstName: string, lastName: string): Student;
}
// Interface describing the class properties and methods
interface Student {
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements Student {
    private _firstName: string;
    private _lastName: string;
    
    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    workOnHomework(): string{
        return 'Currently working';
    }
    displayName(): string{
        return `${this._firstName}`;
    }
}

// Create the DirectorInterface and TeacherInterface interface:
interface DirectorInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
// Create a class Director that implement DirectorInterface
class Director  implements DirectorInterface {
  workFromHome(): string {
    return ('Working from home');
  }
  getCoffeeBreak(): string {
    return ('Getting a coffee break');
  }
  workDirectorTasks(){
    return ('Getting to director tasks');
  }
}
// Create a class Teacher that implement TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return ('Cannot work from home');
  }
  getCoffeeBreak(): string {
    return ('Cannot have a break');
  }
  workTeacherTasks(){
    return ('Getting to work');
  }
}

let createEmployee = function(salary: string | number ): Director | Teacher{
  if (typeof salary === 'number' && salary < 500){
    return new Teacher;
  }
  return new Director;
}

/******type predicate*****/
// check if employee is director
function isDirector(employee: any): employee is Director{
  return  employee instanceof Director;
}
function executeWork(employee: any){
  if (isDirector(employee)){
    employee.workDirectorTasks();
  }else{
    employee.workTeacherTasks();
  }
}
//console.log(executeWork(createEmployee(200)));
//console.log(executeWork(createEmployee(1000)));

/*****String literal types*******/
type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string{
  if (todayClass === 'Math'){
    return 'Teaching Math';
  }else if(todayClass === 'History'){
    return 'Teaching History';
  }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
