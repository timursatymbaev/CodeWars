function explode(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const digit = parseInt(s[i]);
    for (let j = 0; j < digit; j++) {
      result += digit.toString();
    }
  }
  return result;
}
