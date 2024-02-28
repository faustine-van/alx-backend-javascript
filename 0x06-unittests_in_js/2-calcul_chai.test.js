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
    it('should return NaN when no args present', () => {
      expect(calculateNumber('SUM')).to.be.NaN;
    });
    it('should return undefined when no args present', () => {
      expect(calculateNumber()).to.be.an('undefined');
    });
    it('should return NaN when no args present', () => {
      expect(calculateNumber('SUM', 1)).to.be.NaN;
    });
    it('should return NaN when no arg present', () => {
      expect(calculateNumber('SUM', 2)).to.be.NaN;
    });
    it('should return NaN when arg present but string', () => {
      expect(calculateNumber('SUM', 'string', 8)).to.be.NaN;
    });
    it('should return NaN when args present but list', () => {
      expect(calculateNumber('SUM', 5, [1, 2, 3])).to.be.NaN;
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
    it('should return NaN when no args present', () => {
      expect(calculateNumber('SUBTRACT')).to.be.NaN;
    });
    it('should return undifined when no args present', () => {
      expect(calculateNumber()).to.be.an('undefined');
    });
    it('should return NaN when no args present', () => {
      expect(calculateNumber('SUBTRACT', 1)).to.be.NaN;
    });
    it('should return NaN when no arg present', () => {
      expect(calculateNumber('SUBTRACT', 2)).to.be.NaN;
    });
    it('should return NaN when arg present but string', () => {
      expect(calculateNumber('SUBTRACT', 'string', 8)).to.be.NaN;
    });
    it('should return NaN when args present but list', () => {
      expect(calculateNumber('SUBTRACT', 5, [1, 2, 3])).to.be.NaN;
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
    it('should return NaN when no args present', () => {
      expect(calculateNumber('DIVIDE')).to.be.NaN;
    });
    it('should return Undefined when no args present', () => {
      expect(calculateNumber()).to.be.an('undefined');
    });
    it('should return NaN when no args present', () => {
      expect(calculateNumber('DIVIDE', 1)).to.be.NaN;
    });
    it('should return NaN when no arg present', () => {
      expect(calculateNumber('DIVIDE', 2)).to.be.NaN;
    });
    it('should return NaN when arg present but string', () => {
      expect(calculateNumber('DIVIDE', 'string', 8)).to.be.NaN;
    });
    it('should return NaN when args present but list', () => {
      expect(calculateNumber('DIVIDE', 5, [1, 2, 3])).to.be.NaN;
    });
    it('should return NaN when args present but list', () => {
      expect(calculateNumber('DIVIDE', 'not a number', 'also not a number')).to.be.NaN;
    });
  });
});
