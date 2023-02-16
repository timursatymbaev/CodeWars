function isPangram(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
  const letterSet = new Set(cleanStr);
  return letterSet.size === 26;
}
