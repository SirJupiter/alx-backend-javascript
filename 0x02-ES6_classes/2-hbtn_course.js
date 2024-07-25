/* eslint-disable */

class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }

    if (typeof length === 'number') {
      this._length = length;
    }

    if (Array.isArray(students)) {
      this._students = students;
    }
  }

  get name() {
    return this._namw;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw new Error('Name must be a string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number')
      throw new Error('Length must be a number');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents))
      throw new Error('Students must be an array');
    this._students = newStudents;
  }
}

export default HolbertonCourse;
