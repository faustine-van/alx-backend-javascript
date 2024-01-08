export default function groceriesList(map) {
  // myMap.forEach((value, key) => { if (value === 10) {
  // myMap.set(key, newValue);}});
  if (typeof map !== 'object') {
    throw new Error('Cannot process');
  }
  for (const [key, val] of map.entries()) {
    if (val === 1) {
      map.set(key, 100);
    }
  }
}
