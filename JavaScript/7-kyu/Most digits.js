function findLongest(numbers) {
  let maxDigits = -1;
  let maxIndex = -1;
  
  for (let i = 0; i < numbers.length; i++) {
    const digits = Math.floor(Math.log10(Math.abs(numbers[i]))) + 1;
    if (digits > maxDigits) {
      maxDigits = digits;
      maxIndex = i;
    }
  }

  return numbers[maxIndex];
}
