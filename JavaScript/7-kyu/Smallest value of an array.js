function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  return toReturn === 'index' ? arr.indexOf(minValue) : minValue;
}
