function findDigit(num, nth) {
  if (nth <= 0) return -1;
  num = Math.abs(num).toString();
  if (nth > num.length) return 0;
  return parseInt(num[num.length - nth]);
}
