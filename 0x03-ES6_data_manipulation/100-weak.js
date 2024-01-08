export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  count += 1;
  weakMap.set(endpoint, count);
}
