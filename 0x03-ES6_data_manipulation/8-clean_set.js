export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0 || !(set instanceof Set)) {
    return '';
  }
  let text = '';
  set.forEach((value) => {
    const len = startString.length;
    if (value.startsWith(startString)) {
      const val = `${value.slice(len)}-`;
      text += val;
    }
  });
  return text.slice(0, -1);
}
