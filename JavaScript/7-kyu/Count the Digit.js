function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    const square = i * i;
    const digits = square.toString().split('');
    count += digits.filter((digit) => digit === d.toString()).length;
  }
  return count;
}
