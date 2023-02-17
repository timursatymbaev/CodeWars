function sumDigits(num) {
  let total = 0;
  num = Math.abs(num).toString();
  for (let i = 0; i < num.length; i++) {
    total += parseInt(num.charAt(i));
  }
  return total;
}
