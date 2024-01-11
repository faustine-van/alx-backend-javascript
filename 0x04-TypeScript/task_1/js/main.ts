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

// console.log(printTeacher('John', 'Doe'));

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
