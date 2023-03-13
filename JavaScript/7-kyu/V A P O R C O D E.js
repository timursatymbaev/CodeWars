function vaporcode(sentence) {
  let letters = sentence.replace(/ /g, "").toUpperCase();
  let result = "";
  for (let i = 0; i < letters.length; i++) {
    result += letters[i] + "  ";
  }
  return result.trim();
}
