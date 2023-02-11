function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const position = alphabet.indexOf(letter.toLowerCase()) + 1;
  return "Position of alphabet: " + position;
}
