// calculateNumber(type, a, b) return sum of two args
// eslint-disable-next-line consistent-return
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type === 'SUM') {
    return roundedA + roundedB;
  } if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    }
    return roundedA / roundedB;
  }
  throw new Error('Invalid type. Must be SUM, SUBTRACT, or DIVIDE.');
}

module.exports = calculateNumber;
