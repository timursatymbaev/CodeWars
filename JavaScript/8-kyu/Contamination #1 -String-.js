function contamination(text, character) {
  if (text.length === 0 || character.length === 0) {
    return "";
  }
  
  return character.repeat(text.length);
}
