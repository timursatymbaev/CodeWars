function toCsvText(arr) {
  return arr.map(row => row.join(',')).join('\n');
}
