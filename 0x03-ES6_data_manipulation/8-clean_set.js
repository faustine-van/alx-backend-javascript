export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }
  const newArray = [];
  // let text = '';
  set.forEach((value) => {
    const len = startString.length;
    if (value.startsWith(startString)) {
      const val = `${value.slice(len)}`;
      newArray.push(val);
      // text += val;
    }
  });
  // return text.slice(0, -1);
  return newArray.join('-');
}
