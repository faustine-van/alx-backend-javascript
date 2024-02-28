// test using mocha
// calculateNumber(type, a, b) return sum of two args
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(-1, 3.7), 3);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return NaN when no args present', () => {
    assert.strictEqual(calculateNumber(), NaN);
  });
  it('should return NaN when no args present', () => {
    assert.strictEqual(calculateNumber(1), NaN);
  });
  it('should return NaN when no arg present', () => {
    assert.strictEqual(calculateNumber(2), NaN);
  });
  it('should return NaN when arg present but string', () => {
    assert.strictEqual(calculateNumber('string', 8), NaN);
  });
  it('should return NaN when args present but list', () => {
    assert.strictEqual(calculateNumber(5, [1, 2, 3]), NaN);
  });
});
