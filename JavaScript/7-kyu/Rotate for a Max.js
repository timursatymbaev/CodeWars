function maxRot(n) {
  let str = String(n);
  let max = n;
  for (let i = 0; i < str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    let rotated = Number(str);
    if (rotated > max) {
      max = rotated;
    }
  }
  return max;
}
