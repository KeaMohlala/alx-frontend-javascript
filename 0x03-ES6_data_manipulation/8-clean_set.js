export default function cleanSet(set, startString) {
  if (!startString.trim()) {
    return '';
  }
  const cleanedStrings = [];
  for (const element of set) {
    if (element.startsWith(startString)) {
      cleanedStrings.push(element.slice(startString.length));
    }
  }
  return cleanedStrings.join('-');
}
