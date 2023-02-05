function minValue(values) {
  const uniqueValues = Array.from(new Set(values)).sort((a, b) => a - b);
  return parseInt(uniqueValues.join(''));
}
