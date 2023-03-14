function capitalize(s, arr) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(i)) {
      result += s[i].toUpperCase();
    } else {
      result += s[i];
    }
  }
  return result;
}
