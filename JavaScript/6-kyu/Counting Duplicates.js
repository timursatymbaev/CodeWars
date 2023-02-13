function duplicateCount(text) {
  text = text.toLowerCase();
  const freq = {};
  for (let char of text) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let count = 0;
  for (let char in freq) {
    if (freq[char] > 1) {
      count++;
    }
  }
  return count;
}
