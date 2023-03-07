function last(x) {
  let words = x.split(' ');
  
  words.sort((a, b) => {
    let lastA = a.charAt(a.length - 1);
    let lastB = b.charAt(b.length - 1);
    
    if (lastA < lastB) {
      return -1;
    } else if (lastA > lastB) {
      return 1;
    } else {
      return 0;
    }
  });
  
  return words;
}
