function primeFactors(n) {
  let factors = "";
  let divisor = 2;

  while (n > 2) {
    if (n % divisor === 0) {
      let power = 0;
      while (n % divisor === 0) {
        n /= divisor;
        power++;
      }
      factors += `(${divisor}${power > 1 ? `**${power}` : ""})`;
    }
    divisor++;
  }

  return factors;
}
