function sumTriangularNumbers(n) {
  if (n < 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 1, tn = 1; i <= n; i++, tn += i) {
    sum += tn;
  }
  return sum;
}
