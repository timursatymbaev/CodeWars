function incrementString(strng) {
  let nonDigitIndex = strng.search(/\D(?=\d*$)/);

  if (nonDigitIndex === -1) {
    return String(Number(strng) + 1).padStart(strng.length, '0');
  }
  
  let nonDigitPart = strng.slice(0, nonDigitIndex + 1);
  let digitPart = strng.slice(nonDigitIndex + 1);

  let incrementedDigitPart = String(Number(digitPart) + 1).padStart(digitPart.length, '0');

  return nonDigitPart + incrementedDigitPart;
}
