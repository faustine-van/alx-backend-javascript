export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    return ('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const view = new DataView(newBuffer);
  view.setInt8(position, value);
  return view;
}
