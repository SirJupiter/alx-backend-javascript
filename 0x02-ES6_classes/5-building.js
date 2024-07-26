/* eslint-disable */

class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // if (new.target === Building)
    //   throw new Error('Cannot instantiate from Abstract type Building');
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function')
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
  }
}

export default Building;
