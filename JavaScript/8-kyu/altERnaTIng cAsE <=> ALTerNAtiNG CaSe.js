String.prototype.toAlternatingCase = function() {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    let char = this.charAt(i);
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
};
