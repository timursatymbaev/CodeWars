function listSquared(m, n) {
  let result = [];
  for (let i = m; i <= n; i++) {
    let divisors = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisors.push(j);
      }
    }
    let sum = divisors.reduce((a, b) => a + b ** 2, 0);
    if (Number.isInteger(Math.sqrt(sum))) {
      result.push([i, sum]);
    }
  }
  return result;
}
