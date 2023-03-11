function toCamelCase(str) {
  let words = str.split(/[-_]/);
  let camelCase = words[0];
  
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    camelCase += word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  return camelCase;
}
