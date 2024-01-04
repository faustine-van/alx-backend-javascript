export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._length = length;
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._students = students;
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(newNLength) {
    this._length = newNLength;
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
    if (!Array.isArray(newStudents)) {
      throw TypeError('Students must be an array');
    }
  }
}
