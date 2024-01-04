export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
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

  get name() {
    return this._name;
  }

  set length(newNLength) {
    this._length = newNLength;
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be an number');
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
