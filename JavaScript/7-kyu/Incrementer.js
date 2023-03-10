function incrementer(arr) { 
  return arr.map((num, i) => (num + i + 1) % 10);
}
