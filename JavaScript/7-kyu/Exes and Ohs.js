function XO(str) {
  const count = str.toLowerCase().split('').reduce((acc, char) => {
    if (char === 'x') {
      return acc + 1;
    } else if (char === 'o') {
      return acc - 1;
    } else {
      return acc;
    }
  }, 0);
  
  return count === 0;
}
