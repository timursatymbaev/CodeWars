function orderedCount(text) {
  const charCount = new Map();
  for (const char of text) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  return [...charCount].map(([char, count]) => [char, count]);
}
