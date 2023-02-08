function digPow(n, p) {
  let digits = n.toString().split('').map(Number);
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(digits[i], p + i);
  }
  let k = sum / n;
  return k % 1 === 0 ? k : -1;
}
