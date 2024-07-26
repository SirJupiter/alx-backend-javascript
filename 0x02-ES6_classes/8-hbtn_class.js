/* eslint-disable */

class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](thing) {
    if (thing === 'number') return this._size;
    if (thing === 'string') return this._location;
    return null;
  }
}

export default HolbertonClass;
