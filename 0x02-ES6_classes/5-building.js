export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.validate();
  }

  get sqft() {
    return this._sqft;
  }

  validate() {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
