function seven(m) {
  let steps = 0;
  while (m > 99) {
    m = Math.floor(m / 10) - 2 * (m % 10);
    steps++;
  }
  return [m, steps];
}
