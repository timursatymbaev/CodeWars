function Xbonacci(signature, n) {
  const x = signature.length;
  const result = signature.slice();

  for (let i = x; i < n; i++) {
    const next = result.slice(i - x, i).reduce((sum, num) => sum + num, 0);
    result.push(next);
  }

  return result.slice(0, n);
}
