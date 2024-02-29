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
// console.log(calculateNumber('DIVIDE', -14.9999, 2));
module.exports = calculateNumber;
