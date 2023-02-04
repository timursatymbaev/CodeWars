function longest(s1, s2) {
  let combinedString = s1 + s2;
  let uniqueLetters = new Set(combinedString);
  return Array.from(uniqueLetters).sort().join('');
}
