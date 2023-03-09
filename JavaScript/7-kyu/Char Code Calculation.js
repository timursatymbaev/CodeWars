function calc(str) {
  const total1 = str.split('').map(char => char.charCodeAt(0)).join('');
  const total2 = total1.replace(/7/g, '1');
  const sum1 = Array.from(total1).reduce((acc, digit) => acc + parseInt(digit), 0);
  const sum2 = Array.from(total2).reduce((acc, digit) => acc + parseInt(digit), 0);
  return sum1 - sum2;
}
