// test using mocha
// calculateNumber(type, a, b) return sum of two args
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return 4', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return NaN when no args present', () => {
      assert.equal(calculateNumber('SUM'), NaN);
    });
    it('should return NaN when no args present', () => {
      assert.equal(calculateNumber(), undefined);
    });
    it('should return NaN when no args present', () => {
      assert.equal(calculateNumber('SUM', 1), NaN);
    });
    it('should return NaN when no arg present', () => {
      assert.equal(calculateNumber('SUM', 2), NaN);
    });
    it('should return NaN when arg present but string', () => {
      assert.equal(calculateNumber('SUM', 'string', 8), NaN);
    });
    it('should return NaN when args present but list', () => {
      assert.equal(calculateNumber('SUM', 5, [1, 2, 3]), NaN);
    });
  });
  describe('sUBTRACT', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), 4);
    });
    it('should return 10', () => {
      assert.equal(calculateNumber('SUBTRACT', 4, 14), 10);
    });
    it('should return -1', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 0), -1);
    });
    it('should return NaN when no args present', () => {
      assert.equal(calculateNumber('SUBTRACT'), NaN);
    });
    it('should return NaN when no args present', () => {
      assert.equal(calculateNumber(), undefined);
    });
    it('should return NaN when no args present', () => {
      assert.equal(calculateNumber('SUBTRACT', 1), NaN);
    });
    it('should return NaN when no arg present', () => {
      assert.equal(calculateNumber('SUBTRACT', 2), NaN);
    });
    it('should return NaN when arg present but string', () => {
      assert.equal(calculateNumber('SUBTRACT', 'string', 8), NaN);
    });
    it('should return NaN when args present but list', () => {
      assert.equal(calculateNumber('SUBTRACT', 5, [1, 2, 3]), NaN);
    });
  });
  describe('dIVIDE', () => {
    it('should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return 7', () => {
      assert.equal(calculateNumber('DIVIDE', 14, 2), 7);
    });
    it('should return error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return NaN when no args present', () => {
      assert.equal(calculateNumber('DIVIDE'), NaN);
    });
    it('should return undefined when no args present', () => {
      assert.equal(calculateNumber(), undefined);
    });
    it('should return NaN when no args present', () => {
      assert.equal(calculateNumber('DIVIDE', 1), NaN);
    });
    it('should return NaN when no arg present', () => {
      assert.equal(calculateNumber('DIVIDE', 2), NaN);
    });
    it('should return NaN when arg present but string', () => {
      assert.equal(calculateNumber('DIVIDE', 'string', 8), NaN);
    });
    it('should return NaN when args present but list', () => {
      assert.equal(calculateNumber('DIVIDE', 5, [1, 2, 3]), NaN);
    });
  });
});
