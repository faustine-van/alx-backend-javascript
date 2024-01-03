export default function appendToEachArrayValue(array, appendString) {
  const newArray = array.map((val) => appendString + val);
  return newArray;
}
