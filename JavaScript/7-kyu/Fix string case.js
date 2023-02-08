function solve(s) {
  let lower = 0;
  let upper = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upper++;
    } else {
      lower++;
    }
  }
  
  return upper > lower ? s.toUpperCase() : s.toLowerCase();
}
