function sumOfMinimums(arr) {
  return arr.map(row => Math.min(...row)).reduce((sum, val) => sum + val);
}
