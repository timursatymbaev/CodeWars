function count(string) {  
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
