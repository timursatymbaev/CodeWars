function solve(s) {
  function isVowel(c) {
    return /[aeiou]/.test(c);
  }
  
  let maxVal = 0;
  let currVal = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      currVal = 0;
    } else {
      currVal += s.charCodeAt(i) - 96;
      if (currVal > maxVal) {
        maxVal = currVal;
      }
    }
  }
  
  return maxVal;
}
