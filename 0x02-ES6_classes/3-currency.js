/* eslint-disable */

/**
 * Holds the Currency class
 */
class Currency {
  /**
   * Called at the creation of an instance of Currency
   *
   * @param {String} code -
   * @param {String} name -
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    this._code = newCode;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
