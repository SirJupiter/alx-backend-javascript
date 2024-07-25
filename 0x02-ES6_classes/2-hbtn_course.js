/* eslint-disable */

/**
 * class HolbertonCourse
 */
class HolbertonCourse {
  /**
   * Creates an instance of HolbertonCourse class
   *
   * @param {String} name
   * @param {Number} length
   * @param {array of Strings} students
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets name of course
   */
  get name() {
    return this._namw;
  }

  /**
   * Sets name of course
   */
  set name(newName) {
    if (typeof newName !== 'string')
      throw new TypeError('Name must be a string');
    this._name = newName;
  }

  /**
   * Gets length of course
   */
  get length() {
    return this._length;
  }

  /**
   * Sets length of course
   */
  set length(newLength) {
    if (typeof newLength !== 'number')
      throw new TypeError('Length must be a number');
    this._length = newLength;
  }

  /**
   * Gets student array
   */
  get students() {
    return this._students;
  }

  /**
   * Sets student array
   */
  set students(newStudents) {
    if (!Array.isArray(newStudents))
      throw new TypeError('Students must be an array');
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}

export default HolbertonCourse;
