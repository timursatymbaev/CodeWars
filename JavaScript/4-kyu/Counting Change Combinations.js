function countChange(amount, denominations) {
  if (amount === 0) {
    return 1;
  }
  if (amount < 0 || denominations.length === 0) {
    return 0;
  }
  const highest = denominations[denominations.length - 1];
  return countChange(amount - highest, denominations) + countChange(amount, denominations.slice(0, -1));
}
