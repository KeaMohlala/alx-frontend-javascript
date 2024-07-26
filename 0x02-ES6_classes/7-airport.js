export default class Airport {
  constructor(name, code) {
    this._name = name; // eslint-disable-line no-unused-vars
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
