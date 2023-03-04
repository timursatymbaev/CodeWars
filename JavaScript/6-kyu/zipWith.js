function zipWith(fn, arr1, arr2) {
  const result = [];
  const length = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    result.push(fn(arr1[i], arr2[i]));
  }
  return result;
}
