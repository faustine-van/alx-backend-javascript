export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }

    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(newNcode) {
    this._code = newNcode;
    if (typeof newcode !== 'string') {
      throw new TypeError('code must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
