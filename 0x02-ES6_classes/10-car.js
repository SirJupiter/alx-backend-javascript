/* eslint-disable */

const cloneSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    const clone = new (Object.getPrototypeOf(this).constructor)();
    clone._brand = this._brand;
    clone._motor = this._motor;
    clone._color = this._color;
    return clone;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}

export default Car;
