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
    it('should return 5 when floating', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('should return 2.0 when equals positive number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 1.0), 2.0);
    });
    it('should return 2.0 when equals negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.0, -1.0), -2.0);
    });
    it('should return 0.0 when equals negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.0, 1.0), 0.0);
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
    it('should return 2.0 when equals number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 1.0), 0.0);
    });
    it('should return 0.0 when equals negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.0, -1.0), 0.0);
    });
    it('should return 0.0 when equals number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.0, 1.0), 2.0);
    });
  });
  describe('dIVIDE', () => {
    it('should return 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return 7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 14, 2), 7);
    });
    it('positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return 2.0 when equals number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.0, 1.0), 1.0);
    });
    it('should return 1 when equals number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.0, -1.0), 1);
    });
    it('should return 1 when equals number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.0, 1.0), -1);
    });
    // add
    it('positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.0, 0), 'Error');
    });
    it('positive number and 0.3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 0.3), 'Error');
    });
    it('positive number and negative rounded number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, -0.3), 'Error');
    });
  });
});
