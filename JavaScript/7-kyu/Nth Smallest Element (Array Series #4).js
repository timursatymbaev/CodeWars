function nthSmallest(arr, n) {
  arr.sort((a, b) => a - b);
  
  return arr[n - 1];
}
