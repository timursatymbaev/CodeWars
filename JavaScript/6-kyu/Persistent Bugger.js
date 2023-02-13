function persistence(num) {
  let count = 0;
  
  while (num >= 10) {
    num = String(num).split('').reduce((a, b) => a * b);
    count++;
  }
  
  return count;
}
