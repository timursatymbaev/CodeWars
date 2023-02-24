function convertFrac(lst) {
  let lcm = lst.reduce((a, b) => {
    return (a * b[1]) / gcd(a, b[1]);
  }, 1);

  let result = lst.map((f) => {
    let factor = lcm / f[1];
    return [f[0] * factor, lcm];
  });

  return result.map((f) => "(" + f[0] + "," + f[1] + ")").join("");
}

function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}
