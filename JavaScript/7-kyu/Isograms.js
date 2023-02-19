function isIsogram(str) {
  str = str.toLowerCase();
  let seen = new Set();
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }
  
  return true;
}
