function rot13(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = alphabet.indexOf(char.toLowerCase());
    if (index === -1) {
      result += char;
    } else {
      const newIndex = (index + 13) % 26;
      const newChar = alphabet[newIndex];
      result += (char === char.toUpperCase() ? newChar.toUpperCase() : newChar);
    }
  }

  return result;
}
