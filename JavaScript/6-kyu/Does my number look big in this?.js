function narcissistic(value) {
  const strNum = value.toString();
  const numDigits = strNum.length;
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(strNum[i]);
    sum += Math.pow(digit, numDigits);
  }
  return sum === value;
}
