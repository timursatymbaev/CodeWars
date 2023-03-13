function squares(x, n) {
  if (n <= 0) {
    return [];
  }
  let result = [x];
  let previous = x;
  for (let i = 1; i < n; i++) {
    let square = previous * previous;
    result.push(square);
    previous = square;
  }
  return result;
}
