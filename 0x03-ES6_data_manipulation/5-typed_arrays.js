export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Create an ArrayBuffer with length arg
  const newBuffer = new ArrayBuffer(length);
  // Create a DataView on the ArrayBuffer
  const view = new DataView(newBuffer);
  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  return view;
}
