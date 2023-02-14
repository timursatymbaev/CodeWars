function diamond(n) {
  if (n % 2 === 0 || n < 1) {
    return null;
  }
  let diamondStr = '';
  let middle = Math.floor(n/2);
  for (let i = 0; i < n; i++) {
    let spaces = Math.abs(middle - i);
    let stars = n - 2 * spaces;
    diamondStr += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
  }
  return diamondStr;
}
