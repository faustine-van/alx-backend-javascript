export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this.code}' }`;
  }
}
