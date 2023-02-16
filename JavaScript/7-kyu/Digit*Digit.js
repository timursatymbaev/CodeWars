function squareDigits(num) {
  let digits = num.toString().split('');
  let squaredDigits = digits.map(digit => digit ** 2);
  return Number(squaredDigits.join(''));
}
