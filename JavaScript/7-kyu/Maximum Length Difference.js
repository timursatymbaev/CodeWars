function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  
  const lengths1 = a1.map(str => str.length);
  const lengths2 = a2.map(str => str.length);
  
  const max1 = Math.max(...lengths1);
  const max2 = Math.max(...lengths2);
  const min1 = Math.min(...lengths1);
  const min2 = Math.min(...lengths2);
  
  return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));
}
