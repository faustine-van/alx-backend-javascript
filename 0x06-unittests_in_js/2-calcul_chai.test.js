// test using chai calculateNumber() function
const chai = require('chai');

const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return 4', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return 5 when float', () => {
      expect(calculateNumber('SUM', 2.99999, 2.09)).to.equal(5);
    });
  });
  describe('subtract', () => {
    it('should return 4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(4);
    });
    it('should return 10', () => {
      expect(calculateNumber('SUBTRACT', 4, 14)).to.equal(10);
    });
    it('should return -1', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 0)).to.equal(-1);
    });
    it('should return -1 when float', () => {
      expect(calculateNumber('SUBTRACT', 2.99999, 2.09)).to.equal(-1);
    });
    it('should return -1 when float', () => {
      expect(calculateNumber('SUBTRACT', 5.12, 2.09)).to.equal(-3);
    });
  });
  describe('divide', () => {
    it('should return 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return 7', () => {
      expect(calculateNumber('DIVIDE', 14, 2)).to.equal(7);
    });
    it('should return error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
