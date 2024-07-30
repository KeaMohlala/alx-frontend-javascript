export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  const updatedMap = new Map(groceriesMap);
  updatedMap.forEach((value, key) => {
    if (value === 1) {
      updatedMap.set(key, 100);
    }
  });
  return updatedMap;
}
