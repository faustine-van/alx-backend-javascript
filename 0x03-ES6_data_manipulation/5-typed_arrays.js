export default function createInt8TypedArray(length, position, value) {
  if (position > length || position < 0) {
    return ('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const view = new DataView(newBuffer);
  view.setInt8(position, value);
  return view;
}
