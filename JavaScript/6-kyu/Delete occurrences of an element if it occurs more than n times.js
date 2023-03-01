function deleteNth(arr, n) {
  const result = [];
  const counts = {};
  
  for (const num of arr) {
    if (counts[num]) {
      counts[num]++;
      if (counts[num] <= n) {
        result.push(num);
      }
    } else {
      counts[num] = 1;
      result.push(num);
    }
  }
  
  return result;
}
