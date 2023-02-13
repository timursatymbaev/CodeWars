function alphabetPosition(text) {
  const chars = text.toLowerCase().split('');
  const positions = [];
  for (let i = 0; i < chars.length; i++) {
    const code = chars[i].charCodeAt(0);
    if (code >= 97 && code <= 122) {
      positions.push(code - 96);
    }
  }
  return positions.join(' ');
}
