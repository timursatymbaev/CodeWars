function noBoringZeros(num) {
  let numString = num.toString();

  while (numString.endsWith("0") && numString.length > 1) {
    numString = numString.slice(0, -1);
  }

  return Number(numString);
}
