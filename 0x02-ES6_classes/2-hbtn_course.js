export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
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
    return this._name;
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

  set students(newstudents) {
    this._students = newstudents;
    if (!Array.isArray(newstudents)) {
      throw TypeError('Students must be an array');
    }
  }
}
