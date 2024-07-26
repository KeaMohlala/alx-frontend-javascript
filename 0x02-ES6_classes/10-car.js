export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const brandSymbol = Symbol('brand');
    const motorSymbol = Symbol('motor');
    const colorSymbol = Symbol('color');
    return new Car(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
  }
}
