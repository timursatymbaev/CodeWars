function distinct(arr) {
  const result = [];
  const seen = new Set();
  
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      result.push(arr[i]);
    }
  }
  
  return result;
}
