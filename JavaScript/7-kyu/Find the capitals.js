function capitals(word) {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(i).toUpperCase()) {
      result.push(i);
    }
  }
  return result;
}
