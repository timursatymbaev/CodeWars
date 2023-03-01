function isDigit(s) {
  s = s.trim();

  if (s === '') {
    return false;
  }

  const regex = /^-?\d*\.?\d+$/;
  return regex.test(s);
}
