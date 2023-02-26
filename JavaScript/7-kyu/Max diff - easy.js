function maxDiff(lst) {
  if (lst.length < 2) return 0;
  let min = lst[0], max = lst[0];
  for (let i = 1; i < lst.length; i++) {
    if (lst[i] < min) {
      min = lst[i];
    } else if (lst[i] > max) {
      max = lst[i];
    }
  }
  return max - min;
}
