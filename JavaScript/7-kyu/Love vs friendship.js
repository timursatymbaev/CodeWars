function wordsToMark(word) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let value = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const position = alphabet.indexOf(letter) + 1;
    value += position;
  }
  return value;
}
