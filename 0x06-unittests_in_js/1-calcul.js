// calculateNumber(type, a, b) return sum of two args

// eslint-disable-next-line consistent-return
function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }
}
// console.log(calculateNumber('SUM', -1.0, 1.0));
module.exports = calculateNumber;
