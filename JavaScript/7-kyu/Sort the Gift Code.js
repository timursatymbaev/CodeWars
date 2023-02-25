function sortGiftCode(code) {
  const chars = code.split('');

  chars.sort();

  const sortedCode = chars.join('');

  return sortedCode;
}
