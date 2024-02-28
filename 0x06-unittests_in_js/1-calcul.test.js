// test using mocha
// calculateNumber(type, a, b) return sum of two args
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return NaN when no args present', () => {
      assert.strictEqual(calculateNumber('SUM'), NaN);
    });
    it('should return NaN when no args present', () => {
      assert.strictEqual(calculateNumber(), undefined);
    });
    it('should return NaN when no args present', () => {
      assert.strictEqual(calculateNumber('SUM', 1), NaN);
    });
    it('should return NaN when no arg present', () => {
      assert.strictEqual(calculateNumber('SUM', 2), NaN);
    });
    it('should return NaN when arg present but string', () => {
      assert.strictEqual(calculateNumber('SUM', 'string', 8), NaN);
    });
    it('should return NaN when args present but list', () => {
      assert.strictEqual(calculateNumber('SUM', 5, [1, 2, 3]), NaN);
    });
    it('should return 5 when floating', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });
  describe('sUBTRACT', () => {
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), 4);
    });
    it('should return 10', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 14), 10);
    });
    it('should return -1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 0), -1);
    });
    it('should return NaN when no args present', () => {
      assert.strictEqual(calculateNumber('SUBTRACT'), NaN);
    });
    it('should return NaN when no args present', () => {
      assert.strictEqual(calculateNumber(), undefined);
    });
    it('should return NaN when no args present', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1), NaN);
    });
    it('should return NaN when no arg present', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2), NaN);
    });
    it('should return NaN when arg present but string', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 'string', 8), NaN);
    });
    it('should return NaN when args present but list', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, [1, 2, 3]), NaN);
    });
  });
  describe('dIVIDE', () => {
    it('should return 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return 7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 14, 2), 7);
    });
    it('should return error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return NaN when no args present', () => {
      assert.strictEqual(calculateNumber('DIVIDE'), NaN);
    });
    it('should return undefined when no args present', () => {
      assert.strictEqual(calculateNumber(), undefined);
    });
    it('should return NaN when no args present', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1), NaN);
    });
    it('should return NaN when no arg present', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2), NaN);
    });
    it('should return NaN when arg present but string', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 'string', 8), NaN);
    });
    it('should return NaN when args present but list', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, [1, 2, 3]), NaN);
    });
  });
});
