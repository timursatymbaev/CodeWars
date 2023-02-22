function longestRepetition(s) {
  if (!s) {
    return ["", 0];
  }
  let currentChar = s[0];
  let currentCount = 1;
  let maxChar = currentChar;
  let maxCount = currentCount;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar) {
      currentCount++;
      if (currentCount > maxCount) {
        maxChar = currentChar;
        maxCount = currentCount;
      }
    } else {
      currentChar = s[i];
      currentCount = 1;
    }
  }
  return [maxChar, maxCount];
}
