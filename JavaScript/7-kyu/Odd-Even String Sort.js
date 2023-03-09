function sortMyString(s) {
  let evenChars = '';
  let oddChars = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenChars += s[i];
    } else {
      oddChars += s[i];
    }
  }
  return evenChars + ' ' + oddChars;
}
